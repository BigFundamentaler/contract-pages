import { parseEther } from 'viem'
import { AssignRedPacketAddress, AssignRedPacketAbi } from "@/lib/abi/AssignRedPacket";
import { useAccount, useBalance, useWatchBlockNumber, useSendTransaction, useReadContract, useWriteContract, useWaitForTransactionReceipt, useTransaction } from "wagmi";
import { useState } from 'react';

export function UseWriteToChain() {
    const [error, setError] = useState<string | null>(null);
    const [pendingTx, setPendingTx] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { address: accountAddress } = useAccount();
    const { data: accountBalance, refetch: refetchAccountBalance } = useBalance({
        address: accountAddress,
        unit: 'ether',
    });


    useWatchBlockNumber({
        onBlockNumber: (blockNumber) => {
            console.log('New block number:', blockNumber);
            refetchAccountBalance();
        },
    })
    // 给0地址转账,发起交易
    const { sendTransaction, data: transhHash, isPending: isSending, isSuccess: isSubmitted, isError } = useSendTransaction();
    const stringToHex = (str: string): `0x${string}` => `0x${Buffer.from(str, 'utf8').toString('hex')}`;
    const sendToZeroAddress = async (str: string) => {
        console.log('16进制数据：', stringToHex(str))
        sendTransaction({
            to: '0x0000000000000000000000000000000000000000', // 0地址
            value: parseEther('0'),
            data: stringToHex(str),
        });
    }
    // 等待交易确认
    const {
        isLoading: isConfirming,
        isSuccess: isConfirmed,  // 真正的上链成功
        data: receipt,
        error: confirmError
    } = useWaitForTransactionReceipt({
        hash: transhHash,
    });
    // 获取交易信息
    const {data:tx,status:finalStatus} = useTransaction({
        hash: transhHash,
        query: {
            enabled: !!transhHash,
        }
    })
    return {
        accountBalance,
        isSending,
        isSubmitted,
        isError,
        transhHash,
        isConfirming,
        isConfirmed,
        confirmError,
        receipt,
        tx,
        finalStatus,
        sendToZeroAddress
    };
}