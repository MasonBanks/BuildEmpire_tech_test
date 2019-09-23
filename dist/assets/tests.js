'use strict';

define('ember-movie-list/tests/integration/components/add-movie-form/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | add-movie-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "h9+lcMc+",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"add-movie-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.ok(this.element.length);
    });
  });
});
define('ember-movie-list/tests/integration/components/landing-page/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | landing-page', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "TF4RxV3T",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"landing-page\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.ok(this.element.length);
    });
  });
});
define('ember-movie-list/tests/integration/components/movie-list-header-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | movie-list-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jqX+fxpT",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"movie-list-header\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.ok(this.element.length);
    });
  });
});
define('ember-movie-list/tests/integration/components/movie-list-header/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | movie-list-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jqX+fxpT",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"movie-list-header\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.ok(this.element.length);
    });
  });
});
define('ember-movie-list/tests/integration/components/movie-list/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | movie-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "sLQiWw/H",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"movie-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.ok(this.element.length);
    });
  });
});
define('ember-movie-list/tests/integration/components/movie-list/movie-list-item/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | movie-list/movie-list-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "8R/GQ3p5",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"movie-list/movie-list-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.ok(this.element.length);
    });
  });
});
define('ember-movie-list/tests/lint/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('application/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/controller.js should pass ESLint\n\n');
  });

  QUnit.test('application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass ESLint\n\n');
  });

  QUnit.test('components/add-movie-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/add-movie-form/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/landing-page/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/landing-page/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/movie-list-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/movie-list-header/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/movie-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/movie-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/movie-list/movie-list-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/movie-list/movie-list-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/movie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movie.js should pass ESLint\n\n');
  });

  QUnit.test('index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/controller.js should pass ESLint\n\n');
  });

  QUnit.test('index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass ESLint\n\n');
  });

  QUnit.test('models/movie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/movie.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/movie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movie.js should pass ESLint\n\n');
  });
});
define('ember-movie-list/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/add-movie-form/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/add-movie-form/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/landing-page/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/landing-page/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/movie-list-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/movie-list-header-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/movie-list-header/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/movie-list-header/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/movie-list/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/movie-list/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/movie-list/movie-list-item/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/movie-list/movie-list-item/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/application/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/movie-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/movie-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/movie-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/movie-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/movies-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/movies-test.js should pass ESLint\n\n');
  });
});
define('ember-movie-list/tests/test-helper', ['ember-movie-list/app', 'ember-movie-list/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-movie-list/tests/unit/application/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define('ember-movie-list/tests/unit/controllers/movie-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | movie', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:movie');
      assert.ok(controller);
    });
  });
});
define('ember-movie-list/tests/unit/index/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('ember-movie-list/tests/unit/models/movie-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | movie', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('movie', {}));
      assert.ok(model);
    });
  });
});
define('ember-movie-list/tests/unit/routes/movies-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | movies', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:movies');
      assert.ok(route);
    });
  });
});
define('ember-movie-list/config/environment', [], function() {
  var prefix = 'ember-movie-list';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-movie-list/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
