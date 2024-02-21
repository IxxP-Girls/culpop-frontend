import axios from 'axios';

const { CORS_SERVER_URL = '' } = import.meta.env;

const fetchMainCarousel = async () => {
  const res = await axios.get(`${CORS_SERVER_URL}/popup/carousel`);
  return res.data;
};

const fetchPopups = async date => {
  const res = await axios.get(`${CORS_SERVER_URL}/popup?date=${date}`);
  return res.data;
};

const fetchPopup = async id => {
  const res = await axios.get(`${CORS_SERVER_URL}/popup/${id}`);
  return res.data;
};

const searchPopups = async (area, startDate, endDate) => {
  const res = await axios.get(
    `$${CORS_SERVER_URL}/popup/popups?area=${area}&startDate=${startDate}&endDate=${endDate}`,
  );
  return res.data;
};

export { fetchMainCarousel, fetchPopups, fetchPopup, searchPopups };
