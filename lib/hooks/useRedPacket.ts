import { AssignRedPacketAddress, AssignRedPacketAbi } from "@/lib/abi/AssignRedPacket";
import { useAccount,useWatchBlockNumber, useReadContract, useWriteContract } from "wagmi";

export function UseRedPacket() {
    const { address: account } = useAccount();
    const { data: balance, refetch: refetchBalance, isLoading: isBalanceLoading, isError: isBalanceError } = useReadContract({
        address: AssignRedPacketAddress,
        abi: AssignRedPacketAbi.abi,
        functionName: 'getBalance',
    })

    const { writeContract } = useWriteContract();
    const deposit = async (amount: bigint) => {
        try {
            await writeContract({
                address: AssignRedPacketAddress,
                abi: AssignRedPacketAbi.abi,
                functionName: 'deposit',
                value: amount * BigInt(1e18), // Amount in wei
            });
            // refetchBalance(); // Refresh balance after deposit
        } catch (error) {
            console.error('Deposit failed:', error);
        }
    };

    useWatchBlockNumber({
        onBlockNumber: (blockNumber) => {
            console.log('New block number:', blockNumber);
            refetchBalance(); // Optionally refresh balance on new block
        },
    })
    return {
        balance,
        isBalanceLoading,
        isBalanceError,
        refetchBalance,
        deposit,
    };
}