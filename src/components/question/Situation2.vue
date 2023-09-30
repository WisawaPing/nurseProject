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
          </v-col>
        </v-row>

        <v-row v-if="indexItem !== 4 && indexItem !== 8">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()">ถัดไป</v-btn>
          </v-col>
        </v-row>

        <v-row v-if="indexItem == 4">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()"
              >1. ชวนมินโฮไปทำงานที่บ้านเราดีไหม <br />
              พ่อแม่เราจะได้ไม่เป็นห่วง</v-btn
            >
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 4">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay3()"
              >2. แค่ไปทำงานเอง ไม่เป็นไรหรอกมั้ง <br />
              จะได้อยู่เป็นเพื่อนมินโฮ</v-btn
            >
          </v-col>
        </v-row>

        <v-row v-if="indexItem == 8">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay1()">1. ปฏิเสธ </v-btn>
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 8">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextWay2()">2. ตกลงไป</v-btn>
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
        src: new URL("../../assets/slide/IMG_4738.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4739.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4740.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4741.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4742.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4743.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4744.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4745.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4746.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4747.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4748.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4749.jpg", import.meta.url).href,
      },
      {
        src: new URL("../../assets/slide/IMG_4750.jpg", import.meta.url).href,
      },
    ];

    return { itemChoice };
  },
  data() {
    return {
      audioFile: [
        {
          src: new URL("@/public/audio2/audio1.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio2.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio3.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio4.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio5_q1.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio6.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio7.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio8.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio9_q2.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio10.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio11.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio12.m4a", import.meta.url).href,
        },
        {
          src: new URL("@/public/audio2/audio13.m4a", import.meta.url).href,
        },
      ],

      indexItem: 0,
      // itemChoice: [
      //   {
      //     src: new URL("../../assets/slide/IMG_4738.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4739.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4740.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4741.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4742.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4743.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4744.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4745.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4746.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4747.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4748.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4749.jpg", import.meta.url).href,
      //   },
      //   {
      //     src: new URL("../../assets/slide/IMG_4750.jpg", import.meta.url).href,
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
      console.log("this.indexItem", this.indexItem);
      console.log("this.itemChoice.length", this.itemChoice.length);
      if (this.indexItem + 1 !== this.itemChoice.length) {
        this.indexItem += 1;
      } else {
        this.$router.push("/Conclusion2");
      }
    },
    nextWay2() {
      this.$router.push("/Situation2_1");
    },
    nextWay3() {
      this.$router.push("/Situation2_1");
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