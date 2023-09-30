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
          <!-- <v-col cols="12" md="12" sm="12">
            <iframe
              width="560"
              height="315"
              :src="linkVideo1"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </v-col> -->
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

        <v-row>
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextItem()">ถัดไป</v-btn>
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
        src: new URL("@/assets/slide/IMG_4720.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4721.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4722.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4723.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4724.jpg", import.meta.url).href,
      },
      {
        src: new URL("@/assets/slide/IMG_4725.jpg", import.meta.url).href,
      },
    ];

    return { itemChoice };
  },
  data() {
    return {
      audioFile: [
        {
          src: new URL("@/public/audio1/audio1.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio2.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio3.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio4.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio5.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio1/audio6.m4a", import.meta.url).href,
        },
      ],
      indexItem: 0,
      linkVideo1: "https://www.youtube.com/embed/zGhyOJCJS2o",
      is3Min: false,
      // itemChoice: [
      //   {
      //     src: new URL("@/assets/slide/IMG_4720.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4721.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4722.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4723.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4724.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("@/assets/slide/IMG_4725.jpg", import.meta.url).href,
      //   },
      // ],
    };
  },

  mounted() {
    console.log("this.itemChoice", this.itemChoice);

    // setTimeout(() => {
    //   this.is3Min = true;
    // }, 3000);
    // // }, 180000);
  },

  methods: {
    goToSituation1() {
      this.$router.push("/Situation1");
    },

    nextItem() {
      if (this.indexItem + 1 !== this.itemChoice.length) {
        this.indexItem += 1;
      } else {
        this.$router.push("/Situation1");
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
