import axios from 'axios';

const { CORS_SERVER_URL = '' } = import.meta.env;

const fetchInterests = async sortOption => {
  const res = await axios.get(`${CORS_SERVER_URL}/users/profile/popupLike?sort=${sortOption}`, {
    withCredentials: true,
  });
  return res.data;
};

const fetchProfile = async () => {
  const { data } = await axios.get(`/users/profile`, { withCredentials: true });
  return data;
};

export { fetchInterests, fetchProfile };
