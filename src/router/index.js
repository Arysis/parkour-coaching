import { createRouter, createWebHistory } from 'vue-router';
import PresentationSection from '../components/PresentationSection.vue';
import coachingSection from '../components/CoachingSection.vue';
import RendezVousSection from '../components/RendezVouSection.vue';
import contactSection from '../components/ContactSection.vue';
import galerieSection from '../components/GalerieSection.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PresentationSection,
    },
    {
        path: '/coaching',
        name: 'coachingSection',
        component: coachingSection,
    },
    {
        path: '/rendez-vous',
        name: 'rendez-vous',
        component: RendezVousSection,
    },
    {
        path: '/contact',
        name: 'contact',
        component: contactSection,
    },
    {
        path: '/galerie',
        name: 'galerie',
        component: galerieSection,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
