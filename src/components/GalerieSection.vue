<template>
    <div class="galerie">
      <div v-for="(image, index) in images" :key="index" class="images-container">
        <img :src="image" alt="Image" class="image" @click="toggleImage(index)" v-bind:class="{ enlarged: index === enlargedImageIndex }">
      </div>
      <div v-if="enlargedImageIndex !== -1" class="enlarged">
        <img :src="images[enlargedImageIndex]" alt="Enlarged Image" @click="toggleImage(-1)">
      </div>
    </div>
  </template>
  
<script>  
export default {
  name: "GalerieSection",
  data() {
    return {
      images: [],
      enlargedImageIndex: -1,
    };
  },
  mounted() {
    this.preloadImages();
    this.getImages();
  },
  methods: {
    getImages() {
      const requireContext = require.context("@/assets/galerie", false, /\.(png|jpe?g|svg|webp)$/);
      this.images = requireContext.keys().map((key) => requireContext(key));
    },
    preloadImages() {
      const requireContext = require.context("@/assets/galerie", false, /\.(png|jpe?g|svg|webp)$/);
      requireContext.keys().forEach(requireContext);
    },
    toggleImage(index) {
      if (this.enlargedImageIndex === index) {
        this.enlargedImageIndex = -1;
      } else {
        this.enlargedImageIndex = index;
      }
    },
  },
}
</script>
  
<style scoped>
.galerie {
    margin-top: 7%;
    margin-bottom: 3%;
    margin-left: 2%;
    margin-right: 2%;
    background-color: rgba(87, 89, 92, 0.8);
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-gap: 20px;
}
  
.images-container {
    margin: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
}
  
.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
}
  
.enlarged {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}
  
.enlarged img {
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
</style>
  