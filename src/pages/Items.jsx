import { useEffect, useState, Suspense, lazy, memo } from "react";
import Loading from '../Components/Loading';
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/items";

const Item = lazy(() => delayForDemo(import('../Components/Item.jsx')));
function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    }).then(() => promise);
  }
  
const Items = memo(() => {
    var isApiCalling = false;
    const dispatch = useDispatch()
    const items = useSelector(store => store.items);
    console.log(items)
    
    const fetchItems = () => {
        if(isApiCalling) return false;
        isApiCalling = true
        fetch(`https://dummyjson.com/products?limit=10&skip=${Math.random()*100}`)
        .then(res => res.json())
        .then(json => {
            dispatch((itemsActions.items(json.products)))
            isApiCalling = false
        })
    }

    useEffect(() => {
        fetchItems();
    }, [])

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css" />
            <div className="container">
                <button onClick={fetchItems}>Next Page</button>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                    <Suspense fallback={<Loading />}>
                        { items.map((item) =>  <Item key={item.id} item={item} />) }
                    </Suspense>
                </div>
            </div>
        </>
    )
})
export default Items