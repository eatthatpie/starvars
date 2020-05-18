import DetailsPeople from '@/views/DetailsPeople';
import DetailsPlanet from '@/views/DetailsPlanet';
import ListPeople from '@/views/ListPeople'
import ListPlanet from '@/views/ListPlanet'

export default [
  {
    name: 'list-people',
    path: '/',
    component: () => ListPeople
  },
  {
    name: 'list-planet',
    path: '/planet',
    component: () => ListPlanet
  },
  {
    name: 'details-people',
    path: '/people/:id',
    component: () => DetailsPeople
  },
  {
    name: 'details-planet',
    path: '/planet/:id',
    component: () => DetailsPlanet
  }
];
