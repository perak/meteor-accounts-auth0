# perak:accounts-auth0

A login service for Auth0.

## Configuration

As any official Meteor account package, upsert a configuration object:

```js
ServiceConfiguration.configurations.upsert({service: 'auth0'}, {
  $set: {
    domain: '<AUTH0_DOMAIN>',
    clientId: '<CLIENT_ID>',
    secret: '<SECRET>'
  }
});
```
