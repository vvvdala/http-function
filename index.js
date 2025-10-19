import express from 'express';
const app = express();

app.use(express.json());

app.all('/httpEntry', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (req.method === 'OPTIONS') return res.status(204).send('');

  const name = req.query.name || (req.body && req.body.name) || 'world';

  res.status(200).json({
    hello: name,
    runtime: 'nodejs',
    region: process.env.GCP_REGION || 'unknown'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
