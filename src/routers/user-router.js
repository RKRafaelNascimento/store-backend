const { userService } = require('../services/index')

async function routes (fastify, options) {
  fastify.get('/user', async (request, reply) => {
    try {
      let response = await userService.find()

      reply.status(200).send(response)
    } catch (err) {
      reply.status(400)
    }
  })

  fastify.post('/user', async (request, reply) => {
    try {
      let payload = request.body

      let response = await userService.create(payload)

      reply.status(200).send(response)
    } catch (err) {
      reply.status(400)
    }
  })
}

module.exports = routes
