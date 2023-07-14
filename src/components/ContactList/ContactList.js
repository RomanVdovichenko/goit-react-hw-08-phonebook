import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { useContacts } from 'hooks';
import { selectFilter } from 'redux/filter/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const { allContacts, isError } = useContacts();
  const filterContact = useSelector(selectFilter)
  
    const getVisibleContact = () => {
    const normalizedContact = filterContact.toLowerCase();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContact)
    );
  };

  const visibleContact = getVisibleContact();

  return (
  <>
    {visibleContact?.length === 0 && !isError && <p><b>No contacts</b></p>}
    {isError ? <p>Sorry, there was an error.</p> :
      <ul className={css.list}>
      {visibleContact?.map((item) => (
        <li key={item.id}>
          <Contact text={item} />
        </li>
      ))}
      </ul>}
    </>
  );
};