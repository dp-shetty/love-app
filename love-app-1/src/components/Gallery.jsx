export default function Gallery() {
  const photos = [
    "/photos/img1.jpg",
    "/photos/img2.jpg",
    "/photos/img3.jpg",
  ];

  return (
    <div className="gallery">
      {photos.map((img, index) => (
        <img key={index} src={img} alt="" />
      ))}
    </div>
  );
}