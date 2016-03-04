ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
        $set: {
            clientId: Meteor.settings.googleAuth.clientId,
            loginStyle: "popup",
            secret: Meteor.settings.googleAuth.secret
        }
    }
);