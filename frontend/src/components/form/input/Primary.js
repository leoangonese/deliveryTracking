const PrimaryInput = ({ name, id, value, onChange, placeholder, label, error }) => {
    return (
        <div className="flex flex-col w-full text-start">
            <label for={id} className="text-white font-light pr-2 pb-2 text-lg">
                {label}
            </label>
            <input type='text'
                className={`border-2 rounded-md w-full py-2 pl-2 text-black ${error ? ' border-red-600' : 'border-gray-200'}`}
                name={name} id={id} value={value} onChange={onChange} placeholder={placeholder} />
        </div>

    )
}
export default PrimaryInput