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

interface Post {
  postId: number;
  cateName: string;
  title: string;
  createdAt: string;
  viewCount: number;
}

interface PostType {
  data: Post[];
  total: number;
}

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

export type { authData, CustomBtnProps, CardProps, CommentProps, ModalProps, PostType, Popup };
