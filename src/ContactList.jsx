import React from "react";
import ContactRow from "./ContactRow";

const ContactList = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {props.contacts.map((contact) => {
          return <ContactRow contact={contact} key={contact.id} />;
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
