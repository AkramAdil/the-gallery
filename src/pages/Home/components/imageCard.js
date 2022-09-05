import React from 'react';

const ImageCard = ({item}) => {
    return (
        <div className="img-container">
            <a href={"/"+item.id+"-"+item.title}>
                <div className="basic-artwork-info">
                    <p className="artwork-title">{item.title}</p>
                    <p className="artwork-artist">{item.artist_title}</p>
                </div>
                <img src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                className="gallery__img" alt="خىث"/>
            </a>
        </div> 
    );
};

export default ImageCard;