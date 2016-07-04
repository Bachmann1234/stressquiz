import Ember from "ember";
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('question', 'Unit | Model | question', {
  // Specify the other units that are required for this test.
  needs: ['model:category', 'model:tip', 'model:subcategory']
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

      const question = store.createRecord('question', {
        text: "What is a question?",
        score: 0,
        subcategory: testSubcategory
      });
      testSubcategory.get('questions').pushObject(question);
      assert.equal(question.get('category').get('name'), testCategory.get('name'));
    });
});
