Package.describe({
  name: "perak:accounts-auth0",
  summary: "Login service for Auth0 accounts",
  version: "1.0.0",
  git: "https://github.com/perak/meteor-accounts-auth0.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('perak:auth0-oauth@1.0.0');
  api.imply('perak:auth0-oauth');

  api.addFiles("auth0.js");
});
