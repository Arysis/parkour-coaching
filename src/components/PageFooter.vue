<template>
    <footer>
      <div class="social">
        <a href="https://www.facebook.com/votre-page-facebook"><i class="fab fa-facebook"></i></a>
        <a href="https://twitter.com/votre-page-twitter"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/votre-page-instagram/"><i class="fab fa-instagram"></i></a>
        <a href="https://www.superprof.fr/educateur-sportif-diplome-bpjeps-passionne-donne-cours-parkour-art-deplacement-agen.html">Superprof</a>
      </div>
      <div class="contact">
        <p><i class="fas fa-envelope"></i> : rayan.dami@orange.fr / rayantraceur@gmail.com</p>
        <p><i class="fas fa-phone"></i> : 06 77 28 15 37</p>
      </div>
    </footer>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  name: 'PageFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background-color: #333333;
  color: #fff;
  font-size: 14px;
  padding: 20px;
  text-align: center;
}

.social a {
  color: #d2cdcd;
  font-size: 24px;
  margin-right: 10px;
}

.contact p {
  margin: 0;
  margin-top: 10px;
}

.copyright {
  margin-top: 20px;
}
</style>
