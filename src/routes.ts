import DetailsPeople from '@/views/DetailsPeople';
import DetailsPlanet from '@/views/DetailsPlanet';
import DetailsVehicle from '@/views/DetailsVehicle';
import ListPeople from '@/views/ListPeople'
import ListPlanet from '@/views/ListPlanet'
import ListVehicle from '@/views/ListVehicle'

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
    name: 'list-vehicle',
    path: '/vehicle',
    component: () => ListVehicle
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
  },
  {
    name: 'details-vehicle',
    path: '/vehicle/:id',
    component: () => DetailsVehicle
  }
];
