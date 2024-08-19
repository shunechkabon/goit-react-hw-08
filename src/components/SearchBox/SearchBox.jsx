import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors'
    ; import s from "./SearchBox.module.css";

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