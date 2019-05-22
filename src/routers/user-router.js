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
}

module.exports = routes
