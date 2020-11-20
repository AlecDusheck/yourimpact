// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // This is NOT secret. The maps API key needs to be exposed publicly anyways and is 1) restricted to the JS Maps API and
  // 2) only works on *.simplyalec.com/* domains
  mapsApiKey: 'AIzaSyCR-zOfXNfwo_ifWnW6V4of456QelO9Qv8'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
