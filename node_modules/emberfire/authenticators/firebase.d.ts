import RSVP from 'rsvp';
import Ember from 'ember';
import FirebaseAppService from '../services/firebase-app';
import EmberObject from '@ember/object';
import Evented from '@ember/object/evented';
declare const FirebaseAuthenticator_base: Readonly<typeof EmberObject> & (new (properties?: object | undefined) => Evented & {
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
} & EmberObject) & (new (...args: any[]) => Evented & {
    firebaseApp: import("@ember/object/computed").default<FirebaseAppService, FirebaseAppService>;
} & EmberObject);
export default class FirebaseAuthenticator extends FirebaseAuthenticator_base {
    firebaseApp: Ember.ComputedProperty<FirebaseAppService, FirebaseAppService>;
    restore(data: any): RSVP.Promise<any>;
    authenticate(): RSVP.Promise<never>;
    invalidate(): RSVP.Promise<void>;
}
export {};
