export default function greet(req, res) {
  const sample = [
    { id: '💩', type: 'hello' },
    { id: '🚽', type: 'hi' },
  ];

  return res.status(200).json(sample);
}
