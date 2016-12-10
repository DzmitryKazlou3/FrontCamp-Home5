// switch/create Posts DB.
db = db.getSiblingDB('posts');
print('********************* We are at the "' + db + '" DB **********************');

load('scripts/createAuthorsCollection.js');
load('scripts/createTagsCollection.js');
load('scripts/createArticlesCollection.js');
load('scripts/createCommentsCollection.js');