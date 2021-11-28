import { useState } from 'react';

function GalleryItem({picture}) {
    console.log('in GalleryItem');
    const [showPicture, setShowPicture] = useState(true);
    const [countLikes, setCountLikes] = useState(picture.likes);

    const addLike = () => {
        console.log('howdy');
        setCountLikes(countLikes + 1);
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
                <p>{countLikes} people like this!</p>
            </div>
        )
    } else {
        return (
            // <p onClick={changeDisplay}>description</p>
            <div>
                <p onClick={changeDisplay}>{picture.description}</p>
                <button onClick={addLike}>Like it!</button>
                <p>{countLikes} people like this!</p>
            </div>
        )
    };
    };

    return (
        <div>
            {displayPicture()}
        </div>
    )
}

export default GalleryItem;