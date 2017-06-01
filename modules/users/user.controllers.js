export default function greet(req, res) {
  const sample = [
    { type: 'Hello', username: 'wonmin' },
    { type: 'Hi', username: 'jeon' },
  ];

  return res.status(200).json(sample);
}
