print("************* calc start ************");

db = db.getSiblingDB('grades');

var best_class = db.grades.aggregate(
    [
        {
            $project: {
                class_id: "$class_id",
                scores: {
                    $filter: {
                        input: "$scores",
                        as: "scoreItem",
                        cond: {
                            $ne: ["$$scoreItem.type", "quiz"]
                        }
                    }
                }
            }
        }
        ,{
            "$unwind": "$scores"
        }
        ,{
            $group: {
                _id: "$class_id",
                avg_scores: { $avg: "$scores.score" }
            }
        }
        ,{
            $sort : { avg_scores : -1 }
        }
        ,{
            $limit: 1
        }
    ]
).next();

printjson(best_class);