import css from "./App.module.css";
import ContactsForm from "../ContactsForm/ContactsForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
