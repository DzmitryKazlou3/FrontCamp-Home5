db = db.getSiblingDB('posts');

db.authors.drop();
db.articles.drop();
db.tags.drop();
db.comments.drop();

print('********************** collections dropped ***********************');