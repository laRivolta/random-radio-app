export default (state, getters, rootState) => ({
  categories: [
    {
      id: 0,
      name: "Electronica",
      slug: "electronica",
      radios: rootState.radioStationLists.electronica
    },
    {
      id: 1,
      name: "Hits",
      slug: "hits",
      radios: rootState.radioStationLists.hits
    },
    {
      id: 2,
      name: "Past decades",
      slug: "past_decades",
      radios: rootState.radioStationLists.past_decades
    },
    {
      id: 3,
      name: "Rock & friends",
      slug: "rock_and_friends",
      radios: rootState.radioStationLists.rock_and_friends
    },
    {
      id: 4,
      name: "Relax",
      slug: "relax",
      radios: rootState.radioStationLists.relax
    }
  ]
});
