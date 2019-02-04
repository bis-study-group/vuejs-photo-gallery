Vue.component('gallery', {
  template: `
    <div class="gallery">
      <h2 class="gallery-title">{{ title }}</h2>
      <section>
        <img v-for="(photo, index) in items" v-show="index == showPhoto" v-bind:src="/images/ + photo.main">
      </section>
      <section>
        <img v-for="(photo, index) in items" class="choice" v-bind:src="/images/ + photo.thumbnail" v-bind:alt="photo.thumbnail" v-on:click="showPhoto = index">
      </section>
    </div>
  `,
  data: function() {
      return {
        showPhoto : 0
      }
  },  
  props:['title','items']
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
