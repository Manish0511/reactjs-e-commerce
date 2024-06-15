import React from 'react';
import { Carousel } from 'react-bootstrap';

const ItemImageCarousel = ({item}) => {
    return (
        <Carousel>
            {
            item.images && item.images.map((image, key) =>
                (<Carousel.Item key={key}>
                    <img
                        style={{maxWidth: '100%', maxHeight: '100vh', margin: 'auto'}}
                        className="rounded-4 fit"
                        src={image}
                        alt={`Slide ${key + 1}`}
                    />
                </Carousel.Item>))
            }
        </Carousel>
    )
}
export default ItemImageCarousel