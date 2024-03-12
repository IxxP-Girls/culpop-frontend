import axios from 'axios';

const CORS_SERVER_URL = 'https://www.culpop.shop';

interface editProps {
  title: string;
  content: string;
  cateName: string;
}

const fetchPost = async (id: number) => {
  const res = await axios.get(`${CORS_SERVER_URL}/posts/${id}`, { withCredentials: true });
  return res.data;
};

const editPost = async (id: number, data: editProps) =>
  await axios.patch(`${CORS_SERVER_URL}/posts/${id}`, data, { withCredentials: true });

export { fetchPost, editPost };
