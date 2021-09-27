import request from './request';
const API_KEY = '';

const getDefaultPhotos = async (count) => {
  const result = await request(
    `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&per_page=${count}&pretty=true`,
  );
  const photos = result.data.hits.map((val) => ({
    photoUrl: val.largeImageURL,
    tags: val.tags,
  }));
  return photos;
};

export const searchPhotos = async (searchText, count) => {
  const result = await request(
    `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&per_page=${count}&pretty=true&q=${searchText}`,
  );
  const photos = result.data.hits.map((val) => ({
    photoUrl: val.largeImageURL,
    tags: val.tags,
  }));
  return photos;
};

export default getDefaultPhotos;
