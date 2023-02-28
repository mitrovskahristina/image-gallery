import React, { useState } from "react";
import PropTypes from "prop-types";
import './gallery.css'

const Gallery = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <div className="gallery-container">
            <div className="thumbnail-container">
                {items.map((item, index) => (
                    <div
                        className={`thumbnail ${selectedItem === index ? "active" : ""}`}
                        key={index}
                        onClick={() => handleItemClick(index)}
                    >
                        {item.thumbnail}
                    </div>
                ))}
            </div>
            <div className="selected-item-container">{items[selectedItem].content}</div>
        </div>
    );
};

Gallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            thumbnail: PropTypes.element.isRequired,
            content: PropTypes.element.isRequired,
        })
    ).isRequired,
};

export default Gallery;