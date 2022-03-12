import { NextApiHandler } from "next"

const DefaultRoute: NextApiHandler = (req, res) => {
  res
    .status(200)
    .json({ message: "This API route is working!", host: req.headers.host })
}

export default DefaultRoute
