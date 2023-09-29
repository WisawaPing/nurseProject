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
              <v-text-field
                label="ชื่อ"
                v-model="form.name"
                name="ชื่อ"
              ></v-text-field>
            </v-col>
            <v-col cols="0" md="4" sm="0"> </v-col>
            <v-col cols="0" md="4" sm="0"> </v-col>
            <v-col cols="12" md="4" sm="12" class="text-center">
              <v-text-field
                label="นามสกุล"
                v-model="form.nickname"
                name="นามสกุล"
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
                @click="nextItem()"
                :disabled="!form.name || !form.nickname"
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

export default {
  components: {},
  data() {
    return {
      form: {
        name: "",
        nickname: "",
      },
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
    sendData() {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwK8u2w43ZqeDUjb9mhtuknmOEbTsuAFg41u0413PRa8EeJicNhoGyqJo5Flp8Mr71BmA/exec";
      const form = document.forms["hello-sheet"];

      console.log(new FormData(form));

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => alert("บันทึกข้อมูลเรียบร้อยแล้ว.."))
        .catch((error) => console.error("Error!", error.message));
    },

    goToSituation1() {
      this.$router.push("/Situation1");
    },

    nextItem() {
      // if (this.indexItem + 1 !== this.itemChoice.length) {
      //   this.indexItem += 1;
      // }
      this.$router.push("/Video0");
      this.sendData();
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
<!-- 
<template>
  <div class="pt-4"></div>
  <div class="container">
    <div>
      <h3 class="text-center">ฟอร์มบันทึกข้อมูลด้วย HTML</h3>
    </div>
    <form method="post" autocomplete="off" name="hello-sheet">
      <div class="form-group">
        <label for="name">ชื่อ สกุล</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          placeholder="ชื่อ สกุล"
          name="ชื่อ-สกุล"
        />
      </div>
      <div class="form-group">
        <label for="name">ชื่อเล่น</label>
        <input
          v-model="form.nickname"
          type="text"
          class="form-control"
          placeholder="ชื่อเล่น"
          name="ชื่อเล่น"
        />
      </div>
      <div class="form-group">
        <label for="name">เบอร์โทร</label>
        <input
          v-model="form.tel"
          type="text"
          class="form-control"
          placeholder="เบอร์โทร"
          name="เบอร์โทร"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">อีเมล</label>
        <input
          v-model="form.email"
          type="email"
          name="อีเมล"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="อีเมล"
        />
      </div>

      <button @click.prevent="sendData" type="submit">บันทึก</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    ImgItems: [
      {
        src: "/public/1.jpg",
      },
    ],
    form: {
      name: "",
      nickname: "",
      tel: "",
      email: "",
    },
  }),

  methods: {
    sendData() {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwK8u2w43ZqeDUjb9mhtuknmOEbTsuAFg41u0413PRa8EeJicNhoGyqJo5Flp8Mr71BmA/exec";
      const form = document.forms["hello-sheet"];

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => alert("บันทึกข้อมูลเรียบร้อยแล้ว.."))
        .catch((error) => console.error("Error!", error.message));
    },
  },
};
</script> -->
