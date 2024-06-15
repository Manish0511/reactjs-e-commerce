const QuantitySelect = ({quantityRef, increaseQuantity, decreaseQuantity}) => {
    return (
        <>
            <label className="mb-2 d-block">Quantity</label>
            <div
                className="input-group mb-3"
                style={{ width: "170px" }}
            >
                <button onClick={increaseQuantity}
                    className="btn btn-white border border-secondary px-3"
                    type="button"
                    id="button-addon1"
                    data-mdb-ripple-color="dark"
                >
                    <i className="bi bi-plus"></i>
                </button>
                <input
                    readOnly
                    ref={quantityRef}
                    type="text"
                    className="form-control text-center border border-secondary"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                />
                <button onClick={decreaseQuantity}
                    className="btn btn-white border border-secondary px-3"
                    type="button"
                    id="button-addon2"
                    data-mdb-ripple-color="dark"
                >
                    <i className="bi bi-dash"></i>
                </button>
            </div>
        </>
    )
}
export default QuantitySelect