import ICategory from '@/interfaces/ICategory';
import ILocalStorageData from '@/interfaces/ILocalStorageData';

export const defaultCategories: Array<ICategory> = [
  {
    slug: 'characters',
    name: 'Characters',
    imageUrl: '/assets/group.svg',
    linkUrl: '/'
  },
  {
    slug: 'planets',
    name: 'Planets',
    imageUrl: '/assets/globe.svg',
    linkUrl: '/planet'
  },
  {
    slug: 'vehicles',
    name: 'Vehicles',
    imageUrl: '/assets/rocket.svg',
    linkUrl: '/vehicle'
  }
]

export const localStorageData = (w: Window): ILocalStorageData => ({
  theme(): string|null {
    return w.localStorage.getItem('theme');
  }
});
