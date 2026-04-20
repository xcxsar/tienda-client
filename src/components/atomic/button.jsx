const Button = ({ text, type = "button", disabled, ...rest }) => {
    return (
        <button 
            type={type} // Ensure this is "submit" for the form
            disabled={disabled}
            className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 disabled:opacity-50"
            {...rest}
        >
            {text}
        </button>
    );
};

export default Button;