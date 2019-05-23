const { categoryService } = require('../services/index')

async function routes (fastify, options) {
  fastify.get('/category', async (request, reply) => {
    try {
      let response = await categoryService.find()

      reply.status(200).send(response)
    } catch (err) {
      reply.status(400)
    }
  })
}

module.exports = routes
