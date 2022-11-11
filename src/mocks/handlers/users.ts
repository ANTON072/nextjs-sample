import { rest } from 'msw'

import { API_URL } from '../../config'
import { delayedResponse } from '../utils'

export const usersHandlers = [
  rest.get(`${API_URL}/users`, (req, res, ctx) => {
    return delayedResponse(
      ctx.status(200),
      ctx.json([{
        id: 1,
        name: 'akira maeda'
      }, {
        id: 2,
        name: 'nobuhiko takada'
      }])
    )
  })
]