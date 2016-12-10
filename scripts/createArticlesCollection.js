print(' ************** creating Articles colelction ****************');
var authorsCursor = db.authors.find();
while ( authorsCursor.hasNext() ){
   var author = authorsCursor.next();
    db.articles.insert(
        {
            author_id: author._id,
            title: "article title of " + author.name,
            text: "article text of " + author.name,
            creationDate: new Date()
        });
}

db.articles.createIndex({"author_id": 1});
db.articles.createIndex({"creationDate":1});