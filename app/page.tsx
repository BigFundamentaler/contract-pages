
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
    balance,
    isBalanceLoading,
    isBalanceError,
    deposit,
  } = UseRedPacket();
  const [amount, setAmount] = useState<string|number>('');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ConnectButton />

        <div>
          {isBalanceLoading && <p>Loading balance...</p>}
          {isBalanceError && <p>Error loading balance</p>}
          {balance ? <p>Contract Balance:{ } {(Number(balance) / 1e18)} ETH</p> : <p>0 ETH</p>}
        </div>
        <div>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <Input value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAmount(Number(e.target.value));
          }} type="text" />
          <Button onClick={() => { deposit(BigInt(amount)) }}>充值</Button>
        </div>
      </main>
    </div>
  );
}
