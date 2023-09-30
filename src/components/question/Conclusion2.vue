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
        src: new URL("@/assets/slide/IMG_4778.jpg", import.meta.url).href,
      },
    ];

    return { itemChoice };
  },
  data() {
    return {
      indexItem: 0,
      audioFile: [
        {
          src: new URL("@/public/audioConclusion/con2.m4a", import.meta.url)
            .href,
        },
      ],
      // itemChoice: [
      //   {
      //     src: new URL("@/assets/slide/IMG_4778.jpg", import.meta.url).href,
      //   },
      // ],
    };
  },

  mounted() {},

  methods: {
    nextWay1() {
      this.$router.push("/Situation3");
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