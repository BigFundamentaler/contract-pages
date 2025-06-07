
"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ConnectButton } from '@rainbow-me/rainbowkit';

import {
  UseRedPacket,
} from "@/lib/hooks/useRedPacket";
export default function Home() {
  const {
    accountBalance,
    contractBalance,
    isBalanceLoading,
    isBalanceError,
    deposit,
    withdraw,
    grabRedPacket,
  } = UseRedPacket();
  const [amount, setAmount] = useState<string | number>('');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ConnectButton showBalance={false}/>
        {accountBalance && <div>Account Balance: {accountBalance.formatted}{accountBalance.symbol}</div>}
        <div>
          {isBalanceLoading && <p>Loading contractBalance...</p>}
          {isBalanceError && <p>Error loading contractBalance</p>}
          {contractBalance ? <p>Contract Balance:{(Number(contractBalance) / 1e18)} ETH</p> : <p>0 ETH</p>}
        </div>
        <div className="flex justify-start items-center gap-4">
          <Input value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAmount(Number(e.target.value));
          }} type="text" />
          <Button onClick={() => { deposit(BigInt(amount)) }}>充值</Button>
          <Button onClick={() => { withdraw() }}>全部提现</Button>
        </div>
        <div className="flex justify-start items-center gap-4">
          <Button onClick={() => { grabRedPacket() }}>抢红包</Button>
        </div>
      </main>
    </div>
  );
}
