import axios from 'axios';

const CORS_SERVER_URL = 'https://www.culpop.shop';
const BASE_URL = `${CORS_SERVER_URL}/users`;

const fetchInterests = async sortOption => {
  const res = await axios.get(`${BASE_URL}/profile/popupLike?sort=${sortOption}`, {
    withCredentials: true,
  });
  return res.data;
};

const fetchProfile = async () => {
  const { data } = await axios.get(`${BASE_URL}/profile`, { withCredentials: true });
  return data;
};

const signUp = async data => await axios.post(`${BASE_URL}/signup`, data);

const SignIn = async data => {
  const res = await axios.post(`${BASE_URL}/login`, data);

  console.log(res);
};

export { fetchInterests, fetchProfile, signUp, SignIn };
