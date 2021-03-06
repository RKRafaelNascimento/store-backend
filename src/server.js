const fastify = require('fastify')({ logger: true })
const routes = require('../src/routers/index')

fastify.register(require('fastify-cors'))

fastify.register(require('fastify-jwt'), {
  secret: 'QX2PXgnE9jhhc6GtGhzjuuznHt67L9DL'
})

fastify.decorate('authenticate', async function (request, reply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.send(err)
  }
})

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/swagger',
  swagger: {
    info: {
      title: 'Store',
      version: '0.1.0'
    },
    host: 'localhost:8081',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{ name: 'Store-Api', description: 'Store-Api documentation.' }]
  }
})

for (const i in routes) {
  fastify.register(routes[i])
}

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')

    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
