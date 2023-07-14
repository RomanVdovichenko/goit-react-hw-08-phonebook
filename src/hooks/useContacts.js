import { useSelector } from 'react-redux';
import {
  selectLoading,
  selectError,
  selectAllContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const allContacts = useSelector(selectAllContacts);

  return {
    isLoading,
    isError,
    allContacts,
  };
};