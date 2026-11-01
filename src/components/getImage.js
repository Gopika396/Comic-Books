const imageFiles = import.meta.glob(
  '../assets/images/*',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

function getImage(fileName) {
  const imagePath = `../assets/images/${fileName}`;

  return imageFiles[imagePath] || '';
}

export default getImage;