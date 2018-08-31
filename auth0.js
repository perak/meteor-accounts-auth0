Accounts.oauth.registerService('auth0');

if (Meteor.isClient) {
  const loginWithAuth0 = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Auth0.requestCredential(options, credentialRequestCompleteCallback);
  };
  Accounts.registerClientLoginFunction('auth0', loginWithAuth0);
  Meteor.loginWithAuth0 = function () {
    return Accounts.applyLoginFunction('auth0', arguments);
  };
} else {
  Accounts.addAutopublishFields({
    // publish all fields including access token, which can legitimately
    // be used from the client (if transmitted over ssl or on
    // localhost).
    forLoggedInUser: ['services.auth0'],
    forOtherUsers: [
      'services.auth0.name', 'services.auth0.given_name',
      'services.auth0.family_name', 'services.auth0.preferred_username',
      'services.auth0.picture'
    ]
  });
}
