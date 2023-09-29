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
          <v-col cols="12" md="3" sm="3"></v-col>
          <v-col cols="12" md="6" sm="6">
            <div class="iframe-container">
              <iframe
                :src="linkVideo1"
                frameborder="0"
                allowfullscreen
                class="responsive-iframe"
              ></iframe>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="3"></v-col>
        </v-row>

        <!-- <v-row>
          <v-col cols="12" md="3" sm="3"> </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-btn block="" @click="nextItem()">ถัดไป</v-btn>
          </v-col>
        </v-row> -->
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
      linkVideo1: "https://www.youtube.com/embed/zpCJUa0WhmQ",
      is3Min: false,
      itemChoice: [
        {
          src: new URL("../../assets/slide/IMG_4720.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4721.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4722.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4723.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4724.jpg", import.meta.url).href,
        },
        {
          src: new URL("../../assets/slide/IMG_4725.jpg", import.meta.url).href,
        },
      ],
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

/* Apply max-width to the iframe container for screens narrower than 550px */
@media (max-width: 550px) {
  .iframe-container {
    max-width: 550px;
  }
}
</style>
