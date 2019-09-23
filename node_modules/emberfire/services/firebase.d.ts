import Service from '@ember/service';
export default class FirebaseService extends Service {
    app: (name?: string | undefined) => import("firebase").app.App;
    apps: import("firebase").app.App[];
    initializeApp: (options: Object, nameOrConfig?: string | Object | undefined) => import("firebase").app.App;
}
declare module '@ember/service' {
    interface Registry {
        firebase: FirebaseService;
    }
}
