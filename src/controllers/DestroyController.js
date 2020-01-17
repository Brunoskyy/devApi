const Dev = require('../models/Dev')

module.exports = {
    async destroy(request, response) {
        let username = request.params.dev

        await Dev.findOneAndRemove({ github_username: username })

        return response.json(username)
    }
}