<template>
  <v-col :cols="12">
    <div id="audio" class="player-wrapper">
      <div class="player">
        <div class="player-controls">
          <div class="player-button-wrapper">
            <a v-on:click.prevent="stop" title="Stop" href="#">
              <svg
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z"
                />
              </svg>
            </a>
          </div>
          <div class="player-button-wrapper">
            <a
              v-on:click.prevent="playing = !playing"
              title="Play/Pause"
              href="#"
            >
              <svg
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  v-if="!playing"
                  fill="currentColor"
                  d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
                />
                <path
                  v-else
                  fill="currentColor"
                  d="M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"
                />
              </svg>
            </a>
          </div>
          <div class="player-button-wrapper">
            <a v-on:click.prevent="mute" title="Mute" href="#">
              <svg
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  v-if="!muted"
                  fill="currentColor"
                  d="M5.312,4.566C4.19,5.685-0.715,12.681,3.523,16.918c4.236,4.238,11.23-0.668,12.354-1.789c1.121-1.119-0.335-4.395-3.252-7.312C9.706,4.898,6.434,3.441,5.312,4.566z M14.576,14.156c-0.332,0.328-2.895-0.457-5.364-2.928C6.745,8.759,5.956,6.195,6.288,5.865c0.328-0.332,2.894,0.457,5.36,2.926C14.119,11.258,14.906,13.824,14.576,14.156zM15.434,5.982l1.904-1.906c0.391-0.391,0.391-1.023,0-1.414c-0.39-0.391-1.023-0.391-1.414,0L14.02,4.568c-0.391,0.391-0.391,1.024,0,1.414C14.41,6.372,15.043,6.372,15.434,5.982z M11.124,3.8c0.483,0.268,1.091,0.095,1.36-0.388l1.087-1.926c0.268-0.483,0.095-1.091-0.388-1.36c-0.482-0.269-1.091-0.095-1.36,0.388L10.736,2.44C10.468,2.924,10.642,3.533,11.124,3.8z M19.872,6.816c-0.267-0.483-0.877-0.657-1.36-0.388l-1.94,1.061c-0.483,0.268-0.657,0.878-0.388,1.36c0.268,0.483,0.877,0.657,1.36,0.388l1.94-1.061C19.967,7.907,20.141,7.299,19.872,6.816z"
                />
                <path
                  v-else
                  fill="currentColor"
                  d="M14.201,9.194c1.389,1.883,1.818,3.517,1.559,3.777c-0.26,0.258-1.893-0.17-3.778-1.559l-5.526,5.527c4.186,1.838,9.627-2.018,10.605-2.996c0.925-0.922,0.097-3.309-1.856-5.754L14.201,9.194z M8.667,7.941c-1.099-1.658-1.431-3.023-1.194-3.26c0.233-0.234,1.6,0.096,3.257,1.197l1.023-1.025C9.489,3.179,7.358,2.519,6.496,3.384C5.568,4.31,2.048,9.261,3.265,13.341L8.667,7.941z M18.521,1.478c-0.39-0.391-1.023-0.391-1.414,0L1.478,17.108c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.023,0.391,1.414,0l15.629-15.63C18.912,2.501,18.912,1.868,18.521,1.478z"
                />
              </svg>
            </a>
          </div>
          <div class="player-button-wrapper">
            <a
              v-on:click.prevent=""
              v-on:mouseenter="showVolume = true"
              title="Volume"
              href="#"
            >
              <svg
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M19,13.805C19,14.462,18.462,15,17.805,15H1.533c-0.88,0-0.982-0.371-0.229-0.822l16.323-9.055C18.382,4.67,19,5.019,19,5.9V13.805z"
                />
              </svg>
              <input
                v-model.lazy.number="volume"
                v-show="showVolume"
                type="range"
                min="0"
                max="100"
              />
            </a>
          </div>
          <next-radio
            :categorySlug="categorySlug"
            :radioIdInCategory="radioIdInCategory"
          ></next-radio>
        </div>
        <audio
          id="audiofile"
          ref="audiofile"
          :src="radioLink"
          preload="auto"
          style="display: none;"
        ></audio>
      </div>
    </div>
  </v-col>
</template>

<script>
import NextRadio from "@/ui/components/RadioStation/NextRadio.vue";

export default {
  name: "Player",
  components: {
    NextRadio
  },
  props: {
    link1: String,
    link2: String,
    autoplay: {
      type: Boolean,
      default: true
    },
    categorySlug: String,
    radioIdInCategory: Number
  },
  data: () => ({
    audio: undefined,
    loaded: false,
    playing: false,
    previousVolume: 35,
    showVolume: false,
    volume: 100
  }),
  mounted() {
    this.audio = this.$el.querySelectorAll("audio")[0];
    this.audio.addEventListener("loadeddata", this.load);
    this.audio.addEventListener("pause", () => {
      this.playing = false;
    });
    this.audio.addEventListener("play", () => {
      this.playing = true;
    });
    this.audio.addEventListener("stop", () => {
      this.playing = false;
      this.audio.currentTime = 0;
    });
  },
  computed: {
    radioLink: {
      get() {
        return this.link1 || this.link2;
      }
    },
    muted() {
      return this.volume / 100 === 0;
    }
  },
  watch: {
    playing(value) {
      if (value) {
        return this.audio.play();
      }
      this.audio.pause();
    },
    volume() {
      this.showVolume = false;
      this.audio.volume = this.volume / 100;
    }
  },
  methods: {
    load() {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        return (this.playing = this.autoplay);
      }

      throw new Error("Failed to load sound file.");
    },
    stop() {
      this.playing = false;
    },
    mute() {
      if (this.muted) {
        return (this.volume = this.previousVolume);
      }

      this.previousVolume = this.volume;
      this.volume = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700");

body {
  font-family: "Nunito", sans-serif;
}

$player-bg: #fff;
$player-border-color: darken($player-bg, 12%);
$player-link-color: darken($player-bg, 75%);
$player-progress-color: $player-border-color;
$player-text-color: $player-link-color;

.player-wrapper {
  align-items: center;
  background-color: $player-bg;
  display: flex;
  justify-content: center;
}

.player {
  background-color: $player-bg;
  border: 1px solid $player-border-color;
  border-radius: 5px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  color: $player-text-color;
  display: inline-block;
  line-height: 1.5625;
}

.player-controls {
  display: flex;

  > div {
    border-right: 1px solid $player-border-color;

    &:last-child {
      border-right: none;
    }

    a {
      color: $player-link-color;
      display: block;
      line-height: 0;
      padding: 1em;
      text-decoration: none;
    }
  }
}

.player-button-wrapper {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
