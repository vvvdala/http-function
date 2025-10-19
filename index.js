exports.httpEntry = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (req.method === 'OPTIONS') return res.status(204).send('');

  const name = req.query.name || (req.body && req.body.name) || 'world';

  let message = `Hello, ${name}!`;
  if (name.toLowerCase() === 'veronika') {
    message = 'Привіт, Вероніка!';
  }

  res.status(200).json({
    message,
    time: new Date().toISOString(),
    runtime: 'nodejs',
    region: process.env.GCP_REGION || 'unknown'
  });
};
