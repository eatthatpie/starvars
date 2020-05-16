import ICategory from '@/interfaces/ICategory';
import ILocalStorageData from '@/interfaces/ILocalStorageData';

export const defaultCategories: Array<ICategory> = [
  {
    name: 'Characters',
    imageUrl: '/assets/group.svg',
    linkUrl: '/characters'
  },
  {
    name: 'Planets',
    imageUrl: '/assets/globe.svg',
    linkUrl: '/planets'
  },
  {
    name: 'Vehicles',
    imageUrl: '/assets/rocket.svg',
    linkUrl: '/vehicles'
  }
]

export const localStorageData = (w: Window): ILocalStorageData => ({
  theme(): string|null {
    return w.localStorage.getItem('theme');
  }
});
