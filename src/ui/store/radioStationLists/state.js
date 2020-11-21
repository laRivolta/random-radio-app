import ElectronicaRadioStations from "@/ui/assets/resources/electronica.json";
import HitsRadioStations from "@/ui/assets/resources/hits.json";
import PastDecadesRadioStations from "@/ui/assets/resources/past_decades.json";
import RockAndFriendsRadioStations from "@/ui/assets/resources/rock_and_friends.json";
import RelaxRadioStations from "@/ui/assets/resources/relax.json";

export default () => ({
  radioStationLists: [
    {
      categoryName: "electronica",
      list: ElectronicaRadioStations
    },
    { categoryName: "hits", list: HitsRadioStations },
    { categoryName: "past_decades", list: PastDecadesRadioStations },
    { categoryName: "rock_and_friends", list: RockAndFriendsRadioStations },
    { categoryName: "relax", list: RelaxRadioStations }
  ]
});
