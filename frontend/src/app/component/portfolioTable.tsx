"use client";
import { useEffect, useRef, useState } from "react";

export interface Stock {
  name: string;
  purchasePrice: number;
  qty: number;
  investment: number;
  portfolioPercentage: string;
  symbol: string;
}

export interface Sector {
  name: string;
  investment: number;
  portfolioPercentage: string;
  stocks: Stock[];
}

export interface Portfolio {
  sectors: Sector[];
}

interface StockUpdate {
  name: string,
  symbol: string;
  cmp: number;
  present:number;
  gain:number;
  peRatio: number;
  latestEarnings: number;
}

type StockInfoMap = Record<string, StockUpdate>;

export default function PortfolioTable() {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [stockInfo, setStockInfo] = useState<StockInfoMap>({});
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    let reconnectTimer: NodeJS.Timeout;

    const connect = () => {
      const ws = new WebSocket("ws://localhost:8080");
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("✅ Connected to WebSocket server");
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);

        // msg.payload should be an array of StockUpdate
        msg.payload.forEach((update: StockUpdate) => {
          setStockInfo((prev) => ({
            ...prev,
            [update.symbol]: update,
          }));
        });
      };

      ws.onclose = () => {
        console.error("❌ WebSocket closed, retrying in 1s...");
        reconnectTimer = setTimeout(connect, 1000);
      };
    };

    connect();

    return () => {
      clearTimeout(reconnectTimer);
      wsRef.current?.close();
    };
  }, []);

  if (!portfolio) return <div className="p-6">Loading portfolio...</div>;

  return (
    <div className="p-6 bg-black text-white min-h-screen">
        {portfolio.sectors.map((sector, i) => (
            <div
            key={i}
            className="mb-8 shadow-lg rounded-2xl overflow-hidden border border-gray-700"
            >
            {/* Sector Header */}
            <div className="bg-gray-800 px-4 py-3 flex justify-between items-center">
                <h2 className="text-lg font-bold text-white">{sector.name}</h2>
                <span className="text-sm text-gray-300">
                Investment: ₹{sector.investment.toLocaleString()} |{" "}
                {sector.portfolioPercentage}
                </span>
            </div>

            {/* Stock Table */}
            <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-gray-900 text-gray-300">
                <tr>
                    <th className="px-4 py-2 border border-gray-700">Stock</th>
                    <th className="px-4 py-2 border border-gray-700">Purchase Price</th>
                    <th className="px-4 py-2 border border-gray-700">Qty</th>
                    <th className="px-4 py-2 border border-gray-700">Investment</th>
                    <th className="px-4 py-2 border border-gray-700">% of Portfolio</th>
                    <th className="px-4 py-2 border border-gray-700">CMP</th>
                    <th className="px-4 py-2 border border-gray-700">Present Value</th>
                    <th className="px-4 py-2 border border-gray-700">Gain/Loss</th>
                    <th className="px-4 py-2 border border-gray-700">P/E Ratio</th>
                    <th className="px-4 py-2 border border-gray-700">Latest Earnings</th>
                </tr>
                </thead>
                <tbody>
                {sector.stocks.map((stock, j) => {
                    const liveData = stockInfo[stock.symbol] || {};

                    const cmp = liveData?.cmp ?? "-";
                    const present = liveData?.present ?? "-";
                    const gain = liveData?.gain ?? null;
                    const peRatio = liveData?.peRatio ?? "-";
                    const latestEarnings = liveData?.latestEarnings ?? null;

                    return (
                    <tr key={j} className="hover:bg-gray-800">
                        <td className="px-4 py-2 border border-gray-700">{stock.name}</td>
                        <td className="px-4 py-2 border border-gray-700">
                        ₹{stock.purchasePrice}
                        </td>
                        <td className="px-4 py-2 border border-gray-700">{stock.qty}</td>
                        <td className="px-4 py-2 border border-gray-700">
                        ₹{stock.investment.toLocaleString()}
                        </td>
                        <td className="px-4 py-2 border border-gray-700">
                        {stock.portfolioPercentage}
                        </td>

                        {/* Live Data */}
                        <td className="px-4 py-2 border border-gray-700">
                        {cmp !== "-" ? `₹${cmp}` : "-"}
                        </td>
                        <td className="px-4 py-2 border border-gray-700">
                        {present !== "-" ? `₹${present}` : "-"}
                        </td>
                        <td
                        className={`px-4 py-2 border border-gray-700 ${
                            gain > 0
                            ? "text-green-400"
                            : gain < 0
                            ? "text-red-400"
                            : "text-gray-300"
                        }`}
                        >
                        {gain !== null ? `₹${gain}` : "-"}
                        </td>
                        <td className="px-4 py-2 border border-gray-700">
                        {peRatio !== "-" ? peRatio : "-"}
                        </td>
                        <td className="px-4 py-2 border border-gray-700">
                        {latestEarnings
                            ? `${latestEarnings}`
                            : "-"}
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            </div>
        ))}
    </div>

  );
}
