import { rest } from 'msw'

import { API_URL } from '../../config'
import { delayedResponse } from '../utils'

export const usersHandlers = [
  rest.get(`${API_URL}/users`, (_req, res, ctx) => {
    return res(
      ctx.json({
        title: 'Lord of the Rings',
        imageUrl: '/book-cover.jpg',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      })
    )
  }),
]