import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPopup } from '../../api/popup';
import { userState } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';

const staleTime = 1000;

const usePopupQuery = (id: number) => {
  const email = useRecoilValue(userState);

  const query = useSuspenseQuery({
    queryKey: ['@Popup', id + '', email],
    queryFn: () => fetchPopup(id),
    staleTime,
  });
  return { popupInfo: query.data };
};

export default usePopupQuery;
