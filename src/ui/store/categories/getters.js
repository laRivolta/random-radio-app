const getCategoryById = state => filterId =>
  state.categories.find(category => category.id === filterId);
const getCategoryBySlug = state => filterSlug =>
  state.categories.find(category => category.slug === filterSlug);
const getAllCategories = state => state.categories;

export default {
  getCategoryById,
  getCategoryBySlug,
  getAllCategories
};
