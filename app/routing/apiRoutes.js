var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);

        var friendIndex;
        var lowestDifference = 40;

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0
            for (var j = 0; j < 10; j++) {
                var individualDifference = Math.abs(parseInt(newFriend.scores[j]) - friends[i].scores[j]);
                totalDifference += individualDifference;
            }
            if (totalDifference < lowestDifference) {
                lowestDifference = totalDifference;
                friendIndex = i;
            }
        }

        friends.push(newFriend);
        res.json(friends[friendIndex]);

    });
};
