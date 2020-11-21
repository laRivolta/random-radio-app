import ElectronicaRadioStations from "@/ui/assets/resources/electronica.json";
import HitsRadioStations from "@/ui/assets/resources/hits.json";
import PastDecadesRadioStations from "@/ui/assets/resources/past_decades.json";
import RockAndFriendsRadioStations from "@/ui/assets/resources/rock_and_friends.json";
import RelaxRadioStations from "@/ui/assets/resources/relax.json";

export default (/*state, getters, rootState, rootGetters*/) => ({
  categories: [
    {
      id: 0,
      name: "Electronica",
      slug: "electronica",
      radios: ElectronicaRadioStations
    },
    {
      id: 1,
      name: "Hits",
      slug: "hits",
      radios: HitsRadioStations
    },
    {
      id: 2,
      name: "Past decades",
      slug: "past_decades",
      radios: PastDecadesRadioStations
    },
    {
      id: 3,
      name: "Rock & friends",
      slug: "rock_and_friends",
      radios: RockAndFriendsRadioStations
    },
    {
      id: 4,
      name: "Relax",
      slug: "relax",
      radios: RelaxRadioStations
    }
  ]
});
