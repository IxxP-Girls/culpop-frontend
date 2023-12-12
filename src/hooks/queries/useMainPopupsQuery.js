import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchData = async date => {
  const res = await axios.get(`/popup?date=${date}`);
  return res.data;
};

const staleTime = 1000 * 60 * 60;

const useMainPopupsQuery = date => {
  const query = useQuery({
    queryKey: ['@MainPopups', date],
    queryFn: () => fetchData(date),
    staleTime,
  });
  return { ...query, mainPopups: query.data };
};

export default useMainPopupsQuery;
