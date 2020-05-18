import ICategory from '@/interfaces/ICategory';
import ILocalStorageData from '@/interfaces/ILocalStorageData';

export const defaultCategories: Array<ICategory> = [
  {
    name: 'Characters',
    imageUrl: '/assets/group.svg',
    linkUrl: '/'
  },
  {
    name: 'Planets',
    imageUrl: '/assets/globe.svg',
    linkUrl: '/planet'
  },
  {
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
