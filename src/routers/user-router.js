const { userService } = require('../services/index')

async function routes (fastify, options) {
  fastify.get('/user', async (request, reply) => {
    try {
      let response = await userService.find()

      reply.status(200).send(response)
    } catch (err) {
      console.log(err)
      reply.status(400)
    }
  })

  fastify.post('/user', async (request, reply) => {
    try {
      let payload = request.body

      console.log(payload)
      let response = await userService.create(payload)

      reply.status(200).send(response)
    } catch (err) {
      reply.status(400)
    }
  })

  fastify.post('/auth', async (request, reply) => {
    try {
      let payload = request.body

      let isThereUser = await userService.find(payload, '*')
      console.log(isThereUser[0].firstName)
      const token =
        isThereUser.length > 0
          ? fastify.jwt.sign({ id: isThereUser.userId, email: isThereUser.email })
          : undefined

      if (!token) throw Error

      reply.status(200).send({ token: token, name: isThereUser[0].firstName })
    } catch (err) {
      reply.status(401)
      throw err
    }
  })
}

module.exports = routes
