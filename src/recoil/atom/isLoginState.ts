import { atom } from 'recoil';

const isLoginState = atom({
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

export default isLoginState;
