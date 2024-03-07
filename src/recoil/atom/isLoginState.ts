import { atom } from 'recoil';

export const isLoginState = atom({
  key: 'isLoginState',
  default: JSON.parse(localStorage.getItem('isLoginState') || 'false'),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet(isLogin => {
        localStorage.setItem('isLoginState', JSON.stringify(isLogin));
      });
    },
  ],
});
