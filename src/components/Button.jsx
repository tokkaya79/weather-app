import SearchIcon from "@mui/icons-material/Search";

export default function Button({ onClick, type, disabled, icon, children }) {
    return (
        <button
            className="button"
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {icon && <SearchIcon fontSize="large" />}
            {children}
        </button>
    );
}
