import galleryData from "../api/gallerydata.json";
import GalleryNotification from "../components/UI/GalleryNotification";

const Gallery = () => {
  return (
    <>
      <div className="container card-container">
        {galleryData.map((currElem) => {
          const { id, image } = currElem;
          return (
            <div className="cards" key={id}>
              <img src={image} alt="images" loading="lazy" />
            </div>
          );
        })}
      </div>
      <GalleryNotification />
    </>
  );
};
export default Gallery;
