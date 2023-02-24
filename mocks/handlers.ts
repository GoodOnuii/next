import { graphql } from 'msw'

export const handlers = [
  graphql.query('hello', (req, res, ctx) => {
    const { hello } = req.variables.input

    localStorage.setItem('hello', hello)

    return res(
      ctx.data({
        hello: {
          hello: 'Test',
        },
      })
    )
  }),
]
