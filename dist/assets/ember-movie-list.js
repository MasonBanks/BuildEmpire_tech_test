'use strict';



;define('ember-movie-list/adapters/application', ['exports', 'emberfire/adapters/firestore'], function (exports, _firestore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firestore.default.extend({});
});
;define('ember-movie-list/app', ['exports', 'ember-movie-list/resolver', 'ember-load-initializers', 'ember-movie-list/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('ember-movie-list/application/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
;define('ember-movie-list/application/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel() {
      this.replaceWith('/');
    }
  });
});
;define("ember-movie-list/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BtBrJwp4", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-movie-list/application/template.hbs" } });
});
;define('ember-movie-list/authenticators/firebase', ['exports', 'emberfire/authenticators/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _firebase.default;
    }
  });
});
;define('ember-movie-list/components/add-movie-form/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'form',
    classNames: ['add-movie-form'],

    title: null,
    image: null,
    description: null,

    add: null,

    submit(event) {
      const add = this.get('add');
      event.preventDefault();
      add(this.get('title'), this.get('description'), this.get('image'));
      this.setProperties({ 'title': null, 'image': null, 'description': null });
    }
  });
});
;define("ember-movie-list/components/add-movie-form/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5T9GLuJI", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"input\",null,[[\"value\",\"placeholder\",\"required\",\"class\"],[[22,[\"title\"]],\"Title..\",false,\"form-title\"]]],false],[0,\"\\n\\n\"],[1,[26,\"input\",null,[[\"value\",\"placeholder\",\"required\",\"class\"],[[22,[\"description\"]],\"Description..\",false,\"form-description\"]]],false],[0,\"\\n\\n\"],[1,[26,\"input\",null,[[\"value\",\"placeholder\",\"required\",\"class\"],[[22,[\"image\"]],\"Image url..\",false,\"form-image-url\"]]],false],[0,\"\\n\\n\"],[6,\"button\"],[3,\"action\",[[21,0,[]],\"addMovie\",[22,[\"title\"]],[22,[\"description\"]],[22,[\"image\"]]]],[8],[0,\"Add Movie\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-movie-list/components/add-movie-form/template.hbs" } });
});
;define('ember-movie-list/components/landing-page/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    add: null,

    movies: null

  });
});
;define("ember-movie-list/components/landing-page/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oMRE8cqT", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"movie-list-header\"],false],[0,\"\\n\\n\"],[1,[26,\"movie-list\",null,[[\"movies\"],[[22,[\"movies\"]]]]],false],[0,\"\\n\\n\"],[1,[20,\"add-movie-form\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-movie-list/components/landing-page/template.hbs" } });
});
;define('ember-movie-list/components/movie-list-header/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ['movie-list-header'],

    tagName: 'h1'
  });
});
;define("ember-movie-list/components/movie-list-header/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fmz+UGhP", "block": "{\"symbols\":[],\"statements\":[[0,\"Movies\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-movie-list/components/movie-list-header/template.hbs" } });
});
;define('ember-movie-list/components/movie-list/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'ul',

    classNames: ['movie-list'],

    movies: null
  });
});
;define('ember-movie-list/components/movie-list/movie-list-item/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'li',

    classNames: ['movie-list-item'],

    movie: null
  });
});
;define("ember-movie-list/components/movie-list/movie-list-item/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eJ0smZyV", "block": "{\"symbols\":[],\"statements\":[[6,\"img\"],[11,\"src\",[22,[\"movie\",\"image\"]],null],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"details\"],[8],[0,\"\\n    \"],[6,\"h1\"],[8],[1,[22,[\"movie\",\"heading\"]],false],[9],[0,\"\\n    \"],[6,\"p\"],[8],[1,[22,[\"movie\",\"description\"]],false],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-movie-list/components/movie-list/movie-list-item/template.hbs" } });
});
;define("ember-movie-list/components/movie-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fQdbLJDP", "block": "{\"symbols\":[\"movie\"],\"statements\":[[6,\"ul\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"movies\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"movie-list/movie-list-item\",null,[[\"movie\"],[[21,1,[]]]]],false],[0,\"\\n  \"],[6,\"hr\"],[8],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-movie-list/components/movie-list/template.hbs" } });
});
;define('ember-movie-list/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('ember-movie-list/controllers/movie', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sortAscending: false, // sorts post by timestamp
    actions: {
      publishPost: function () {
        var newMovie = this.store.createRecord('movie', {
          title: this.get('title'),
          body: this.get('description')
        });
        newMovie.save();
      }
    }
  });
});
;define('ember-movie-list/helpers/app-version', ['exports', 'ember-movie-list/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('ember-movie-list/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('ember-movie-list/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define("ember-movie-list/index", [], function () {
  "use strict";
});
;define('ember-movie-list/index/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      addMovie(title, description, image) {
        const newMovie = this.store.createRecord('movie', {
          title,
          description,
          image
        });
        alert(title, description, image);
        newMovie.save();
      }
    }
  });
});
;define('ember-movie-list/index/route', ['exports', 'emberfire/mixins/realtime-route'], function (exports, _realtimeRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_realtimeRoute.default, {
    model() {
      return this.store.findAll('movie');
    }
  });
});
;define("ember-movie-list/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LOT7EY5N", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"landing-page\",null,[[\"add\",\"movies\"],[[26,\"action\",[[21,0,[]],\"addMovie\"],null],[22,[\"model\"]]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-movie-list/index/template.hbs" } });
});
;define('ember-movie-list/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-movie-list/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('ember-movie-list/initializers/component-styles', ['exports', 'ember-component-css/initializers/component-styles', 'ember-movie-list/mixins/style-namespacing-extras'], function (exports, _componentStyles, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _componentStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _componentStyles.initialize;
    }
  });


  // eslint-disable-next-line ember/new-module-imports
  Ember.Component.reopen(_styleNamespacingExtras.default);
});
;define('ember-movie-list/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('ember-movie-list/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('ember-movie-list/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberfire.default;
    }
  });
});
;define('ember-movie-list/initializers/export-application-global', ['exports', 'ember-movie-list/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('ember-movie-list/initializers/route-styles', ['exports', 'ember-component-css/initializers/route-styles'], function (exports, _routeStyles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _routeStyles.initialize;
    }
  });
});
;define('ember-movie-list/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('ember-movie-list/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _styleNamespacingExtras.default;
    }
  });
});
;define('ember-movie-list/models/movie', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { attr, Model } = _emberData.default;

  exports.default = Model.extend({
    title: attr('string'),
    description: attr('string'),
    image: attr('string')
  });
});
;define('ember-movie-list/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('ember-movie-list/router', ['exports', 'ember-movie-list/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('movie');
  });

  exports.default = Router;
});
;define('ember-movie-list/routes/movie', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function () {
      return this.store.findAll('movie');
    }
  });
});
;define('ember-movie-list/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('ember-movie-list/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _firebaseApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _firebaseApp.default;
    }
  });
});
;define('ember-movie-list/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _firebase.default;
    }
  });
});
;define("ember-movie-list/templates/movie", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8vyAROBg", "block": "{\"symbols\":[\"movie\"],\"statements\":[[6,\"h2\"],[8],[0,\"Movies seen so far:\"],[9],[0,\"\\n\\n\"],[6,\"ul\"],[8],[0,\"\\n\"],[4,\"each\",[[21,0,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[6,\"li\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-movie-list/templates/movie.hbs" } });
});
;

;define('ember-movie-list/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("ember-movie-list/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"ember-movie-list","version":"0.0.0+d2075da8"});
          }
        
//# sourceMappingURL=ember-movie-list.map
