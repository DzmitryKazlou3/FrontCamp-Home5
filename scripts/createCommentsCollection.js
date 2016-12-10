print(' ************** creating Comments colelction ****************');
var authors = db.authors.find().toArray();
var someTag = db.tags.findOne();
var articlesCursor = db.articles.find();
var currentAuthorindex = 0;

while ( articlesCursor.hasNext() ){
    var article = articlesCursor.next();

    db.comments.insert(
        {
            article_id: article._id,
            author_id: authors[currentAuthorindex]._id,
            creationDate: new Date(),
            text: "comment text",
            tag_ids : [someTag._id]

        });
        
    if(currentAuthorindex < authors.lenght){
        currentAuthorindex++;
    }
}