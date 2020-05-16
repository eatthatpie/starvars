import DetailsPeople from './views/DetailsPeople';
import ListPeople from '@/views/ListPeople'

export default [
  {
    name: 'list-people',
    path: '/',
    component: () => ListPeople
  },
  {
    name: 'details-people',
    path: '/people/:id',
    component: () => DetailsPeople
  }
];
