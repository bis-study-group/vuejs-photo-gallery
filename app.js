Vue.component('gallery', {
  template: `
    <div class="gallery">
      <h2 class="gallery-title">{{ title }}</h2>
      <div class="gallery__container">
        <div class="gallery__main">
          <img class="gallery__image" :src="'images/' + currentImage">
        </div>
        <div class="gallery__thumbnails thumbnails">
          <div class="thumbnails__image" @click="changeImage(index)" v-for="(item, index) in items">
            <img class="gallery__image" :src="'images/' + item.thumbnail">
          </div>
        </div>
      </div>
    </div>
  `,
  props: ['title', 'items'],
  data() {
    return {
      currentImage: null
    }
  },
  mounted() {
    this.currentImage = this.items[0].main
  },
  methods: {
    changeImage(index) {
      this.currentImage = this.items[index].main
    }
  }
});

new Vue({
  el: '#app',
  data: {
    photos1: [
      { main: 'image_1.jpeg', thumbnail: 'thumbnail_1.jpeg' },
      { main: 'image_2.jpeg', thumbnail: 'thumbnail_2.jpeg' },
      { main: 'image_3.jpeg', thumbnail: 'thumbnail_3.jpeg' }
    ],
    photos2: [
      { main: 'image_4.jpeg', thumbnail: 'thumbnail_4.jpeg' },
      { main: 'image_5.jpeg', thumbnail: 'thumbnail_5.jpeg' },
      { main: 'image_6.jpeg', thumbnail: 'thumbnail_6.jpeg' }
    ]
  }
});
