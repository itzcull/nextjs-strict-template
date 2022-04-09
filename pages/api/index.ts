import { NextApiHandler } from 'next'
import { HttpMethods } from 'types/api'

export const handler: NextApiHandler = (req, res) => {
  const { method } = req

  switch (method as typeof HttpMethods[number]) {
    case 'GET':
      res.status(200).json({})
      break
    case 'POST':
      res.status(200).json({})
      break
    case 'PUT':
      res.status(200).json({})
      break
    case 'DELETE':
      res.status(200).json({})
      break
    case 'PATCH':
      res.status(200).json({})
      break
    case 'OPTIONS':
      res.status(200).json({})
      break
    default:
      res.setHeader('Allow', HttpMethods)
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
