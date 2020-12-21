const joi = require('joi');

module.exports = {
  post: {
    payload: {
      firstName: joi.string().required(true),
    },
  },
};
