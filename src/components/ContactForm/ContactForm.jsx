import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import { FaPencilAlt } from 'react-icons/fa';
import Title from 'components/Title/Title';

import {
  ContactOfForm,
  AddContactBtn,
  ContactOfLabel,
  ContactOfInput,
} from './ContactForm.styled';
const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputNumberChange = e => {
    setNumber(e.target.value);
  };

  const inputNameChange = e => {
    setName(e.target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const dataContacts = {
      id: nanoid(),
      name,
      number,
    };

    const isInContacts = contacts.some(
      el =>
        el.name.toLowerCase() ===
        e.currentTarget.elements.name.value.toLowerCase()
    );

    if (isInContacts) {
      alert(`${e.currentTarget.elements.name.value} is already in contacts`);
      e.currentTarget.elements.name.value = '';
      e.currentTarget.elements.number.value = '';
      return;
    }

    dispatch(addNewContact(dataContacts));

    e.currentTarget.elements.name.value = '';
    e.currentTarget.elements.number.value = '';
  };

  return (
    <ContactOfForm
      onSubmit={e => {
        handlerSubmit(e);
      }}
    >
      <Title title="Name" />
      <ContactOfLabel>
        <ContactOfInput
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => {
            inputNameChange(e);
          }}
        />
      </ContactOfLabel>
      <Title title="Number" />
      <ContactOfLabel>
        <ContactOfInput
          autoComplete="off"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => {
            inputNumberChange(e);
          }}
        />
      </ContactOfLabel>
      <AddContactBtn type="submit">
        Add contact{' '}
        <FaPencilAlt
          style={{
            marginLeft: '5px',
            color: 'black',
          }}
        />
      </AddContactBtn>
    </ContactOfForm>
  );
};

export default ContactForm;
