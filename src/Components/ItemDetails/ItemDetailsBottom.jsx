import ItemDescription from "./ItemDescription";
import RelatedItems from "./RelatedItems";

function ItemDetailsBottom() {
    return (
        <section className="bg-light border-top py-4">
            <div className="container">
                <div className="row gx-4">
                    <ItemDescription></ItemDescription>
                    <RelatedItems></RelatedItems>
                </div>
            </div>
        </section>
    );
}

export default ItemDetailsBottom;
