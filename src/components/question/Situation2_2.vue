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
        src: new URL("@/assets/slide/IMG_4766.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4767.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4768.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4769.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4770.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4771.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4772.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4773.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4774.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4775.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4776.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4777.jpg", import.meta.url).href,
      },
      // {
      //   src: new URL("@/assets/slide/IMG_4778.jpg", import.meta.url).href,
      // },
    ];

    return { itemChoice };
  },
  data() {
    return {
      indexItem: 0,
      audioFile: [
        {
          src: new URL("@/public/audio2/audio29_q3_2.m4a", import.meta.url)
            .href,
        },
        {
          src: new URL("@/public/audio2/audio30.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio31.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio32.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio33.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio34.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio35.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio36.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio37.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio38.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio39.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio40.m4a", import.meta.url).href,
        },
      ],
      // itemChoice: [
      //   {
      //     src: new URL("@/assets/slide/IMG_4766.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4767.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4768.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4769.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4770.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4771.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4772.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4773.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4774.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4775.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4776.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4777.jpg", import.meta.url).href,
      //   },
      //   // {
      //   //   src: new URL("@/assets/slide/IMG_4778.jpg", import.meta.url).href,
      //   // },
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