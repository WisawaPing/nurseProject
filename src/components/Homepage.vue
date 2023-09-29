<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-img height="300" src="@/assets/logoNurse.avif" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" class="text-center"> </v-col>
      <v-col cols="3" class="text-center">
        <v-text-field label="ชื่อ"></v-text-field>
      </v-col>
      <v-col cols="3" class="text-center">
        <v-text-field label="นามสกุล"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn @click="start()">start</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },

  methods: {
    start() {
      this.$router.push("/Qustion1");
    },
  },
};
</script>
