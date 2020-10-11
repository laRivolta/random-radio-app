export class RadioStationsLocal {
  static loadRadioStations() {
    return JSON.parse(this.$store.state.radioStationsData || "[]");
  }
}
