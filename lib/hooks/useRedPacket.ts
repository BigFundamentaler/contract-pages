import { parseEther } from 'viem'
import { AssignRedPacketAddress, AssignRedPacketAbi } from "@/lib/abi/AssignRedPacket";
import { useAccount, useBalance, useWatchBlockNumber, useReadContract, useWriteContract,useWaitForTransactionReceipt } from "wagmi";
type HashType = `0x${string}`;
// 错误信息解析函数
function parseRevertReason(err: any): string {
    if (typeof err?.shortMessage === 'string') return err.shortMessage
    if (typeof err?.message === 'string') {
        const match = err.message.match(/revert\s([^'"]+)/i)
        return match?.[1] ?? 'Transaction reverted'
    }
    return 'Unknown error'
}
export function UseRedPacket() {
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

    const { writeContract,writeContractAsync } = useWriteContract();
    // 等待交易完成
    const waitTransaction = async (hash:HashType) => {
        try {
            const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash })
        } catch (err:any) {
            console.log('waitTransaction:',err)
        }
    }
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
        try {
            const grabHash = await writeContractAsync({
                address: AssignRedPacketAddress,
                abi: AssignRedPacketAbi.abi,
                functionName: 'grabRedPacket',
            });
            console.log('grabRedPacket hash:', grabHash);
            // waitTransaction(grabHash)
            return grabHash;
        } catch (err:any) {
            console.log('grabRedPacket:',err)
            return null;
        }
    };

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
        grabRedPacket
    };
}