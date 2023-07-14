import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && <Loader />}</div>
      <Filter/>
      <ContactList />
    </>
  );
}