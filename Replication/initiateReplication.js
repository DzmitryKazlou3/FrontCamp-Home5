rs.initiate();
rs.add(hostname() + ":27101");
rs.addArb(hostname() + ":27102");

var replConfig = rs.conf();
replConfig.members[0].priority = 2;
rs.reconfig(replConfig, {force: true});
printjson(rs.conf());
printjson(rs.status());
print("*********** replica set is configured **************");