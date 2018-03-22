const simulateMartingale = (balance, unit, rounds) => {


    let curBet = unit;
    let curBalance = balance;
    let profit = 0;
    let overallResult = 1;
    let totalLoss = 0;
    
    let wins = 0;
    let losses = 0;
    
    let allBalances = []
    let allProfits = []

    let lastBetResult;
    
    for (var i = 0; i < rounds; i++) {
        
        let result = 1;
        
        // If you can afford your next bet...
        if(curBalance >= curBet) {
            
            // Place a new bet.
            if(Math.random() <= 0.4864) {
                result = "Win"
                curBalance += curBet;
                profit += curBet;
                curBet = unit;
                wins++
                lastBetResult = true;
            } else {
                result = "Lose"
                curBalance -= curBet;
                profit -= curBet;
                curBet = curBet * 2;
                losses++
                lastBetResult = false;
            }
            
            // console.log("Round " + i + ": " + result + " // Balance: " + curBalance)
            allBalances.push(curBalance)
            allProfits.push(profit)
            
        // If you can't afford a new bet    
        } else {
            totalLoss = balance - curBalance;
            overallResult = 0;
            break;
        }
    }
    
    if (curBalance < balance) {
        totalLoss = balance-curBalance;
    }
    
    var output = {
        result: overallResult,
        curBalance: curBalance,
        wins: wins,
        losses: losses,
        profit: profit,
        totalLoss: totalLoss,
        allBalances: allBalances,
        allProfits: allProfits
    }
    
    return output

}

const run3000times = (balance, unit, rounds) => {
    
    var b = balance;
    var u = unit;
    var r = rounds;
    
    // Simulate
    let avgProfit = 0;
    let passes = 0;
    let busts = 0;
    
    let avgLoss = 0;
    let avgLossCounter = 0;
    
    for (let i = 0; i < 100000; i++) {
        let results = simulateMartingale(b, u, r);
        if (results.result == 1 && results.profit >= 0) {
            avgProfit += results.profit;
            passes++
        } else {
            busts++
            avgLoss += results.totalLoss;
            avgLossCounter++;
        }
    }
    
    let data = {
        avgProfit: Number((avgProfit / 100000).toFixed(0)),
        chancesOfLoss: busts / (busts+passes),
        chancesOfSuccess: (passes / (passes+busts)) * 100,
        avgLoss: Number((avgLoss / avgLossCounter).toFixed(2))
    }
    
    return data

};

module.exports = {
    simulateMartingale,
    run3000times
};