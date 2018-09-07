'use strict';

const server = require('./server');
const ds = server.dataSources.postgresDs;
const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'BlogPost']; // eslint-disable-line
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name); // eslint-disable-line
  ds.disconnect();
});
