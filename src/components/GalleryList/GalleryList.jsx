import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, fetchGallery}) {
    console.log('in GalleryList')
    return (
        <div>
            {galleryList.map(picture => {
                return <GalleryItem picture={picture} fetchGallery={fetchGallery} key={picture.id}/>
            })}
        </div>
    )
};

export default GalleryList;