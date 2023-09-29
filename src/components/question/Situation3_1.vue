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
            <audio controls autoplay @click="playAudio" v-if="indexItem == 6">
              <source :src="audioFile[6].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 7">
              <source :src="audioFile[7].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 8">
              <source :src="audioFile[8].src" type="audio/mp4" />
            </audio>
          </v-col>
        </v-row>

        <v-row v-if="indexItem == 3">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()"
              >1. ขอความช่วยเหลือ จากผู้โดยสารคนอื่น
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 3">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay2()"
              >2. ตัดสินใจตะโกนร้องขอความช่วยเหลือ</v-btn
            >
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6" v-if="indexItem !== 3">
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
  data() {
    return {
      indexItem: 0,
      audioFile: [
        {
          src: new URL("@/public/audio3/audio16.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio17.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio18.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio19_q2.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio20.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio21.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio22.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio23.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio24.m4a", import.meta.url).href,
        },
      ],

      itemChoice: [
        {
          src: new URL("../../assets/slide/IMG_4793.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4794.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4795.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4796.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4797.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4789.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4790.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4791.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4798.jpg", import.meta.url).href,
        },
      ],
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
      console.log("this.indexItem", this.indexItem);
    },
    nextWay2() {
      this.$router.push("/Situation3_2");
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