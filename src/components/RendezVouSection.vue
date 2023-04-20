<template>
  <div class="coaching haut">
    <p>
      Veuillez remplir le formulaire ci-dessous pour prendre rendez-vous / vous inscrire à un coaching ou a un cours.
      precisez dans le sujet le type de coaching ou de cours que vous souhaitez et dans le message le jour et l'heure qui vous conviennent.
    </p>
  </div>
  <div class="container">
      <div class="formulaire">
        <form>
          <label>Nom Prenom:</label>
          <input type="email" v-model="mailName">
          <label>Sujet:</label>
          <input type="text" v-model="subject">
          <label>Message:</label>
          <textarea v-model="message"></textarea>
          <button @click.prevent="sendEmail">Envoyer</button>
        </form> 
      </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'PageHeader',
  data() {
    return {
      mailName: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      const serviceID = 'service_83ge1d2';
      const templateID = 'template_tkug896';
      const userID = 'MPwoTkXre3ugXmc8Z';

      emailjs.send(serviceID, templateID, {
        from_name: this.mailName,
        objet: this.subject,
        message: this.message,
      }, userID)
        .then(() => {
          console.log('E-mail envoyé avec succès!');
          this.mailName = '';
          this.subject = '';
          this.message = '';
        }, (error) => {
          console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #f5f5f5;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 1% ;
}


.formulaire label {
  display: block;
  margin-bottom: 10px;
}

.formulaire input,
.formulaire textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
}

.formulaire textarea {
  height: 150px;
}

.formulaire button {
  background-color: #cc5350;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

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

.coaching p {
  color: #fff;
  margin: 2%;
  font-size: 1.2em;
}

.coaching img {
  margin: 2%; /* espace entre l'image et le texte */
  width: 150px;
  height: 200px;
}
</style>
