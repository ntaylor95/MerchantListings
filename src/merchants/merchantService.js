const joi = require("joi");

const MerchantService = function constructor() {
    return this;
};

const schema = joi.object({
    id: joi.number().required(),
    name: joi.string().required(),
    description: joi.string().allow('',null)
});

MerchantService.prototype.getByAccountId = async (id) => {
    const response = [];
    response.push({
        id: 1,
        name: "Merchant 1",
        description: "My Target"
    });

    response.push({
        id: 2,
        name: "Merchant 2",
        description: "My HEB"
    });

    response.push({
        id: 3,
        name: "Merchant 3",
        description: "Amazon"
    });

    return response;
};

module.exports = MerchantService;
