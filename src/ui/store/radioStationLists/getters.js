const getRadioStationListByCategoryName = state => categoryName =>
  state.radioStationLists.find(
    radioStation => radioStation.categoryName === categoryName
  );

export default {
  getRadioStationListByCategoryName
};
