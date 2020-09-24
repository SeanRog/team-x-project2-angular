// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // TODO: insert correct User API url, aka Service Layer
  USER_API_URL: '',
  OPEN_WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5/weather?',
  OPEN_WEATHER_API_KEY: '37be25ea7137d9eef8dfdbf6d70e1b23'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
