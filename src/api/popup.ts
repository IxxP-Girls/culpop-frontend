import axios from 'axios';

const CORS_SERVER_URL = 'https://www.culpop.shop';

const fetchMainCarousel = async () => {
  const res = await axios.get(`${CORS_SERVER_URL}/popup/carousel`);
  return res.data;
};

const fetchPopups = async (date: string) => {
  const res = await axios.get(`${CORS_SERVER_URL}/popup?date=${date}`, { withCredentials: true });
  return res.data;
};

const fetchPopup = async (id: number) => {
  const res = await axios.get(`${CORS_SERVER_URL}/popup/${id}`, { withCredentials: true });
  return res.data;
};

const listPopups = async (area: string, startDate: string, endDate: string, pageParam: number) => {
  const res = await axios.get(
    `${CORS_SERVER_URL}/popup/list?area=${area}&startDate=${startDate}&endDate=${endDate}&page=${pageParam}`,
    {
      withCredentials: true,
    },
  );
  return res.data;
};

const searchPopups = async (word: string, pageParam: number) => {
  const res = await axios.get(`${CORS_SERVER_URL}/popup/search?word=${word}&page=${pageParam}`, {
    withCredentials: true,
  });
  return res.data;
};

const likePopup = async (popupId: number) =>
  await axios.post(
    `${CORS_SERVER_URL}/popup/${popupId}/like`,
    {},
    {
      withCredentials: true,
    },
  );

const deletePopup = async (popupId: number) =>
  await axios.delete(`${CORS_SERVER_URL}/popup/${popupId}/like`, {
    withCredentials: true,
  });

export { fetchMainCarousel, fetchPopups, fetchPopup, listPopups, searchPopups, likePopup, deletePopup };
