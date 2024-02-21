import { useQuery } from '@tanstack/react-query';
import { fetchPopup } from '../../api/popup';

const staleTime = 1000 * 3;

const usePopupQuery = id => {
  const query = useQuery({
    queryKey: ['@Popup', id],
    queryFn: () => fetchPopup(id),
    staleTime,
  });
  return { ...query, popupInfo: query.data };
};

export default usePopupQuery;
