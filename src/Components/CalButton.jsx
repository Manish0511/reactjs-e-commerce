function CalButton({buttonLable, onClickButton}){
    return (
        <div className="col-4">
            <button onClick={onClickButton} data-lable={buttonLable}>{buttonLable}</button>
        </div>
    )
}
export default CalButton