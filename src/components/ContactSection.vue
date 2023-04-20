<template>
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
  margin-top: 7%;
  margin-bottom: 5%;
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
</style>