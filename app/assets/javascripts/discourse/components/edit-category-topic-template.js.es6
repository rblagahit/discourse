import { buildCategoryPanel } from 'discourse/components/edit-category-panel';

export default buildCategoryPanel('topic-template', {
  _activeTabChanged: function() {
    if (this.get('activeTab')) {
      const self = this;
      Ember.run.schedule('afterRender', function() {
        self.$('.d-editor-input').focus();
      });
    }
  }.observes('activeTab')
});
