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
            <audio controls autoplay @click="playAudio" v-if="indexItem == 4">
              <source :src="audioFile[4].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 5">
              <source :src="audioFile[5].src" type="audio/mp4" />
            </audio>
          </v-col>
        </v-row>

        <v-row v-if="indexItem == 0">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()">1. นั่งนิ่ง</v-btn>
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 0">
          <v-col cols="0" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay2()"
              >2. หนูจะต้องเอาของไปให้แม่ตอนนี้ค่ะ</v-btn
            >
          </v-col>
        </v-row>

        <v-row v-if="indexItem == 3">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()">1. ไม่บอกแม่</v-btn>
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 3">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay3()">2. บอกแม่</v-btn>
          </v-col>
        </v-row>

        <v-row v-if="indexItem !== 0 && indexItem !== 3">
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
        src: new URL("@/assets/slide/IMG_4726.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4727.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4728.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4729.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4730.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4731.jpg", import.meta.url).href,
      },
    ];

    return { itemChoice };
  },
  data() {
    return {
      audioFile: [
        {
          src: new URL("@/public/audio1/audio7.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio8.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio9.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio10.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio11.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio12.m4a", import.meta.url).href,
        },
      ],

      indexItem: 0,
      // itemChoice: [
      //   {
      //     src: new URL("@/assets/slide/IMG_4726.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4727.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4728.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4729.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4730.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4731.jpg", import.meta.url).href,
      //   },
      // ],
    };
  },

  mounted() {
    this.playAudio();
  },

  methods: {
    playAudio() {
      // Function to initiate audio playback on user click
      const audioElement = this.$el.querySelector("audio");
      audioElement.play();
    },
    nextWay1() {
      if (this.indexItem + 1 !== this.itemChoice.length) {
        this.indexItem += 1;
      } else {
        this.$router.push("/Conclusion1");
      }
    },
    nextWay2() {
      this.$router.push("/Situation1_1");
    },
    nextWay3() {
      this.$router.push("/Situation1_2");
    },

    backPage() {
      this.$router.push("/");
    },
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