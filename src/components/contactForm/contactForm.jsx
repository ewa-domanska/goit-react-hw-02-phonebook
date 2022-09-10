import style from './contactForm.module.css'
import {Component, createContext} from "react";
import PropTypes from "prop-types";

export class ContactForm extends Component {

  state = {name: '', number: ''}

  updateState = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value});
  }

  submitContact = (e) => {
    e.preventDefault();
    this.props.createContact(this.state)
    this.setState({name: ''})
  }

  render() {
    const {name, number} = this.state;
    return (
      <div className={style.form}>
        <form onSubmit={this.submitContact}>
          <div className={style.inputWrapper}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.updateState}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>

          <div className={style.inputWrapper}>
            <label>Number</label>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.updateState}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>

          <button type="submit">Add Contact</button>
        </form>
      </div>
    )
  }
}

ContactForm.propTypes={
  createContact: PropTypes.func.isRequired
}
