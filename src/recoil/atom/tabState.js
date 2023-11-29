import { atom } from 'recoil';

const tabState = atom({
  key: 'tabState',
  default: 'info',
});

export default tabState;
