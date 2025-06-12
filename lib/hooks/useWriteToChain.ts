import { parseEther } from 'viem'
import { useQuery } from '@tanstack/react-query';
import { gql, request } from 'graphql-request'
import { useAccount, useBalance, useWatchBlockNumber, useSendTransaction, useWaitForTransactionReceipt, useTransaction } from "wagmi";
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
    const { data: tx, status: finalStatus } = useTransaction({
        hash: transhHash,
        query: {
            enabled: !!transhHash,
        }
    })

    const query = gql`{
        deposits(first: 5) {
          id
          user
          amount
          blockNumber
        }
        transfers(first: 5) {
          id
          blockNumber
          from
          to
          amount
          message
        }
      }`
    const url = 'https://api.studio.thegraph.com/query/113645/test-simple-wallet/version/latest'
    const apiKey = '767933a5e7845970bb38a23f0a07787d'
    const headers = { Authorization: `Bearer ${apiKey}` }
    const { data:graphData, status:graphStatus,refetch: graphRefetch } = useQuery({
        queryKey: ['data'],
        async queryFn() {
            return await request(url, query, {}, headers)
        },
        enabled: false,
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
        graphData,
        graphStatus,
        graphRefetch,
        sendToZeroAddress
    };
}