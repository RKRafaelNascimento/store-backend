const { productService } = require('../services/index')

async function routes (fastify, options) {
  fastify.get('/product', async (request, reply) => {
    try {
      let response = await productService.find()

      reply.status(200).send(response)
    } catch (err) {
      reply.status(400)
    }
  })
}

module.exports = routes
