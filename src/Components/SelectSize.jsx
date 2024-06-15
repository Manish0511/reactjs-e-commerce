const SelectSize = ({size, displayCurrentValue}) => {
    return (
        <>
            <label className="mb-2">Size</label>
            <select ref={size}
                className="form-select border border-secondary"
                style={{ height: "35px" }}
            >
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
            </select>
        </>
    )
}

export default SelectSize;