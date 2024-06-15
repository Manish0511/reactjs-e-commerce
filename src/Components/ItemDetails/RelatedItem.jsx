import { Link } from "react-router-dom";
import Price from "../Price";
import ItemImageCarousel from "../ItemImageCarousel";

function RelatedItem ({item}) {
    return (
        <div className="d-flex mb-3">
            <div className="me-3">
                <ItemImageCarousel item={item} />
            </div>
            <Link to={`/item/${item.id}`} className="info nav-link">
                <div className="mb-1">
                    {item.title}
                </div>
                <strong className="text-dark"> <Price item={item}></Price> </strong>
            </Link>
        </div>
    )
}
export default RelatedItem;