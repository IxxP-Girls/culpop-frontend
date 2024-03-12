import axios from 'axios';

const CORS_SERVER_URL = 'https://www.culpop.shop';
const BASE_URL = `${CORS_SERVER_URL}/users`;

interface authData {
  email: string;
  pwd: string;
}

const fetchInterests = async (sortOption: string) => {
  const res = await axios.get(`${BASE_URL}/profile/popupLike?sort=${sortOption}`, {
    withCredentials: true,
  });
  return res.data;
};

const fetchProfile = async (page: number) => {
  const res = await axios.get(`${BASE_URL}/profile?page=${page}`, { withCredentials: true });
  return res.data;
};

const signUp = async (data: authData) => await axios.post(`${BASE_URL}/signup`, data);

const SignIn = async (data: authData) => await axios.post(`${BASE_URL}/login`, data, { withCredentials: true });

const checkVerify = async () => {
  const res = await axios.get(`${BASE_URL}/verify`, { withCredentials: true });

  return res.data;
};

export { fetchInterests, fetchProfile, signUp, SignIn, checkVerify };
