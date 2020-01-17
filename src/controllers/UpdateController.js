const Dev = require('../models/Dev')

module.exports = {
    async update(request, response) {
        const { user, Name, techs } = request.body;

        let dev = await Dev.updateOne(
            { github_username: user },
            {
                $set: {
                    name: Name,
                    techs: [techs] 
                }
            }
        )

        return response.json(dev)
    }
}