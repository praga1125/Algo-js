function maxprofit(prices) {
    if (prices.length < 2) {
        console.log(`Insufficient data to calculate profit predict`);
        return;
    }
    let max = prices[0];
    let min = prices[0];
    for(let i = 0 ; i < prices.length; i++) {
        max = prices[i] >= max ? prices[i] : max;
        min = prices[i] <= min ? prices[i] : min;
    }
    console.log(`The best price to buy : ${min}`);
    console.log(`The best price to sell : ${max}`);
}

let prices = [4, 5, 7, 3, 9, 1];
maxprofit(prices);