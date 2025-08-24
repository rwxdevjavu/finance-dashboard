import PortfolioTable from "./component/portfolioTable";

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


export default function Home() {
  return (
    <div className="font-sans">
      <PortfolioTable/>
    </div>
  );
}
