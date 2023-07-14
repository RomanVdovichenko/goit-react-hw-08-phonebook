import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({text}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(text.id));
  
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text.name}</p>
      <p className={css.text}>{text.number}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  text: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  })
}