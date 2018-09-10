'use strict';

const app = require('./server');
const User = app.models.User;
const Role = app.models.Role;
const RoleMapping = app.models.RoleMapping;
User.create({email: 'jos@go.jos', password: 'josgojos'}, function(err, userInstance) { // eslint-disable-line
  if (err) return err;

  Role.create({
    name: 'admin',
  }, function(err, role) {
    if (err) return err;

    role.principals.create({
      principalType: RoleMapping.USER,
      principalId: userInstance.id,
    }, function(err, principal) {
      if (err) return err;
      console.log(`User ${userInstance.id} is set as admin. ${JSON.stringify(principal)}`);  // eslint-disable-line
    });
  });
});
