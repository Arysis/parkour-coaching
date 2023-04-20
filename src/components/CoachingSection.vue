<template>
    <div class="coaching haut">
      <img class="imgV" alt="Rayan" src="../assets/rayan.png">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet erat eget ante euismod sodales id id neque. Pellentesque euismod turpis quis enim efficitur eleifend. Sed aliquam, magna ut accumsan elementum, quam est porttitor metus, id convallis velit velit vel nunc. Duis interdum orci quis ante convallis lacinia. Pellentesque euismod tellus vel dolor convallis, ac dapibus enim commodo. Phasellus semper libero justo, a tincidunt est commodo vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean dapibus pharetra velit, vel ultrices justo venenatis vel. Nulla facilisi. Aenean et dui sit amet mauris blandit gravida. Quisque porttitor, orci et sagittis aliquet, nisi risus commodo arcu, eu dictum nibh orci ut velit.
      </p>
    </div>
    <div class="coaching">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet erat eget ante euismod sodales id id neque. Pellentesque euismod turpis quis enim efficitur eleifend. Sed aliquam, magna ut accumsan elementum, quam est porttitor metus, id convallis velit velit vel nunc. Duis interdum orci quis ante convallis lacinia. Pellentesque euismod tellus vel dolor convallis, ac dapibus enim commodo. Phasellus semper libero justo, a tincidunt est commodo vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean dapibus pharetra velit, vel ultrices justo venenatis vel. Nulla facilisi. Aenean et dui sit amet mauris blandit gravida. Quisque porttitor, orci et sagittis aliquet, nisi risus commodo arcu, eu dictum nibh orci ut velit.
      </p>
      <img class="imgV" alt="Rayan" src="../assets/rayan.png">
    </div>
</template>

<script>
export default {
  name: 'contactSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.haut {
  margin-top: 7%;
}
.coaching {
  margin-bottom: 2%;
  background-color: rgba(87, 89, 92, 0.8);
  width: 100%;
  display: flex;
  align-items: center; /* aligne les éléments verticalement */
}

.coaching .imgV {
  margin: 2%;
  width: 20%;
}

.coaching .imgH {
  margin: 2%; 
  width: 30%;
}

.coaching p {
  color: #fff;
  margin: 2%;
  font-size: 1.2em;
}
</style>
