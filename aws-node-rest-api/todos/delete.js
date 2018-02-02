'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

module.exports.delete = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'Delete Success!',
  };
  callback(null, response);
};
