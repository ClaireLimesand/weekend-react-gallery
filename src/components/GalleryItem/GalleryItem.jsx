import { useState } from 'react';
import "./GalleryItem.css";
import axios from 'axios';

function GalleryItem({picture}) {
    console.log('in GalleryItem');
    const [showPicture, setShowPicture] = useState(true);
    const [countLikes, setCountLikes] = useState(picture.likes);

    const addLike = () => { 
        console.log('howdy');
        axios({
            method: 'PUT',
            url: `/gallery/like/${picture.id}`
        }).then((response) => {
            setCountLikes(countLikes + 1);
        }).catch((error) => {
            console.log('PUT failed', error);
        });
    };

    const likeDisplay = () => {
        if (countLikes === 0) {
            return (
                <p>Nobody has liked this</p>
            )
        } if (countLikes === 1) {
            return (
                <p>One person has liked this</p>
            )
        } else {
            return (
                <p>{countLikes} people like this</p>
            )
        }
    }

    const changeDisplay = () => {
        setShowPicture(!showPicture)
    }

    const displayPicture = () => {
    if (showPicture) {
        return (
            // <p onClick={changeDisplay}>picture!</p>
            <div>
                <img onClick={changeDisplay} src={picture.path}/>
                <button onClick={addLike}>Like it!</button>
                {/* {likeDisplay()} */}
            </div>
        )
    } else {
        return (
            // <p onClick={changeDisplay}>description</p>
            <div>
                <p onClick={changeDisplay}>{picture.description}</p>
                <button onClick={addLike}>Like it!</button>
                {/* {likeDisplay()} */}
            </div>
        )
    };
    };

    return (
        <div  className="sideBySide">
            {displayPicture()}
            {likeDisplay()}
        </div>
    )
}

export default GalleryItem;