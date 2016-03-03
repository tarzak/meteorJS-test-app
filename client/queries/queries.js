Template.queries.helpers({
    queries: function () {
        var userId = Meteor.userId()
            ;

        return Queries.find({userId: userId});
    }
})