<script>
import { router } from '../router.JS';
export default {
    name: 'ContactPage',
    data() {
        return {
            nome: '',
            email: '',
            messaggio: ''
        };
    },
    methods: {
        inviaMessaggio() {
            // Qui puoi inserire il codice per inviare il messaggio (es. tramite API o backend)
            alert('Messaggio inviato con successo!');

            // Resetta i campi del modulo dopo l'invio
            this.nome = '';
            this.email = '';
            this.messaggio = '';
        }
    }
};
</script>

<template>
    <div>
        <div class="container mt-5">
            <h1 class="mb-4">Contattaci</h1>

            <div class="row">
                <div class="col-md-6">
                    <h2>Informazioni di Contatto</h2>
                    <p>
                        Puoi contattarci tramite i seguenti metodi:
                    </p>
                    <ul>
                        <li><strong>Telefono:</strong> +1 (123) 456-7890</li>
                        <li><strong>Email:</strong> info@veterinariocittà.it</li>
                        <li><strong>Indirizzo:</strong> Via del Veterinario, 12345, Città degli Animali</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h2>Orari di Apertura</h2>
                    <p>
                        Siamo aperti per assisterti nei seguenti orari:
                    </p>
                    <ul>
                        <li><strong>Lunedì - Venerdì:</strong> 9:00 AM - 6:00 PM</li>
                        <li><strong>Sabato:</strong> 9:00 AM - 1:00 PM</li>
                        <li><strong>Domenica:</strong> Chiusi</li>
                    </ul>
                </div>
            </div>

            <h2 class="mt-4">Invia un Messaggio</h2>
            <p>
                Puoi utilizzare il modulo sottostante per inviarci un messaggio direttamente.
            </p>

            <form @submit.prevent="inviaMessaggio">
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" v-model="nome" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Indirizzo Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" required>
                </div>
                <div class="mb-3">
                    <label for="messaggio" class="form-label">Messaggio</label>
                    <textarea class="form-control" id="messaggio" v-model="messaggio" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Invia Messaggio</button>
            </form>
        </div>
    </div>
</template>
  
<style scoped>
/* Puoi aggiungere stili CSS specifici per questa pagina qui */
</style>
  