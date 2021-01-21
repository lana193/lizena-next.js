// export default (req, res) => {
//   res.status(200).json({ object: req.query.id, name: req.query.name })
// }

export default function handler(req, res) {
  const {
    query: { object_id },
  } = req

  res.end(`Object: ${object_id}`)
}