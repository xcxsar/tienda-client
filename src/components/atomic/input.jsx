const Input = ({ name, type, placeholder, ...rest }) => {
    return (
        <input 
            name={name}
            type={type} 
            placeholder={placeholder}
            className="border p-2 rounded bg-transparent text-white" 
            {...rest}
        />
    );
};

export default Input;