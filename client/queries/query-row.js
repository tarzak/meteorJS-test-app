Template.queryRow.helpers({
    date: function () {
        return this.date.toLocaleString();
    }
});

Template.queryRow.events({
    "click tr .glyphicon-trash": function (e, t) {
        var queryId = this._id
            ;

        e.stopPropagation();

        Meteor.call('removeQuery', queryId);
    },
    "click tr": function (e, t) {

    }
})