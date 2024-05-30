import fetch from 'node-fetch';
import express from 'express';

const app = express();
const port = 3000;

// Permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/bitcoin', async (req, res) => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&precision=2', {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-YUaZs4DtjnyZJsnxdb9jCPmN'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/api/ethereum', async (req, res) => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&precision=2', {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-YUaZs4DtjnyZJsnxdb9jCPmN'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/api/exchanges', async (req, res) => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10', {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-YUaZs4DtjnyZJsnxdb9jCPmN'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});


app.get('/api/trendings', async (req, res) => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending', {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-YUaZs4DtjnyZJsnxdb9jCPmN'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});


app.get('/api/criptolist', async (req, res) => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-YUaZs4DtjnyZJsnxdb9jCPmN'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});


app.get('/api/companies', async (req, res) => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin', {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-YUaZs4DtjnyZJsnxdb9jCPmN'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});


// Agregar más rutas según sea necesario

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
