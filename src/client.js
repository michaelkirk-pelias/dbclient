const buildClient = require('pelias-elasticsearch');
const settings = require('pelias-config').generate();

// REVIEW: Do we even need this module? Can we instead transition callers to pelias-elasticsearch?
module.exports = function(){
  return buildClient(settings.esclient || {} );
};
