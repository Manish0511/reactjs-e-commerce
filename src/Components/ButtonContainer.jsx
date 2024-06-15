import CalButton from "./CalButton";

function ButtonContainer({onClickButton}) {
    const arrButton = [1,2,3,4,5,6,7,8,9,0,'c','+','-','='];
    return (
        <>
            {arrButton.map((v) => <CalButton key={v} buttonLable={v} onClickButton={onClickButton}></CalButton>)}
        </>
    )
}
export default ButtonContainer