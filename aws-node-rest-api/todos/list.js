'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

module.exports.list = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'List Success!',
  };
  callback(null, response);
};
