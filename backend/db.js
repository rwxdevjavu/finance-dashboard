const stocks = [
          { "name": "HDFC Bank", "purchasePrice": 1490, "qty": 50, "investment": 74500, "portfolioPercentage": "5%", "symbol": "HDFCBANK.NS" ,"sector":"Financial Sector"},
          { "name": "Bajaj Finance", "purchasePrice": 6466, "qty": 15, "investment": 96990, "portfolioPercentage": "6%", "symbol": "BAJFINANCE.NS" ,"sector":"Financial Sector"},
          { "name": "ICICI Bank", "purchasePrice": 780, "qty": 84, "investment": 65520, "portfolioPercentage": "4%", "symbol": "ICICIBANK.NS" ,"sector":"Financial Sector"},
          { "name": "Bajaj Housing", "purchasePrice": 130, "qty": 504, "investment": 65520, "portfolioPercentage": "4%", "symbol": "BAJAJHFL.BO" ,"sector":"Financial Sector"},
          { "name": "Savani Financials", "purchasePrice": 24, "qty": 1080, "investment": 25920, "portfolioPercentage": "2%", "symbol": "SAVFI.BO","sector":"Financial Sector" },
          { "name": "Affle India", "purchasePrice": 1151, "qty": 50, "investment": 57550, "portfolioPercentage": "4%", "symbol": "AFFLE.NS" ,"sector":"Tech Sector"},
          { "name": "LTI Mindtree", "purchasePrice": 4775, "qty": 16, "investment": 76400, "portfolioPercentage": "5%", "symbol": "LTIM.NS" ,"sector":"Tech Sector"},
          { "name": "KPIT Tech", "purchasePrice": 672, "qty": 61, "investment": 40992, "portfolioPercentage": "3%", "symbol": "KPITTECH.BO" ,"sector":"Tech Sector"},
          { "name": "Tata Tech", "purchasePrice": 1072, "qty": 63, "investment": 67536, "portfolioPercentage": "4%", "symbol": "TATATECH.BO" ,"sector":"Tech Sector"},
          { "name": "BLS E-Services", "purchasePrice": 232, "qty": 191, "investment": 44312, "portfolioPercentage": "3%", "symbol": "544107.BO" ,"sector":"Tech Sector"},
          { "name": "Tanla", "purchasePrice": 1134, "qty": 45, "investment": 51030, "portfolioPercentage": "3%", "symbol": "TANLA.NS","sector":"Tech Sector" },
          { "name": "Dmart", "purchasePrice": 3777, "qty": 27, "investment": 101979, "portfolioPercentage": "7%", "symbol": "DMART.NS" , "sector":"Consumer"},
          { "name": "Tata Consumer", "purchasePrice": 845, "qty": 90, "investment": 76050, "portfolioPercentage": "5%", "symbol": "TATACONSUM.NS" , "sector":"Consumer"},
          { "name": "Pidilite", "purchasePrice": 2376, "qty": 36, "investment": 85536, "portfolioPercentage": "6%", "symbol": "PIDILITIND.NS", "sector":"Consumer" },
          { "name": "Tata Power", "purchasePrice": 224, "qty": 225, "investment": 50400, "portfolioPercentage": "3%", "symbol": "TATAPOWER.NS" , "sector":"Power"},
          { "name": "KPI Green", "purchasePrice": 875, "qty": 50, "investment": 43750, "portfolioPercentage": "3%", "symbol": "KPIGREEN.BO" , "sector":"Power"},
          { "name": "Suzlon", "purchasePrice": 44, "qty": 450, "investment": 19800, "portfolioPercentage": "1%", "symbol": "SUZLON.NS" , "sector":"Power"},
          { "name": "Gensol", "purchasePrice": 998, "qty": 45, "investment": 44910, "portfolioPercentage": "3%", "symbol": "GENSOL.NS", "sector":"Power" },
          { "name": "Hariom Pipes", "purchasePrice": 580, "qty": 60, "investment": 34800, "portfolioPercentage": "2%", "symbol": "HARIOMPIPE.BO" , "sector":"Pipe Sector"},
          { "name": "Astral", "purchasePrice": 1517, "qty": 56, "investment": 84952, "portfolioPercentage": "6%", "symbol": "ASTRAL.NS" , "sector":"Pipe Sector"},
          { "name": "Polycab", "purchasePrice": 2818, "qty": 28, "investment": 78904, "portfolioPercentage": "5%", "symbol": "POLYCAB.NS", "sector":"Pipe Sector" },
          { "name": "Clean Science", "purchasePrice": 1610, "qty": 32, "investment": 51520, "portfolioPercentage": "3%", "symbol": "CLEAN.BO" ,"sector":"Others"},
          { "name": "Deepak Nitrite", "purchasePrice": 2248, "qty": 27, "investment": 60696, "portfolioPercentage": "4%", "symbol": "DEEPAKNTR.NS","sector":"Others" },
          { "name": "Fine Organic", "purchasePrice": 4284, "qty": 16, "investment": 68544, "portfolioPercentage": "4%", "symbol": "FINEORG.BO" ,"sector":"Others"},
          { "name": "Gravita", "purchasePrice": 2037, "qty": 8, "investment": 16296, "portfolioPercentage": "1%", "symbol": "GRAVITA.BO" ,"sector":"Others"},
          { "name": "SBI Life", "purchasePrice": 1197, "qty": 49, "investment": 58653, "portfolioPercentage": "4%", "symbol": "SBILIFE.NS","sector":"Others" },
    ];


const db_sectors = ["Financial Sector","Tech Sector","Consumer","Power","Pipe Sector","Others"];

const getStocksPortfilio = () => {
    let sectors = [];
    let totalInvestment = stocks.reduce((acc, stock) => acc + stock.investment, 0);
    db_sectors.forEach((sector) => {
        let sectorStocks = stocks.filter(stock => stock.sector === sector);
        let sectorInvestment = sectorStocks.reduce((acc, stock) => acc + stock.investment, 0);
        let sectorPercentage = ((sectorInvestment / totalInvestment) * 100).toFixed(0) + "%";
        sectors.push({
            name: sector,
            investment: sectorInvestment,
            portfolioPercentage: sectorPercentage,
            stocks: sectorStocks
        });
    });
    return sectors;
};

export { getStocksPortfilio, stocks };