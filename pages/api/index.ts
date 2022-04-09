import { Index } from 'api'
import { NextApiHandler } from 'next'
import { HttpMethods, METHODS } from 'types/api'

export const handler: NextApiHandler = (req, res) => {
  const { method } = req
  let result

  switch (method as HttpMethods) {
    case 'GET':
      result = Index.get(req, res)
      res.status(200).json(result)
      break
    case 'POST':
      result = Index.post(req, res)
      res.status(200).json(result)
      break
    case 'PUT':
      result = Index.post(req, res)
      res.status(200).json(result)
      break
    case 'DELETE':
      result = Index.post(req, res)
      res.status(200).json(result)
      break
    case 'PATCH':
      result = Index.post(req, res)
      res.status(200).json(result)
      break
    case 'OPTIONS':
      result = Index.post(req, res)
      res.status(200).json(result)
      break
    default:
      res.setHeader('Allow', METHODS.join(', '))
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
