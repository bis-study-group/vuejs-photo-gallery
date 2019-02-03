Vue.component("gallery", {
  template: `
    <div class="gallery">
      <div class="photo1">
        <h2 class="gallery-title">{{ title }}</h2>
        <img v-for="(item, index) in items" :src="/images/ + item.main" v-if="activeImg === index">
      </div>
      <div class="photo2">
        <img v-for="(item, index) in items" :src="/images/ + item.thumbnail" @click="activeImg = index">
      </div>
    </div>
  `,
  data: function() {
    return {
      activeImg: 0
    };
  },
  props: {
    title: String,
    items: Array
  }
});

new Vue({
  el: "#app",
  data: {
    photos1: [
      { main: "image_1.jpeg", thumbnail: "thumbnail_1.jpeg" },
      { main: "image_2.jpeg", thumbnail: "thumbnail_2.jpeg" },
      { main: "image_3.jpeg", thumbnail: "thumbnail_3.jpeg" }
    ],
    photos2: [
      { main: "image_4.jpeg", thumbnail: "thumbnail_4.jpeg" },
      { main: "image_5.jpeg", thumbnail: "thumbnail_5.jpeg" },
      { main: "image_6.jpeg", thumbnail: "thumbnail_6.jpeg" }
    ]
  }
});
