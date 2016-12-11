
if not exist "%~dp0\db\db1" mkdir "%~dp0\db\db1"
START mongod --replSet "ScoresReplicaSet" --dbpath "%~dp0\db\db1" --port 27100

if not exist "%~dp0\db\db2" mkdir "%~dp0\db\db2"
START mongod --replSet "ScoresReplicaSet" --dbpath "%~dp0\db\db2" --port 27101

if not exist "%~dp0\db\db3" mkdir "%~dp0\db\db3"
START mongod --replSet "ScoresReplicaSet" --dbpath "%~dp0\db\db3" --port 27102