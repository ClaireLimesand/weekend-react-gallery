import { useState } from 'react';
import "./GalleryItem.css";
import axios from 'axios';

function GalleryItem({picture, fetchGallery}) {
    console.log('in GalleryItem');
    const [showPicture, setShowPicture] = useState(true);

    const addLike = () => { 
        console.log('howdy');
        axios({
            method: 'PUT',
            url: `/gallery/like/${picture.id}`
        }).then((response) => {
            fetchGallery();
        }).catch((error) => {
            console.log('PUT failed', error);
        });
    };

    const likeDisplay = () => {
        if (picture.likes === 0) {
            return (
                <p>Nobody has liked this</p>
            )
        } if (picture.likes === 1) {
            return (
                <p>One person has liked this</p>
            )
        } else {
            return (
                <p>{picture.likes} people like this</p>
            )
        }
    }

    const changeDisplay = () => {
        setShowPicture(!showPicture)
    }

    const displayPicture = () => {
    if (showPicture) {
        return (
            <div>
                <img onClick={changeDisplay} src={picture.path}/>
            </div>
        )
    } else {
        return (
            <div>
                <p onClick={changeDisplay}>{picture.description}</p>
            </div>
        )
    };
    };

    return (
        <div  className="sideBySide">
            {displayPicture()}
            {likeDisplay()}
            <button onClick={addLike} className="likeButton">Like it!</button>
        </div>
    )
}

export default GalleryItem;