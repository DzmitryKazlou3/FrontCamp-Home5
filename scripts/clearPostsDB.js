db = db.getSiblingDB('posts');

db.authors.drop();
db.articles.drop();
db.tags.drop();

print('********************** collections dropped ***********************');