// switch/create Posts DB.
db = db.getSiblingDB('posts');
print('********************* We are at the "' + db + '" DB **********************');

load('scripts/createAuthorsCollection.js');