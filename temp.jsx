import React, { useEffect } from "react";
import ApiCalls from "./src/apis/ApiCalls";

const temp = () => {
  const api = new ApiCalls();

  useEffect(() => {
    api.getTokens(localStorage.getItem("token")).then((data) => {
      console.log(data);
    });
  });

  // const newClientData = {
  //   ClientId: 29,
  //   AuthId: 69,
  // };

  // useEffect(() => {
  //   api
  //     .createClient(newClientData)
  //     .then((createdClient) => {
  //       console.log("Created client:", createdClient);
  //     })
  //     .catch((error) => {
  //       console.error("Error creating client:", error.message);
  //     });
  // }, []);
  // useEffect(() => {
  //   api
  //     .getClientById(29)
  //     .then((createdClient) => {
  //       console.log("Created client:", createdClient);
  //     })
  //     .catch((error) => {
  //       console.error("Error creating client:", error.message);
  //     });
  // }, []);
  return (
    <>
      <div>
        <h1>Testing</h1>
      </div>
    </>
  );
};

export default temp;
