var mongoose = require('mongoose');
var roles = mongoose.model("roles", { "roles": [{ "roleName": { "type": "String" }, "description": { "type": "String" } }], "instanceId": { "type": "String" } });
module.exports = { roles }