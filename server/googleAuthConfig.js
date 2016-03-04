ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
        $set: {
            clientId: "Client_ID",
            loginStyle: "popup",
            secret: "Secret"
        }
    }
);