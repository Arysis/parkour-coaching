<template>
    <div class="card">
        <div class="header">
            <img src="../assets/avatar.jpg" alt="Avatar">
            <p class="pseudo">Pseudo</p>
        </div>
        <hr>
            <p class="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet erat eget ante euismod sodales id id neque. Pellentesque euismod turpis quis enim efficitur eleifend. Sed aliquam, magna ut accumsan elementum, quam est porttitor metus, id convallis velit velit vel nunc. Duis interdum orci quis ante convallis lacinia. Pellentesque euismod tellus vel dolor convallis, ac dapibus enim commodo. Phasellus semper libero justo, a tincidunt est commodo vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean dapibus pharetra velit, vel ultrices justo venenatis vel. Nulla facilisi. Aenean et dui sit amet mauris blandit gravida. Quisque porttitor, orci et sagittis aliquet, nisi risus commodo arcu, eu dictum nibh orci ut velit.</p>
        <hr>
        <div class="note">
            <span class="rating">4.5</span>
            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TemoinageSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 20%;
  background-color: #fff;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  opacity: 1;
}

.header {
  display: flex;
  align-items: center;
}

.header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.pseudo {
  font-weight: bold;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}

.comment {
  font-style: italic;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.note {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}

.rating {
  font-weight: bold;
  color: #f8b400;
}

.stars {
  font-size: 24px;
  color: #f8b400;
}
</style>
