import react from "react";

const ContactRow = (props) => {
  return (
    <tr onClick={() => props.selectContact(props.contact.id)}>
      <th>{props.contact.name}</th>
      <th>{props.contact.phone}</th>
      <th>{props.contact.email}</th>
    </tr>
  );
};

export default ContactRow;
