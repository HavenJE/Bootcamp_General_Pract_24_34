
const bitcoinPrice = () => {
    const res = await fetch(`https://api.cryptonator.com/api/ticker/btc-usd`)
    const data = await res.json(); 
    console.log(data.ticker.price)
}