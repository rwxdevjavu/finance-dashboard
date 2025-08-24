"use client";
import React, { useMemo, memo } from "react";

type Stock = {
  name: string;
  symbol: string;
  purchasePrice: number;
  qty: number;
  investment: number;
};

type LiveData = {
  cmp?: number;
  peRatio?: number | string;
  latestEarnings?: number;
};

export type StockRowProps = {
  stock: Stock;
  liveData?: LiveData;
};

const MemoRow = memo(({ stock, liveData }: StockRowProps) => {
  const { cmp, present, gain, peRatio, latestEarnings } = useMemo(() => {
    const cmp = liveData?.cmp ?? stock.purchasePrice;
    const present = cmp * stock.qty;
    const gain = present - stock.investment;
    const peRatio = liveData?.peRatio ?? "-";

    const latestEarnings = liveData?.latestEarnings
      ? `${liveData.latestEarnings}`
      : "-";

    return { cmp, present, gain, peRatio, latestEarnings };
  }, [
    liveData?.cmp,
    liveData?.peRatio,
    liveData?.latestEarnings,
    stock.purchasePrice,
    stock.qty,
    stock.investment,
  ]);

  return (
    <tr className="hover:bg-gray-800">
      <td className="px-4 py-2">{stock.name}</td>
      <td className="px-4 py-2">{stock.symbol}</td>
      <td className="px-4 py-2">{cmp}</td>
      <td className="px-4 py-2">{present}</td>
      <td className="px-4 py-2">{gain}</td>
      <td className="px-4 py-2">{peRatio}</td>
      <td className="px-4 py-2">{latestEarnings}</td>
    </tr>
  );
},
(prev, next) => {
  return (
    prev.stock.symbol === next.stock.symbol &&
    prev.liveData?.cmp === next.liveData?.cmp &&
    prev.liveData?.peRatio === next.liveData?.peRatio &&
    prev.liveData?.latestEarnings === next.liveData?.latestEarnings
  );
});

MemoRow.displayName = "MemoRow";

export default MemoRow;
