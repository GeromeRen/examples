'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

module.exports.create = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'Create Success!',
  };
  callback(null, response);
};
