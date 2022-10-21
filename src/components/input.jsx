const Input = ({ value, onChange }) => {
    return (
        <div>
            <input
                onChange={onChange}
                value={value}>
            </input>
        </div>
    )

}

export default Input