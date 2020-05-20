export const selectCategories = () => state => state.categories;
export const selectCategoryBySlug = (slug: string) => state =>
  state.categories.find(c => c.slug === slug);
export const selectCurrentTheme = () => state => state.settings.theme;
