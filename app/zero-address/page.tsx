
"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ConnectButton } from '@rainbow-me/rainbowkit';

import {
  UseWriteToChain,
} from "@/lib/hooks/useWriteToChain";
import { spanish } from "viem/accounts";
export default function Home() {

  const {
    accountBalance,
    sendToZeroAddress,
    isSending,
    isSubmitted,
    isError,
    isConfirming,
    isConfirmed,
    confirmError,
    receipt,
    transhHash,
  } = UseWriteToChain();
  const getCurrentStage = () => {
    if (isConfirmed) return "上链成功";
    if (isConfirming || (isSubmitted && transhHash)) return "矿工正在打包...";
    if (isSubmitted) return "提交到内存池";
    if (isSending) return "等待用户点击确认";
    return "等待用户操作";
  };
  const [inputTX, setInputTx] = useState<string>('');
  // 打开区块链浏览器
  const openExplorer = (hash: `0x${string}`) => {
    if (!hash) return
    const url = `https://sepolia.etherscan.io/tx/${hash}`;
    window.open(url, '_blank');
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h4>HomeWork ZeroAddress</h4>
        <ConnectButton showBalance={false} />
        {accountBalance && <div>Account Balance: {accountBalance.formatted}{accountBalance.symbol}</div>}
        <div className="flex justify-start items-center gap-4">
          <Input value={inputTX} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputTx(e.target.value);
          }} type="text" />
          <Button onClick={() => { sendToZeroAddress(inputTX) }}>向0地址转账</Button>

        </div>
        {transhHash && <div>
          <div>交易哈希: {transhHash}</div>
          <Button onClick={() => { openExplorer(transhHash!) }}>查看交易详情</Button>
        </div>}
        <div>
          {/* {isSending && <span>等待用户确认中...</span>}
          {isSubmitted && transhHash && <span>交易已提交到内存池</span>}
          {isError && <span>交易失败</span>} */}
          当前状态：{getCurrentStage()}
        </div>
      </main>
    </div>
  );
}
