const MerchantService = require('./merchantService');

const merchantService = new MerchantService();

module.exports.getByAccountId = async (event) => {
    try {
        const results = await merchantService.getByAccountId(event.pathParameters.id, event.headers['Accept-Language']);
        return { statusCode: 200, body: JSON.stringify(results)}
    }
    catch(error) {
        console.log(`Errors: ${JSON.stringify(error)}`);
        if (error.statusCode !== null && error.statusCode !== undefined) {
            return { statuscode: error.statusCode, body: error.message };
        }

        return { statusCode: 500, body: error.message }
    }
}