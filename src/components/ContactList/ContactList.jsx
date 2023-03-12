import { useDispatch, useSelector } from 'react-redux';
import { deleteNewContact } from 'redux/mockapiOperations';
import Title from 'components/Title/Title';
import { FaTrashAlt } from 'react-icons/fa';
import { ListOfContact, ItemOfContact, RemoveBtn, ContactData } from './ContactList.styled';

const ContactList = () => {

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredArray = contacts.filter(
    el =>
      el.name.toLowerCase().includes(filter.toLowerCase()) ||
      el.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredArray.length < 1 ? (
        <Title title="Add new contact to your list ⬆" />
      ) : (
        <ListOfContact>
          {filteredArray.map(({ id, name, number }) => {
            return (
              <ItemOfContact key={id}>
                <ContactData>
                  {name[0].toUpperCase() + name.slice(1)}: {number}
                </ContactData>
                <RemoveBtn onClick={() => dispatch(deleteNewContact(id))}>
                  Delete{' '}
                  <FaTrashAlt
                    style={{
                      marginLeft: '5px'
                    }}
                  />
                </RemoveBtn>
              </ItemOfContact>
            );
          })}
        </ListOfContact>
      )}
    </div>
  );
};

export default ContactList;
