import axios from 'axios';

const { CORS_SERVER_URL = '' } = import.meta.env;

const fetchPost = async (id: number) => {
  const res = await axios.get(`${CORS_SERVER_URL}/posts/${id}`);
  return res.data;
};

export { fetchPost };
