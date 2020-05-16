import ICategory from '@/interfaces/ICategory';

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
