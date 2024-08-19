import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../redux/filtersSlice';
import s from "./SearchBox.module.css";

const SearchBox = () => { 
    const dispatch = useDispatch();
    const searchQuery = useSelector(selectNameFilter);

    const handleSearchChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };
    
    return (
        <div className={s.searchBox}>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
        );
}

export default SearchBox;