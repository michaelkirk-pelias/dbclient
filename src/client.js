const elasticsearch = require('@elastic/elasticsearch');
const settings = require('pelias-config').generate();

module.exports = function(){
  return new elasticsearch.Client( settings.esclient || {} );
};
