import useGenericMutation from './useGenericMutation';
import { deletePopup } from '../../api/popup';
import { userState } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';
import { Popup } from '../../types/types';

const useDeleteLikePopupMutation = (id: number) => {
  const email = useRecoilValue(userState);

  return useGenericMutation({
    queryKey: ['@Popup', id + '', email],
    mutationFn: () => deletePopup(id),
    onMutate() {
      return (popupInfo: Popup) => ({ ...popupInfo, likeCheck: false });
    },
  });
};

export default useDeleteLikePopupMutation;
