import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
    console.log('in GalleryList')
    return (
        <div>
            {galleryList.map(picture => {
                return <GalleryItem key={picture.id} />
            })}
        </div>
    )
}

export default GalleryList;