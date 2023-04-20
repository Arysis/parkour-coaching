<template>
    <header>
        <img alt="Vue logo" src="../assets/logo.png">
        <a><router-link to="/">Presentation</router-link></a>
        <a><router-link to="/galerie">Galerie</router-link></a>
        <a><router-link to="/coaching">Coaching et Cours</router-link></a>
        <a><router-link to="/rendez-vous">Rendez-vous</router-link></a>
        <a><router-link to="/Contact">Contact</router-link></a>
    </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #004A2F;
    color:#fff;
    z-index: 1000;
    height: 80px;
    overflow: hidden;
    -webkit-transition: height 0.3s;
    -moz-transition: height 0.3s;
    transition: height 0.3s;
    text-align:center;
    line-height:80px;

}
/*
saumon foncé : #cc5350
Bleu foncé : #1E375B
Vert foncé : #004A2F
Orange foncé : #FF8C00
*/
header img {
    height: 80px;
    float: left;
    margin-left: 20px;
}
header a
{
    text-decoration: none;
    color: #fff;
    font-size:30px;
    font-weight:normal;
    margin: 1%;
}

header a:hover {
  color: #e6e6e6;
}
</style>
