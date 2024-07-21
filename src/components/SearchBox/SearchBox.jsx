import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        value={selectNameFilter}
        onChange={handleChange}
      ></input>
    </div>
  );
}
