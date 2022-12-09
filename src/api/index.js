import BASE_URL from './env';

const request = async query => {
  try {
    const data = await fetch(`${BASE_URL}${query}`);

    if (data.ok) {
      return await data.json();
    }

    throw new Error('잘못된 API입니다. 다시 시도해주세요.');
  } catch (error) {
    console.error(error.message);
  }
};

export default request;
