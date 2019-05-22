async function routes (fastify, options) {
  fastify.get('/user', async (request, reply) => {
    try {
      reply.status(200).send('hello world')
    } catch (err) {
      reply.status(400)
    }
  })
}

module.exports = routes
