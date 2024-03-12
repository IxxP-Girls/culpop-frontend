import useGenericMutation from './useGenericMutation';
import { likePopup } from '../../api/popup';
import { userState } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';
import { Popup } from '../../types/types';

const useAddLikePopupMutation = (id: number) => {
  const email = useRecoilValue(userState);

  return useGenericMutation({
    queryKey: ['@Popup', id + '', email],
    mutationFn: () => likePopup(id),
    onMutate() {
      return (popupInfo: Popup) => ({ ...popupInfo, likeCheck: true });
    },
  });
};

export default useAddLikePopupMutation;
