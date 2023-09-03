<script>
import AppJumbotron from '../pages/AppJumbotron.vue';
export default {

    components: {
        AppJumbotron,
    }
}
</script>


<template>
    <!-- titolo -->
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center my-5">
                    <h1>
                        <span class="text-title">BoolPetCare</span>, il gestionale veterinario in cloud
                    </h1>
                    <p>Il software capace di arricchire il tuo business nella veterinaria e migliorare la tua vita
                        professionale</p>
                </div>
            </div>
        </div>
        <!-- jumbotron -->
        <AppJumbotron />
        <!-- controllo -->
        <div class="row my-5 home-section">
            <div class="col-12 col-lg-6">
                <div class="mt-5">
                    <h2><span class="text-title">BoolPetCare</span> per l'ambulatorio già avviato</h2>
                    <p>Con BoolPetCare acquisisci il perfetto controllo, ritorvi il tempo per fare tutto ciò che devi,
                        comprendi come ottimizzare le risorse che hai, come acquisire nuovi clienti e fidelizzare quelli
                        presenti.</p>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <img class="img-fluid" src="/img/gestione-veterinari-social.webp">
            </div>
        </div>
        <!-- gestione multi-sede -->
        <div class="row my-5 home-section">
            <div class="col-12 col-lg-6">
                <div class="mt-5">
                    <h2><span class="text-title">BoolPetCare</span> per la gestione multisede</h2>
                    <p>Valorizza il massimo potenziale dai gruppi multisede e/o multietniche. Diventa un Vet Manager
                        eccellente grazie ai dati sempre disponibili, affidabili, semplici da raccogliere e che ti
                        consentiranno di raggiungere i tuoi obiettivi di business. Fai in modo che l'insieme delle tue
                        strutture valga più della loro somma aritmetica.</p>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <img class="img-fluid" src="/img/gestionale-cliniche-veterinarie-multisede-1024x526.webp">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.home-section {
    padding: 50px 0;
}
</style>