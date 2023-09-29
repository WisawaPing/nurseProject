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

        <v-row v-if="indexItem == 0">
          <v-col cols="0" md="4" sm="0"> </v-col>
          <v-col cols="12" md="4" sm="12" class="text-center">
            <v-text-field label="ชื่อ" v-model="name"></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 0">
          <v-col cols="0" md="4" sm="0"> </v-col>
          <v-col cols="12" md="4" sm="12" class="text-center">
            <v-text-field label="นามสกุล" v-model="surname"></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 0">
          <v-col cols="12" class="text-center">
            <v-btn @click="nextItem()" :disabled="!name || !surname"
              >start</v-btn
            >
          </v-col>
        </v-row>

        <v-row v-if="indexItem != 0">
          <v-col cols="12" md="3" sm="3"> </v-col>
          <!-- <v-col cols="12" md="3" sm="3">
            <v-btn block="" :disabled="indexItem == 1" @click="backItem()"
              >Back</v-btn
            >
          </v-col> -->
          <v-col cols="12" md="6" sm="6">
            <v-btn
              block=""
              :disabled="indexItem + 1 == itemChoice.length"
              @click="goToSituation1()"
              >ถัดไป</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { defineComponent } from "vue";
// import { authorize, writeToSheet } from "../../plugins/googleSheetsService";

export default {
  components: {},
  data() {
    return {
      name: "",
      surname: "",
      indexItem: 0,
      itemChoice: [
        {
          src: new URL("../../assets/slide/IMG_4701.jpg", import.meta.url).href,
        },
      ],
      linkVideo1: "",

      directDownloadLink: null,
    };
  },

  mounted() {},

  methods: {
    // async sendDataToSheet() {
    //   try {
    //     const auth = await authorize();
    //     const spreadsheetId = "1j56RZXEVjYBFN5T0EOn1hzxcgvhRelMZh3GU_fdBjmA";
    //     const range = "Sheet1!A1"; // Replace with the sheet and cell where you want to write data
    //     const range1 = "Sheet1!B1"; // Replace with the sheet and cell where you want to write data
    //     const data = "Hello, World!"; // Data to send to the sheet
    //     const data1 = "surr"; // Data to send to the sheet

    //     await writeToSheet(auth, spreadsheetId, range, data, range1, data1);
    //   } catch (error) {
    //     console.error("Error sending data to Google Sheet:", error);
    //   }
    // },

    goToSituation1() {
      this.$router.push("/Situation1");
    },

    nextItem() {
      // if (this.indexItem + 1 !== this.itemChoice.length) {
      //   this.indexItem += 1;
      // }
      this.$router.push("/Video0");
      // this.sendDataToSheet();
    },
    backItem() {
      if (!this.indexItem == 0) {
        this.indexItem -= 1;
      }
    },

    loadURL() {
      if (this.linkVideo1) {
        const youtubeEmbedTemplate = "https://www.youtube.com/embed/";
        const url = this.linkVideo1.split(
          /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/
        );
        console.log("url", url);
        const YId =
          undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0];
        console.log("YId", YId);
        if (YId === url[0]) {
          console.log("not a youtube link");
        } else {
          console.log("it's  a youtube video");
        }
        const topOfQueue = youtubeEmbedTemplate.concat(YId);
        console.log("topOfQueue", topOfQueue);
        this.linkVideo1 = topOfQueue;
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
