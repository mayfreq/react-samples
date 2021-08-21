const request = async (url) => {
  const result = {
    data: '',
    statusCode: '200',
  };
  const response = await fetch(url);
  if (response.ok) result.data = await response.json();
  else result.statusCode = response.status;
  return result;
};

export default request;