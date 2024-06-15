import { useEffect, useState } from "react";
import RelatedItem from "./RelatedItem";

function RelatedItems() {
    const [relatedItems, setRelatedItems] = useState([]);
    const fetchItems = () => {
        fetch(`https://dummyjson.com/products?limit=4&skip=${Math.random()*100}`)
            .then((res) => res.json())
            .then((json) => {
                setRelatedItems(json.products);
            });
    }
    useEffect(() => {
        fetchItems();
    },[])
    return (
        <div className="col-lg-4">
            <div className="px-0 border rounded-2 shadow-0">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Similar items</h5>
                        { relatedItems.map((item, key) => <RelatedItem key={key} item={item} />) }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RelatedItems;