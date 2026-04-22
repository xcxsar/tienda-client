const Button = ({ text, type = "button", disabled, ...rest }) => {
    return (
        <button 
            type={type} // Ensure this is "submit" for the form
            disabled={disabled}
            className="w-full h-12 bg-black text-white text-xs py-2 rounded-md font-medium active:scale-95 transition-transform cursor-pointer"
            {...rest}
        >
            {text}
        </button>
    );
};

export default Button;