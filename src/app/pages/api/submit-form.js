export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://formsubmit.co/ajax/contato@copinskifilms.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(req.body)
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (_error) {
      res.status(500).json({ error: 'Error submitting form' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}