import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';
import css from './AddContact.module.css';
import { Helmet } from 'react-helmet-async';

export default function AddContact () {
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const {isLoading, isError, allContacts } = useContacts();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setUserName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    if (allContacts.some(({ name }) => name === userName)) {
      toast.warn(`${userName} is already contacts`, { theme: 'colored' });
      return;
    }
    dispatch(addContact({ name: userName, number }));
    if (isError === null && !isLoading) {
      toast.info('Contact added.', { theme: 'colored' });
    }
    if (isError !== null) {
      toast.error('Sorry, an error has occurred.', { theme: 'colored' });
      return;
    }
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Add contact</title>
      </Helmet>
      <form className={css.formContact} onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            className={css.text} 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoFocus
            autoComplete="off"
            onChange={handleChange}
            value={userName}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            className={css.text}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
            onChange={handleChange}
            value={number}    
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};