function PriceTag({text, value}) {
  return (
    <>
        <span className='flex flex-row text-sm justify-between'>
            <p className="font-bold">
                {text}
            </p>
            <p className='text-gray'>
                $ {value.toFixed(2)}
            </p>
        </span>
    </>
  )
}

export default PriceTag