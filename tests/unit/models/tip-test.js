import { moduleForModel, test } from 'ember-qunit';
import Ember from "ember";

moduleForModel('tip', 'Unit | Model | tip', {
  // Specify the other units that are required for this test.
  needs: ['model:category', 'model:question', 'model:subcategory']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});


test('can retrieve category', function(assert) {
  const store = this.store();
  Ember.run(function() {
    const testCategory = store.createRecord('category', {
      name: 'test',
      description: 'bla',
      subcategories: []
    });
    const testSubcategory = store.createRecord('subcategory', {
      name: 'subTest',
      category: testCategory,
      tips: [],
      questions: []
    });
    testCategory.get('subcategories').pushObject(testSubcategory);

    const tip = store.createRecord('tip', {
      text: "testing is important",
      subcategory: testSubcategory
    });
    testSubcategory.get('tips').pushObject(tip);
    assert.equal(tip.get('category').get('name'), testCategory.get('name'));
  });
});
