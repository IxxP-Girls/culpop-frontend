import axios from 'axios';

const CORS_SERVER_URL = 'https://www.culpop.shop';

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

const listPopups = async (area, startDate, endDate, page) => {
  const res = await axios.get(
    `${CORS_SERVER_URL}/popup/list?area=${area}&startDate=${startDate}&endDate=${endDate}&page=${page}`,
  );
  return res.data;
};

const searchPopups = async (word, page) => {
  const res = await axios.get(`${CORS_SERVER_URL}/popup/search?word=${word}&page=${page}`);
  return res.data;
};

export { fetchMainCarousel, fetchPopups, fetchPopup, listPopups, searchPopups };
