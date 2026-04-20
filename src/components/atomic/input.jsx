function Input({ type, placeholder }) {
  return (
    <input type={type} placeholder={placeholder} className='p-2 m-2 bg-transparent border-2 border-white rounded-md focus:outline-none focus:border-green-300' />
  )
}

export default Input