
"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ConnectButton } from '@rainbow-me/rainbowkit';

import {
  UseWriteToChain,
} from "@/lib/hooks/useWriteToChain";
import { spanish } from "viem/accounts";
const serializeBigInt = (obj: any): any => {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === 'bigint') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {
    return obj.map(serializeBigInt);
  }

  if (typeof obj === 'object') {
    const serialized: any = {};
    for (const [key, value] of Object.entries(obj)) {
      serialized[key] = serializeBigInt(value);
    }
    return serialized;
  }

  return obj;
};
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
    tx,
    finalStatus,
    transhHash,
    graphData,
    graphStatus,
    graphRefetch,
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
        {finalStatus === 'success' && <div>
          <div>交易信息：</div>
          <div>form：{tx?.from}</div>
          <div>to：{tx?.to}</div>
          <div>value：{tx?.value}</div>
          <div>input-data：{tx?.input}</div>
        </div>}
        <div>
          <Button onClick={() => { graphRefetch() }}>通过graph查询交易信息</Button>
        </div>
        {!!(graphData) === true && <div>
          <div>
            <div>最新充值信息</div>
            <div>
              {(graphData as any).deposits.map((item: any) => (
                <div key={item.id}>
                  <div>区块号：{item.blockNumber}</div>
                  <div>用户：{item.user}</div>
                  <div>金额：{item.amount}</div>
                  <div>--------------------------</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>最新转账信息</div>
            <div>
              {(graphData as any).transfers.map((item: any) => (
                <div key={item.id}>
                  <div>区块号：{item.blockNumber}</div>
                  <div>From：{item.from}</div>
                  <div>To：{item.to}</div>
                  <div>金额：{item.amount}</div>
                  <div>转账消息：{item.message}</div>
                  <div>--------------------------</div>
                </div>
              ))}
            </div>
          </div>
        </div>}
      </main>
    </div>
  );
}
