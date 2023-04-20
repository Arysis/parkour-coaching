<template>
    <div class="Presentation haut">
      <img class="imgV imgV-left" alt="Rayan" src="../assets/rayan.png">
      <div class="text-container">
        <p>
          Moi c'est Rayan, pratiquant de parkour, et explorateur du mouvement !
        </p>
        <p>
          Depuis 2016 j'ai toujours aimé faire découvrir le parkour à mes amis, et donner des conseils aux traceurs (pratiquants de parkour) avec qui je bouge. En 2020 j'ai organisé une dizaine de cours adultes, le confinement m'a stoppé, mais je me suis ensuite lancé dans un BPJEPS Activités Physiques pour Tous et en Décembre 2021 j'ai lancé le tout premier cours officiel de parkour pour +10 ans à Agen ! Aujourd'hui je travaille en indépendant.
        </p>
        <p>
          J'ai commencé le parkour en 2014, aucun autre sport ne m'attirait, j'étais très réservé et manquais de confiance en moi. En quelques années j'ai vu mon corps, et mes capacités physiques changer, mon rapport à l'autre aussi car être pratiquant de parkour est synonyme de voyager, découvrir d'autres villes, et souvent prendre contact avec les traceurs locaux pour faire des sessions ensemble !
        </p>
        <p>
          C'est une des meilleures manières de découvrir son environnement pour moi, car ça en fait un terrain de jeu énorme. L'oeil s'habitue petit à petit à observer autour, et trouver de quoi s'amuser toujours plus. Dans un monde où il est de plus en plus difficile de se connecter à ce qui nous entoure, le parkour permet de regagner une place d'observateur, développer la curiosité et l'enfant qui est en nous !
        </p>
      </div>
    </div>
    <div class="Presentation">
      <div class="text-container">
        <p>
          Le parkour est un sport qui consiste à se déplacer d'un point A à un point B en surmontant des obstacles tels que des murs, des barres, des poteaux, des sauts en hauteur et en longueur, et bien d'autres encore. Le but du parkour est de trouver le chemin le plus rapide et le plus efficace pour arriver à destination, tout en utilisant le moins d'énergie possible.
          Le parkour est une discipline qui requiert une grande force physique et mentale, ainsi qu'une excellente coordination et un sens de l'équilibre développé. Les pratiquants de parkour doivent également être capables de surmonter leur peur et leur appréhension pour pouvoir réaliser des sauts et des mouvements acrobatiques.
          Le parkour peut être pratiqué seul ou en groupe, à l'extérieur ou à l'intérieur, sur des parcours définis ou sur des terrains improvisés. Les pratiquants de parkour utilisent souvent leur environnement urbain comme terrain de jeu, mais le parkour peut également être pratiqué dans des parcs, des forêts, des plages et d'autres endroits naturels.
          Le parkour est un sport accessible à tous, quel que soit votre niveau de forme physique. Il suffit d'un peu d'entraînement et de persévérance pour progresser et devenir un vrai traceur. C'est un sport qui vous permettra de repousser vos limites, de développer votre créativité et de découvrir de nouveaux endroits et de nouvelles sensations.
        </p>
      </div>
      <img class="imgH imgH-right" alt="Parkour" src="../assets/parkour.jpg">
    </div>
    <div class="Presentation card-container">
        <TemoignageSection />
        <TemoignageSection />
        <TemoignageSection />
    </div>
</template>

<script>
import TemoignageSection from './TemoignageSection.vue';

export default {
  name: 'PresentationSection',
  components: {
    TemoignageSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.haut {
  margin-top: 7%;
}

.Presentation {
  margin-bottom: 2%;
  background-color: rgba(87, 89, 92, 0.8);
  width: 100%;
  display: block;
  overflow: auto;
}

.Presentation .text-container {
  margin: 2%;
  float: left;
  width: 50%;
}

.Presentation .imgV {
  margin: 2%;
  width: 20%;
}

.Presentation .imgH {
  width: 30%;
  margin-right: 10%;
  margin-top: 5%;
}

.Presentation .imgV-left {
  float: left;
}

.Presentation .imgH-right {
  float: right;
}

.Presentation p {
  color: #fff;
  margin: 2%;
  font-size: 1.2em;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
