import { moduleForModel, test } from 'ember-qunit';

moduleForModel('subcategory', 'Unit | Model | subcategory', {
  // Specify the other units that are required for this test.
  needs: ['model:category', 'model:tip', 'model:question']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
