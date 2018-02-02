'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

module.exports.get = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'Get Success!',
  };
  callback(null, response);
};
