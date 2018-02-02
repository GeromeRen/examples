'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

module.exports.update = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'Update Success!',
  };
  callback(null, response);
};
