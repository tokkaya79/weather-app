import SearchIcon from '@mui/icons-material/Search';

export default function Button({ handleSearch, city }) {
    return (
        <button
            className="button"
            onClick={handleSearch}
            type="submit"
            disabled={!city}
        >
            <SearchIcon fontSize="large"/>
        </button>
    );
}
