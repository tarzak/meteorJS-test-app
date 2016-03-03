Template.queryRow.helpers({
    date: function () {
        console.log(this);
        return this.date.toLocaleString();
    }
})