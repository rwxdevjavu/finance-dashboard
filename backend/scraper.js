import { stocks } from "./db.js";
import yahooFinance from "yahoo-finance2";
const scrapeStockInfo = async() => {
    console.log('scraping');
      try {
        const results = [];
            for (let stock of stocks) {
            try {
                const data = await yahooFinance.quoteSummary(stock.symbol, {
                    modules: ["price", "summaryDetail", "defaultKeyStatistics", "earnings"]
                });

                results.push({
                name: stock.name,
                symbol: stock.symbol,
                cmp: data.price.regularMarketPrice,
                present: data.price.regularMarketChange * stock.qty,
                gain:(data.price.regularMarketChange * stock.qty) - stock.investment,
                peRatio: data.summaryDetail.trailingPE || data.defaultKeyStatistics.forwardPE,
                latestEarnings: (data.earnings?.financialsChart?.quarterly?.slice(-1)[0]).earnings || null
                });
            } catch (err) {
                results.push({ name: stock.name, symbol: stock.symbol, error: err.message });
            }
        }
        return results;
    } catch (err) {
        return err;
    }
}
export { scrapeStockInfo };