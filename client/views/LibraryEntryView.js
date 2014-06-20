// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    this.model.on('change:count',function(){
      this.render();
    },this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td>' + '<td><%= title %></td>'  + '<td><%= count %></td>'),

  events: {
    'click td': function() {
      this.model.enqueue();
    }
    //need to add click listener to "add to queue" element
    //tells model that we need to fire enqueue function
  },

  render: function(){
    console.log(this.model.attributes);
    return this.$el.html(this.template(this.model.attributes));
  }

});
