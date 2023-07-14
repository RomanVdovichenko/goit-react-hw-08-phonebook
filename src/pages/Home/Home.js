import { Helmet } from "react-helmet-async";
import css from './Home.module.css';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>React-hw-08-phonebook</title>
      </Helmet>
      <div className={css.container} >
        <h1 className={css.title} >Your phone book.</h1>
      </div>  
    </>  
  );
}