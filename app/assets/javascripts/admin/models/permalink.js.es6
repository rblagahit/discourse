const Permalink = Discourse.Model.extend({
  save: function() {
    return Discourse.ajax("/admin/permalinks.json", {
      type: 'POST',
      data: {url: this.get('url'), permalink_type: this.get('permalink_type'), permalink_type_value: this.get('permalink_type_value')}
    });
  },

  destroy: function() {
    return Discourse.ajax("/admin/permalinks/" + this.get('id') + ".json", {type: 'DELETE'});
  }
});

Permalink.reopenClass({
  findAll: function(filter) {
    return Discourse.ajax("/admin/permalinks.json", { data: { filter: filter } }).then(function(permalinks) {
      return permalinks.map(p => Discourse.Permalink.create(p));
    });
  }
});

export default Permalink;
