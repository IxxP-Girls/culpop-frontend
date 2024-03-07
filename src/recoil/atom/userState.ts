import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: JSON.parse(localStorage.getItem('userState') || '{}'),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet(newUser => {
        localStorage.setItem('userState', JSON.stringify(newUser));
      });
    },
  ],
});
