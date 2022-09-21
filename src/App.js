import  { useState, useEffect } from "react";

const test_value = [{"id":"btc-bitcoin","name":"Bitcoin","symbol":"BTC","rank":1,"circulating_supply":19156544,"total_supply":19156550,"max_supply":21000000,"beta_value":0.966273,"first_data_at":"2010-07-17T00:00:00Z","last_updated":"2022-09-21T06:24:51Z","quotes":{"USD":{"price":18971.41529377382,"volume_24h":41913627724.47431,"volume_24h_change_24h":5.5,"market_cap":363426751817,"market_cap_change_24h":-2.8,"percent_change_15m":0.06,"percent_change_30m":-0.35,"percent_change_1h":-0.34,"percent_change_6h":0.29,"percent_change_12h":0.46,"percent_change_24h":-2.81,"percent_change_7d":-6.43,"percent_change_30d":-9.76,"percent_change_1y":-54.86,"ath_price":68692.137036932,"ath_date":"2021-11-10T16:51:15Z","percent_from_price_ath":-72.38}}}]

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
		.then((response) => response.json())
		.then((json) => {
			setCoins(json);
			setLoading(false);
		});
		// setCoins(test_value);
		// setLoading(false);
	}, [])
	return (
		<div>
			<h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select>
					{coins.map((coin) => (
						<option key={coin.id}>
							{coin.name} ({coin.symbol}): {coin.quotes.USD.prices} USD
						</option>)
					)}
				</select>
			)}
		</div>
	);
}

export default App;
