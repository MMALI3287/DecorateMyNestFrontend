const api = new ApiCalls();

useEffect(() => {
  api.getMaterialTransactions().then((data) => {
    console.log(data);
  });
});

const newClientData = {
  ClientId: 29,
  AuthId: 69,
};

useEffect(() => {
  api
    .createClient(newClientData)
    .then((createdClient) => {
      console.log("Created client:", createdClient);
    })
    .catch((error) => {
      console.error("Error creating client:", error.message);
    });
}, []);
useEffect(() => {
  api
    .getClientById(29)
    .then((createdClient) => {
      console.log("Created client:", createdClient);
    })
    .catch((error) => {
      console.error("Error creating client:", error.message);
    });
}, []);
