// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://localhost:4000'
  // apiUrl: 'http://localhost:8010/api'
  apiUrl:'http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api'
};
