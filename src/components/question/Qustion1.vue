<template>
  <form method="post" autocomplete="off" name="hello-sheet">
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
              <img :src="url" height="400" class="responsive-image" />
            </v-col>
          </v-row>

          <v-row v-if="indexItem == 0" class="d-flex justify-center">
            <v-col cols="12" sm="9" md="7" class="text-center">
              <v-text-field
                clearable
                hide-details="auto"
                density="compact"
                variant="solo-filled"
                label="ชื่อ"
                placeholder="กรุณากรอก"
                v-model="form.name"
                name="ชื่อ"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="9" md="7" class="text-center">
              <v-text-field
                clearable
                hide-details="auto"
                density="compact"
                variant="solo-filled"
                label="นามสกุล"
                placeholder="กรุณากรอก"
                v-model="form.nickname"
                name="นามสกุล"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="9" md="7" class="d-flex justify-center">
              <v-text-field
                class="disabled_input"
                hide-details="auto"
                density="compact"
                variant="solo-filled"
                label="วัน-เวลา"
                v-model="form.time"
                name="วัน-เวลา"
                bg-color="grey-lighten-2"
              ></v-text-field>
            </v-col>
            <!-- <v-col cols="0" md="4" sm="0"> </v-col>
          <v-col cols="12" md="4" sm="12" class="text-center">
            <v-text-field
              label="ชื่อ"
              v-model="form.name"
              name="ชื่อ"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="indexItem == 0">
          <v-col cols="0" md="4" sm="0"> </v-col>
          <v-col cols="12" md="4" sm="12" class="text-center">
            <v-text-field
              label="นามสกุล"
              v-model="form.nickname"
              name="นามสกุล"
            ></v-text-field>
          </v-col> -->
          </v-row>
          <v-row v-if="indexItem == 0">
            <v-col cols="12" class="text-center">
              <v-btn
                color="light-green-darken-1"
                size="large"
                @click="sendData()"
                :disabled="!form.name || !form.nickname"
                :loading="loadingBtn"
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
  </form>
</template>

<script>
// import { defineComponent } from "vue";
// import { authorize, writeToSheet } from "../../plugins/googleSheetsService";
import axios from "axios";
import dayjs from "dayjs";

export default {
  components: {},

  setup(props) {
    const url = new URL("@/assets/slide/IMG_4701.JPG", import.meta.url).href;

    return { url };
  },
  data() {
    return {
      form: {
        name: "",
        nickname: "",
        time: dayjs(new Date()).format("DD/MM/YYYY | HH:mm:ss น."),
      },
      indexItem: 0,
      itemChoice: [
        {
          src: new URL("../../assets/slide/IMG_4701.JPG", import.meta.url),
        },
      ],
      linkVideo1: "",

      directDownloadLink: null,

      loadingBtn: false,
    };
  },

  mounted() {},

  methods: {
    async sendData() {
      this.loadingBtn = true;

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwK8u2w43ZqeDUjb9mhtuknmOEbTsuAFg41u0413PRa8EeJicNhoGyqJo5Flp8Mr71BmA/exec";
      const form = document.forms["hello-sheet"];

      // const formData = new FormData(form);

      // const response = await axios.post(scriptURL, formData, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          this.loadingBtn = false;

          alert("บันทึกข้อมูลเรียบร้อยแล้ว..");
          this.nextItem();
        })
        .catch((error) => {
          this.loadingBtn = false;

          console.error("Error!", error.message);
          alert("บันทึกข้อมูลเรียบร้อยแล้ว..");
          this.nextItem();
        });
    },

    goToSituation1() {
      this.$router.push("/Situation1");
    },

    nextItem() {
      // if (this.indexItem + 1 !== this.itemChoice.length) {
      //   this.indexItem += 1;
      // }
      this.$router.push("/Video0");
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


<style scoped>
.disabled_input {
  pointer-events: none;
}
</style>