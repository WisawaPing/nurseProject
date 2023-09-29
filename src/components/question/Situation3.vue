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
          <v-col cols="12" md="12" sm="12" v-if="indexItem !== 7">
            <img
              :src="itemChoice[indexItem].src"
              height="400"
              class="responsive-image"
            />
          </v-col>

          <v-col cols="12" md="3" sm="3" v-if="indexItem == 7"></v-col>
          <v-col cols="12" md="6" sm="6" v-if="indexItem == 7">
            <div class="iframe-container">
              <iframe
                :src="linkVideo1"
                frameborder="0"
                allowfullscreen
                class="responsive-iframe"
              ></iframe>
            </div>
          </v-col>
        </v-row>

        <v-row v-if="indexItem == 7">
          <v-col cols="12" class="text-center">
            <span style="font-size: 24px"
              ><u>สาธิตวิธีการทำสัญลักษณ์การขอความช่วยเหลือ</u></span
            >
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
            <audio controls autoplay @click="playAudio" v-if="indexItem == 8">
              <source :src="audioFile[8].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 9">
              <source :src="audioFile[9].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 10">
              <source :src="audioFile[10].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 11">
              <source :src="audioFile[11].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 12">
              <source :src="audioFile[12].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 13">
              <source :src="audioFile[13].src" type="audio/mp4" />
            </audio>
            <audio controls autoplay @click="playAudio" v-if="indexItem == 14">
              <source :src="audioFile[14].src" type="audio/mp4" />
            </audio>
          </v-col>
        </v-row>

        <v-row v-if="indexItem !== 9 && indexItem !== 15">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()">ถัดไป</v-btn>
          </v-col>
        </v-row>

        <v-row v-if="indexItem == 9">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()"
              >1. ขอความช่วยเหลือ จากผู้โดยสารคนอื่น</v-btn
            >
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 9">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay2()"
              >2. นั่งนิ่งๆ ยอมผู้ชายคนนั้น ไปจนถึงที่หมาย</v-btn
            >
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
      linkVideo1: "https://www.youtube.com/embed/VD_GgcGGzDU",

      audioFile: [
        {
          src: new URL("@/public/audio3/audio1.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio2.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio3.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio4.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio5.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio6.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio7.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio8.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio9.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio10_q1.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio11.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio12.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio13.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio14.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio3/audio15_success.m4a", import.meta.url)
            .href,
        },
      ],
      // audio1: "public/audio1/audio1.m4a",

      indexItem: 0,
      itemChoice: [
        {
          src: new URL("../../assets/slide/IMG_4779.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4780.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4781.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4782.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4783.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4784.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4785.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4786.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4786.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4787.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4788.jpg", import.meta.url).href,
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
          src: new URL("../../assets/slide/IMG_4792.jpg", import.meta.url).href,
        },
      ],
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
      console.log("this.indexItem", this.indexItem);
      console.log("this.itemChoice.length", this.itemChoice.length);
      if (this.indexItem + 1 !== this.itemChoice.length) {
        this.indexItem += 1;
      } else {
        this.$router.push("/Conclusion3");
      }
    },
    nextWay2() {
      this.$router.push("/Situation3_1");
    },
    nextWay3() {
      this.$router.push("/Situation3_1");
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

.iframe-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (height/width) */
  height: 0;
  overflow: hidden;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>