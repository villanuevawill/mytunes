// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td>' + '<td><%= title %></td>'),

  events: {
    'click td': function() {
      this.model.dequeue();
    }
    //need to add click listener to "add to queue" element
    //tells model that we need to fire enqueue function
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
