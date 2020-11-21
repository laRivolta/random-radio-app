const getAllCategories = state => state.categories;
const getCategoryById = state => filterId =>
  state.categories.find(category => category.id === filterId);
const getCategoryBySlug = state => filterSlug =>
  state.categories.find(category => category.slug === filterSlug);
const getCategoryRadioListBySlug = state => filterSlug =>
  state.categories.find(category => category.slug === filterSlug).radios;
const getCategoryRadioListById = state => filterId =>
  state.categories.find(category => category.id === filterId).radios;
const getRadioByCategorySlugAndRadioId = state => (
  filterCategorySlug,
  filterRadioId
) =>
  state.categories.find(category => category.slug === filterCategorySlug)
    .radios[filterRadioId];

export default {
  getAllCategories,
  getCategoryById,
  getCategoryBySlug,
  getCategoryRadioListBySlug,
  getCategoryRadioListById,
  getRadioByCategorySlugAndRadioId
};
