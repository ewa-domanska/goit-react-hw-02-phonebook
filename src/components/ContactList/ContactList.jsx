import {ListItem} from "../listItem/ListItem";

export const ContactList = ({contacts}) => {
  return (
    <div>
      {
        contacts.length > 0 ?
          (
            <ul>
              {
                contacts.map(contact => (
                  <ListItem key={contact.id} contact={contact}/>
                ))
              }
            </ul>
          )
          :
          ('')
      }
    </div>
  );
};
