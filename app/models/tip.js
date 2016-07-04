import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  text: attr('string'),
  subcategory: belongsTo('subcategory'),
  category: function() {
    return this.get('subcategory').get('category');
  }.property('subcategory')
});
