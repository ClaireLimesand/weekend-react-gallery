import { useState } from 'react';

function GalleryItem({picture}) {
    console.log('in GalleryItem');
    const [showPicture, setShowPicture] = useState(true);

    const changeDisplay = () => {
        setShowPicture(!showPicture)
    }

    const displayPicture = () => {
    if (showPicture) {
        return (
            // <p onClick={changeDisplay}>picture!</p>
            <div>
                <img onClick={changeDisplay} src={picture.path}/>
                <button>Like it!</button>
            </div>
        )
    } else {
        return (
            // <p onClick={changeDisplay}>description</p>
            <div>
                <p onClick={changeDisplay}>{picture.description}</p>
                <button>Like it!</button>
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