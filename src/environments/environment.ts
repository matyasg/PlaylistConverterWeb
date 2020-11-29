// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseURL: 'http://smartus.namizulevi.hu:8090',
  // baseURL: 'http://0.0.0.0:8090',
  production: false,
  client_id : '0483ed85e3a644eca64f5a1f08f847ce',
  client_secret : 'c69f6da6498f4f00bf51aca5413e6478',
  redirect_uri : 'http://localhost:4200',
  privateKey : '-----BEGIN PRIVATE KEY-----\n' +
    'MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgb6+PxyBZwUeUU2mb\n' +
    'GUePOpWqhfp5z8/0KsVErndeH9GgCgYIKoZIzj0DAQehRANCAARExiHydRcUTV5A\n' +
    'JBbXZa7EUsTFQAFn4dAGhiOmRQj2riLudSuvc0igtUiF1HWZb37hFSJHE6tdTAoK\n' +
    '04Ejw65e\n' +
    '-----END PRIVATE KEY-----',
  teamId : 'ZK3CF46MH4',
  keyId : '7792FD34HP',
  stateKey : 'spotify_auth_state',
  scope : 'playlist-modify-public playlist-modify-private user-read-private',
  dev_token: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijc3OTJGRDM0SFAifQ.eyJpYXQiOjE2MDU5MTQ4MTYsImV4cCI6MTYyMTQ2NjgxNiwiaXNzIjoiWkszQ0Y0Nk1INCJ9.wEOwbhX7M73T0V4STAvl3HiZBz5BwdLD49C1OAlD7FK-5Y6FEWhJFQwU1ZxrHy8deiMpN5GRwENQbQgaD-dSzA',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
