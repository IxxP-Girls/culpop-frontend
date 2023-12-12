import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async id => {
  const res = await axios.get(`/popup/${id}`);
  return res.data;
};

const staleTime = 1000 * 3;

const usePopupQuery = id => {
  const query = useQuery({
    queryKey: ['@Popup', id],
    queryFn: () => fetchData(id),
    staleTime,
  });
  return { ...query, popupInfo: query.data };
};

export default usePopupQuery;
