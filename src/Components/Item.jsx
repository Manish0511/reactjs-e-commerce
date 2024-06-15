import { Link } from "react-router-dom";
import Price from "./Price";

const Item = ({item}) => {
    return (
        <>
            <div className="col">
                <div className="card radius-15">
                    <div className="card-body text-center">
                        <div className="p-4 border radius-15">
                            <img src={item.thumbnail} width="110" height="110" className="rounded-circle shadow" alt="" />
                            <h5 className="mb-0 mt-5">{item.title}</h5>
                            <p className="mb-3">{item.brand}</p>
                            <div className="mb-3"><Price item={item}></Price></div>
                            <div className="list-inline contacts-social mt-3 mb-3"> <a href="" className="list-inline-item bg-facebook text-white border-0"><i className="bx bxl-facebook"></i></a>
                                <a href="" className="list-inline-item bg-twitter text-white border-0"><i className="bx bxl-twitter"></i></a>
                                <a href="" className="list-inline-item bg-linkedin text-white border-0"><i className="bx bxl-linkedin"></i></a>
                            </div>
                            <div className="d-grid"> <Link to={`/item/${item.id}`} className="btn btn-outline-primary radius-15">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;