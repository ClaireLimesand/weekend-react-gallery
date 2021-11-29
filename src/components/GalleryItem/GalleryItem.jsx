// import useState, axios, and my CSS file
import { useState } from 'react';
import "./GalleryItem.css";
import axios from 'axios';
// takes the picture from GalleryList and the fetchGallery function from App.jsx
function GalleryItem({picture, fetchGallery}) {
    console.log('in GalleryItem');
    const [showPicture, setShowPicture] = useState(true);

    // really struggled with whether to have the PUT route here or in App.jsx. Ultimately this just made 
    // more sense to me but I would be curious to know which way is correct
    // when likeButton is clicked this put route updates the number of likes 
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
    // conditional for how DOM displays number of likes in order to replicate mockup 
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
    // switches showPicture between true and false 
    const changeDisplay = () => {
        setShowPicture(!showPicture)
    }
    // if showPicture is true the picture is displayed. If it is false the description is displayed
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
    // returns the displayPicture function, the likeDisplay function and the likeButton
    return (
        <div  className="sideBySide">
            {displayPicture()}
            {likeDisplay()}
            <button onClick={addLike} className="likeButton">Like it!</button>
        </div>
    )
}

export default GalleryItem;