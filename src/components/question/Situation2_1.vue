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

        <v-row v-if="indexItem == 11">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()">1. ปฏิเสธ </v-btn>
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 11">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay2()">2. ตกลง นิดเดียวนะ</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3" sm="3"> </v-col>

          <v-col cols="12" md="6" sm="6" v-if="indexItem !== 11">
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
        src: new URL("../../assets/slide/IMG_4751.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4752.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4753.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4754.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4755.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4756.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4757.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4758.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4759.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4760.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4761.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4762.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4763.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4764.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4765.jpg", import.meta.url).href,
      },
    ];

    return { itemChoice };
  },
  data() {
    return {
      indexItem: 0,
      audioFile: [
        {
          src: new URL("@/public/audio2/audio14_q2_2.m4a", import.meta.url)
            .href,
        },
        {
          src: new URL("@/public/audio2/audio15.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio16.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio17.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio18.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio19.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio20.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio21.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio22.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio23.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio24.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio25_q3.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio26.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio27.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio28.m4a", import.meta.url).href,
        },
      ],
      // itemChoice: [
      //   {
      //     src: new URL("../../assets/slide/IMG_4751.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4752.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4753.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4754.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4755.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4756.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4757.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4758.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4759.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4760.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4761.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4762.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4763.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4764.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4765.jpg", import.meta.url).href,
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
        this.$router.push("/Conclusion2");
      }
    },
    nextWay2() {
      this.$router.push("/Situation2_2");
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