import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
    console.log('in GalleryList')
    return (
        <div>
            {galleryList.map(picture => {
                return <GalleryItem picture={picture} />
            })}
        </div>
    )
}

export default GalleryList;