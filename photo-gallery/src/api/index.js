import request from './request';

const getDefaultPhoto = async () => {
  const API_KEY="API";
  
  const result = await request(
    `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&per_page=10&pretty=true`
  );
  const photos = result.data.hits.map((val) =>  (
    {
      photoUrl: val.largeImageURL,
      tags: val.tags
    }
  ));
  return photos;
};

export default getDefaultPhoto;
