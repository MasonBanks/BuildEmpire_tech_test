module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-movie-list',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: "AIzaSyDzqORQintOdfJ0qAdOnVoRUIeVmpIYRek",
      authDomain: "buildempire-tech-test.firebaseapp.com",
      databaseURL: "https://buildempire-tech-test.firebaseio.com",
      projectId: "buildempire-tech-test",
      storageBucket: "buildempire-tech-test.appspot.com",
      messagingSenderId: "536123205960",
      appId: "1:536123205960:web:bbad0814ad57d0d963eb7d"
    },

  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    // ENV.APP = true;
  }

  return ENV;
};
