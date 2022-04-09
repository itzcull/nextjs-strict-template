import { Index } from 'controllers'
import { NextApiHandler } from 'next'
import { AllHttpMethods, ALLOWED_METHODS } from 'types/api'

export const handler: NextApiHandler = (req, res) => {
  const { method, body, query } = req
  let result

  switch (method as AllHttpMethods) {
    case 'GET':
      result = Index.get(query, {}, body)
      res.status(200).json(result)
      break
    default:
      res.setHeader('Allow', ALLOWED_METHODS.join(', '))
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
