import React, { memo } from "react";
import { ClientListStyled } from "./ClientListStyled";

const ClientList = ({ clients, deleteClient }) => {
  return (
    <ClientListStyled>
      {clients?.map((client) => (
        <li key={client.id}>
          <p>
            {client.name}:{client.number}
          </p>
          <button type="button" onClick={deleteClient} id={client.id}>
            Delete
          </button>
        </li>
      ))}
    </ClientListStyled>
  );
};

export default memo(ClientList);
