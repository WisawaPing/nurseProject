<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12" class="text-center">
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <span style="font-size: 24px; color: black"
              >วัยใส ปลอดภัย <br />
              จากความรุนแรงทางเพศ</span
            >
          </v-col>
          <v-col cols="12" md="12" sm="12">
            <img
              :src="itemChoice[indexItem].src"
              height="400"
              class="responsive-image"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 0">
              <source :src="audioFile[0].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 1">
              <source :src="audioFile[1].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 2">
              <source :src="audioFile[2].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 3">
              <source :src="audioFile[3].src" type="audio/mp4" />
            </audio>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()">ถัดไป</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},

  setup(props) {
    const itemChoice = [
      {
        src: new URL("@/assets/slide/IMG_4799.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4800.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4801.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4802.jpg", import.meta.url).href,
      },
    ];

    return { itemChoice };
  },
  data() {
    return {
      indexItem: 0,
      audioFile: [
        {
          src: new URL("@/public/audio3/audio25.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio26.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio27.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio28.m4a", import.meta.url).href,
        },
      ],

      // itemChoice: [
      //   {
      //     src: new URL("@/assets/slide/IMG_4799.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4800.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4801.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4802.jpg", import.meta.url).href,
      //   },
      // ],
    };
  },

  mounted() {
    console.log("this.itemChoice", this.itemChoice);
  },

  methods: {
    nextWay1() {
      if (this.indexItem + 1 !== this.itemChoice.length) {
        this.indexItem += 1;
      } else {
        this.$router.push("/Conclusion3");
      }
    },

    nextWay3() {},

    backItem() {
      if (!this.indexItem == 0) {
        this.indexItem -= 1;
      }
    },
  },
};
</script>

<style>
.responsive-image {
  max-width: 100%;
  max-height: 400px;
  height: auto;
}
</style>