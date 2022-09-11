export const ListItem = ({contact}) => {
  return (
    <li>
      {contact.name}: {contact.number}
    </li>
  );
};
