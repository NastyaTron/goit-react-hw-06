import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.item}>
      <div>
        <p className={css.text}>
          <IoMdContact className={css.icon} size="24px" />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} size="20px" />
          {number}
        </p>
      </div>
      <button onClick={handleContact} className={css.button}>
        Delete
      </button>
    </div>
  );
}
