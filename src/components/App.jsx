import {Component} from "react";
import {ContactForm} from "./contactForm/contactForm";
import {nanoid} from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  createContact = ({name, number}) => {
    this.setState(
      {
        contacts: [...this.state.contacts, {name, number, id: nanoid()}]
      }
    )

    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm createContact={this.createContact}/>
        <h2>Contacts</h2>

      </div>
    )
  }
}
