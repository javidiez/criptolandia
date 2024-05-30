const fetch = require('node-fetch');

module.exports = async (req, res) => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&precision=2', {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-YUaZs4DtjnyZJsnxdb9jCPmN'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: error.message });
    }
};
