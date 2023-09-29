
<template>
  <div class="pt-4"></div>
  <div class="container">
    <div>
      <h3 class="text-center">ฟอร์มบันทึกข้อมูลด้วย HTML</h3>
    </div>
    <form method="post" autocomplete="off" name="hello-sheet">
      <div class="form-group">
        <label for="name">ชื่อ</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          placeholder="ชื่อ"
          name="ชื่อ"
        />
      </div>
      <div class="form-group">
        <label for="name">นามสกุล</label>
        <input
          v-model="form.nickname"
          type="text"
          class="form-control"
          placeholder="นามสกุล"
          name="นามสกุล"
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

      console.log(new FormData(form));

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => alert("บันทึกข้อมูลเรียบร้อยแล้ว.."))
        .catch((error) => console.error("Error!", error.message));
    },
  },
};
</script>
