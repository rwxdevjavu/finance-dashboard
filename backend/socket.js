import { WebSocketServer } from "ws";

let wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("A new client connected!");
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });
});

console.log("WebSocket server is running on ws://localhost:8080");

// export interface Stock {
//   name: string;
//   purchasePrice: number;
//   qty: number;
//   investment: number;
//   portfolioPercentage: string;
//   symbol: string;
// }


// export interface Sector {
//   name: string;
//   investment: number;
//   portfolioPercentage: string;
//   stocks: Stock[];
// }

// export interface Portfolio {
//   sectors: Sector[];
// }

// const portfolios: Portfolio = {
//     "sectors": [
//       {
//         "name": "Financial Sector",
//         "investment": 328450,
//         "portfolioPercentage": "21%",
//         "stocks": [
//           { "name": "HDFC Bank", "purchasePrice": 1490, "qty": 50, "investment": 74500, "portfolioPercentage": "5%", "symbol": "HDFCBANK" },
//           { "name": "Bajaj Finance", "purchasePrice": 6466, "qty": 15, "investment": 96990, "portfolioPercentage": "6%", "symbol": "BAJFINANCE" },
//           { "name": "ICICI Bank", "purchasePrice": 780, "qty": 84, "investment": 65520, "portfolioPercentage": "4%", "symbol": "532174" },
//           { "name": "Bajaj Housing", "purchasePrice": 130, "qty": 504, "investment": 65520, "portfolioPercentage": "4%", "symbol": "544252" },
//           { "name": "Savani Financials", "purchasePrice": 24, "qty": 1080, "investment": 25920, "portfolioPercentage": "2%", "symbol": "511577" }
//         ]
//       },
//       {
//         "name": "Tech Sector",
//         "investment": 337820,
//         "portfolioPercentage": "22%",
//         "stocks": [
//           { "name": "Affle India", "purchasePrice": 1151, "qty": 50, "investment": 57550, "portfolioPercentage": "4%", "symbol": "AFFLE" },
//           { "name": "LTI Mindtree", "purchasePrice": 4775, "qty": 16, "investment": 76400, "portfolioPercentage": "5%", "symbol": "LTIM" },
//           { "name": "KPIT Tech", "purchasePrice": 672, "qty": 61, "investment": 40992, "portfolioPercentage": "3%", "symbol": "542651" },
//           { "name": "Tata Tech", "purchasePrice": 1072, "qty": 63, "investment": 67536, "portfolioPercentage": "4%", "symbol": "544028" },
//           { "name": "BLS E-Services", "purchasePrice": 232, "qty": 191, "investment": 44312, "portfolioPercentage": "3%", "symbol": "544107" },
//           { "name": "Tanla", "purchasePrice": 1134, "qty": 45, "investment": 51030, "portfolioPercentage": "3%", "symbol": "532790" }
//         ]
//       },
//       {
//         "name": "Consumer",
//         "investment": 263565,
//         "portfolioPercentage": "17%",
//         "stocks": [
//           { "name": "Dmart", "purchasePrice": 3777, "qty": 27, "investment": 101979, "portfolioPercentage": "7%", "symbol": "DMART" },
//           { "name": "Tata Consumer", "purchasePrice": 845, "qty": 90, "investment": 76050, "portfolioPercentage": "5%", "symbol": "532540" },
//           { "name": "Pidilite", "purchasePrice": 2376, "qty": 36, "investment": 85536, "portfolioPercentage": "6%", "symbol": "500331" }
//         ]
//       },
//       {
//         "name": "Power",
//         "investment": 158860,
//         "portfolioPercentage": "10%",
//         "stocks": [
//           { "name": "Tata Power", "purchasePrice": 224, "qty": 225, "investment": 50400, "portfolioPercentage": "3%", "symbol": "500400" },
//           { "name": "KPI Green", "purchasePrice": 875, "qty": 50, "investment": 43750, "portfolioPercentage": "3%", "symbol": "542323" },
//           { "name": "Suzlon", "purchasePrice": 44, "qty": 450, "investment": 19800, "portfolioPercentage": "1%", "symbol": "532667" },
//           { "name": "Gensol", "purchasePrice": 998, "qty": 45, "investment": 44910, "portfolioPercentage": "3%", "symbol": "542851" }
//         ]
//       },
//       {
//         "name": "Pipe Sector",
//         "investment": 198656,
//         "portfolioPercentage": "13%",
//         "stocks": [
//           { "name": "Hariom Pipes", "purchasePrice": 580, "qty": 60, "investment": 34800, "portfolioPercentage": "2%", "symbol": "543517" },
//           { "name": "Astral", "purchasePrice": 1517, "qty": 56, "investment": 84952, "portfolioPercentage": "6%", "symbol": "ASTRAL" },
//           { "name": "Polycab", "purchasePrice": 2818, "qty": 28, "investment": 78904, "portfolioPercentage": "5%", "symbol": "542652" }
//         ]
//       },
//       {
//         "name": "Others",
//         "investment": 255709,
//         "portfolioPercentage": "17%",
//         "stocks": [
//           { "name": "Clean Science", "purchasePrice": 1610, "qty": 32, "investment": 51520, "portfolioPercentage": "3%", "symbol": "543318" },
//           { "name": "Deepak Nitrite", "purchasePrice": 2248, "qty": 27, "investment": 60696, "portfolioPercentage": "4%", "symbol": "506401" },
//           { "name": "Fine Organic", "purchasePrice": 4284, "qty": 16, "investment": 68544, "portfolioPercentage": "4%", "symbol": "541557" },
//           { "name": "Gravita", "purchasePrice": 2037, "qty": 8, "investment": 16296, "portfolioPercentage": "1%", "symbol": "533282" },
//           { "name": "SBI Life", "purchasePrice": 1197, "qty": 49, "investment": 58653, "portfolioPercentage": "4%", "symbol": "540719" }
//         ]
//       }
//     ],
// }