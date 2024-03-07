import { Dispatch, SetStateAction } from 'react';

interface authData {
  email: string;
  pwd: string;
}

interface CustomBtnProps {
  data: string;
  clicked?: string;
  setClicked?: Dispatch<SetStateAction<any>>;
}

interface CardProps {
  popupId: number;
  title: string;
  address: string;
  startDate: string;
  endDate: string;
  image: string;
  likeCheck: boolean;
}

interface CommentProps {
  commentId: number;
  username: string;
  content: string;
  createdAt: number;
  likeCount: number;
  likeCheck: number;
  parentId?: number;
  children?: number;
}

interface ModalProps {
  opened: boolean;
  close: () => void;
}

export type { authData, CustomBtnProps, CardProps, CommentProps, ModalProps };
