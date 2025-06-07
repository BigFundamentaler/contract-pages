import { parseEther } from 'viem'
import { AssignRedPacketAddress, AssignRedPacketAbi } from "@/lib/abi/AssignRedPacket";
import { useAccount, useBalance, useWatchBlockNumber, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { useState } from 'react';
type HashType = `0x${string}`;
// 错误信息映射
const CONTRACT_ERROR_MESSAGES = {
    'not enough': '红包余额不足',
    'no redpackets left': '红包已抢完',
    'already grab it!': '您已经抢过红包了',
    'not the owner': '只有合约拥有者才能执行此操作',
    'User rejected the request': '用户取消了交易',
    'insufficient funds': '账户余额不足',
} as const;

function parseRevertReason(err: any): string {
    let errorMessage = 'Unknown error';

    // 检查各种错误格式
    if (typeof err?.shortMessage === 'string') {
        errorMessage = err.shortMessage;
    } else if (typeof err?.message === 'string') {
        const revertMatch = err.message.match(/revert\s+(.+?)(?:\n|$)/i);
        if (revertMatch) {
            errorMessage = revertMatch[1].trim();
        } else {
            errorMessage = err.message;
        }
    } else if (err?.cause?.shortMessage) {
        errorMessage = err.cause.shortMessage;
    }

    // 去除引号
    errorMessage = errorMessage.replace(/['"]/g, '').trim();

    // 映射到中文
    for (const [key, value] of Object.entries(CONTRACT_ERROR_MESSAGES)) {
        if (errorMessage.toLowerCase().includes(key.toLowerCase())) {
            return value;
        }
    }

    return errorMessage;
}
export function UseRedPacket() {
    const [error, setError] = useState<string | null>(null);
    const [pendingTx, setPendingTx] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { address: accountAddress } = useAccount();
    const { data: accountBalance, refetch: refetchAccountBalance } = useBalance({
        address: accountAddress,
        unit: 'ether',
    });
    const { data: contractBalance, refetch: refetchContractBalance, isLoading: isBalanceLoading, isError: isBalanceError } = useReadContract({
        address: AssignRedPacketAddress,
        abi: AssignRedPacketAbi.abi,
        functionName: 'getBalance',
    })

    const { writeContract, writeContractAsync } = useWriteContract();
    // 充值
    const deposit = async (amount: bigint) => {
        try {
            await writeContract({
                address: AssignRedPacketAddress,
                abi: AssignRedPacketAbi.abi,
                functionName: 'deposit',
                value: parseEther(amount.toString()),
            });
        } catch (error) {
            console.error('Deposit failed:', error);
        }
    };
    // 抢红包
    const grabRedPacket = async () => {
        setError(null);
        setIsLoading(true);

        try {
            const hash = await writeContractAsync({
                address: AssignRedPacketAddress,
                abi: AssignRedPacketAbi.abi,
                functionName: 'grabRedPacket',
            });

            console.log('抢红包成功:', hash);
            setPendingTx(hash);
            return hash;

        } catch (error: any) {
            console.error('抢红包失败:', error);
            const errorMessage = parseRevertReason(error);
            console.error('errorMessage:', errorMessage);
            setError(errorMessage);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    // 提现
    const withdraw = async () => {
        setError(null);
        setIsLoading(true);
        try {
            const hash = await writeContractAsync({
                address: AssignRedPacketAddress,
                abi: AssignRedPacketAbi.abi,
                functionName: 'withdraw',
            });
            console.log('提现成功:', hash);
            setPendingTx(hash);
            return hash;

        } catch (error: any) {
            console.error('提现失败:', error);
            const errorMessage = parseRevertReason(error);
            console.error('errorMessage:', errorMessage);
            setError(errorMessage);
            return null;
        } finally {
            setIsLoading(false);
        }
    }
    useWatchBlockNumber({
        onBlockNumber: (blockNumber) => {
            console.log('New block number:', blockNumber);
            refetchAccountBalance();
            refetchContractBalance();
        },
    })
    return {
        accountBalance,
        contractBalance,
        isBalanceLoading,
        isBalanceError,
        refetchContractBalance,
        deposit,
        withdraw,
        grabRedPacket
    };
}