import { proxy } from 'valtio';
const state = proxy({
  intro: true,
  color: '#EFBD48',
});

export default state;
