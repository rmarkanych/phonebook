import { useDispatch, useSelector } from 'react-redux';
import { deleteNewContact } from 'redux/operations';
import Title from 'components/Title/Title';
import s from '../ContactList/ContactList.module.css';

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
    <div className={s.wrapper}>
      {filteredArray.length < 1 ? (
        <Title title="Add new contact to your list ⬆" />
      ) : (
        <ul className={s.list}>
          {filteredArray.map(({ id, name, number }) => {
            return (
              <li className={s.item} key={id}>
                <p>
                  {name}: {number}
                </p>
                <button
                  className={s.btn}
                  onClick={() => dispatch(deleteNewContact(id))}
                >
                  Delete 🗑
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
