const fetch = require('node-fetch');

module.exports = async (req, res) => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&precision=2', {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-YUaZs4DtjnyZJsnxdb9jCPmN'
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
