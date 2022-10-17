import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
const Phonebook = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div style={{ paddingTop: '30px' }}>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default Phonebook;
