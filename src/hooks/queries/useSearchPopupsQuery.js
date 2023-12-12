import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchData = async (area, startDate, endDate) => {
  const res = await axios.get(`/popup/popups?area=${area}&startDate=${startDate}&endDate=${endDate}`);

  return res.data;
};

const staleTime = 1000 * 3;

const useSearchPopupsQuery = (area, startDate, endDate) => {
  const query = useQuery({
    queryKey: ['@SearchPopups', area, startDate, endDate],
    queryFn: () => fetchData(area, startDate, endDate),
    staleTime,
  });

  return { ...query, searchPopups: query.data };
};

export default useSearchPopupsQuery;
