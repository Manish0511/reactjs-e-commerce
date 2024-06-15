import { Toast, ToastContainer } from "react-bootstrap";

const ToastCustom = ({showHide, show}) => {
    return (
        <ToastContainer
            className="p-3"
            position="top-end"
            style={{ zIndex: 1 }}
        >
            <Toast bg="primary" onClose={() => showHide(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Alert</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body>Success..! Item added to cart!</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
export default ToastCustom