'use strict';

const server = require('../server');
const ds = server.dataSources.ds;
const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'BlogPost']; // eslint-disable-line
ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name); // eslint-disable-line
});
