export const environment = {
  production: true,
  apiUrl: '/api',

  tokenWhitelistedDomains: [ new RegExp('api') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
