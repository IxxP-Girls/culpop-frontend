import useGenericMutation from './useGenericMutation';
import { userState } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';
import { likePopup } from '../../api/popup';

interface Popup {
  popupId: number;
  store: string;
  imageList: string[];
  title: string;
  content: string;
  time: object[];
  address: string;
  startDate: string;
  endDate: string;
  latitude: string;
  longitude: string;
  notice: string;
  storeUrl: string;
  snsUrl: string;
  parking: boolean;
  fee: boolean;
  noKids: boolean;
  pet: boolean;
  wifi: boolean;
  likeCount: number;
  viewCount: number;
  likeCheck: boolean;
  tagList: string[];
}

const useAddLikePopupMutation = (id: number) => {
  const userId = useRecoilValue(userState) || '';

  return useGenericMutation({
    queryKey: ['@Popup', id, userId],
    mutationFn: () => likePopup(id),
    onMutate() {
      return (popupInfo: Popup) => [{ ...popupInfo, likeCheck: !popupInfo.likeCheck }][0];
    },
  });
};

export default useAddLikePopupMutation;
