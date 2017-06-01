export default function greet(req, res) {
  const sample = [
    { id: '💩', type: 'wonmin' },
    { id: '🚽', type: 'jeon' },
  ];

  return res.status(200).json(sample);
}
