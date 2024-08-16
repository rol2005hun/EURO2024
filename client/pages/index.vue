<template>
    <div>
        <video autoplay muted loop id="myVideo" v-if="showCountdown">
            <source src="https://web.unideb.hu/rol2005hun/felho/uefavid.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
        <audio ref="audioElement" autoplay loop id="myMusic" v-if="showCountdown">
            <source src="https://web.unideb.hu/rol2005hun/felho/uefa.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <div class="container">
            <div v-if="!showCountdown" @click="showCountdownModal" class="modal">
                <h1>Click me to reveal how much do you need to wait until FIFA World Cup 2026!</h1>
            </div>
            <div v-else class="countdown">
                <div class="timer">
                    <h1>{{ days }} days</h1>
                    <h1>{{ hours }} hours</h1>
                    <h1>{{ minutes }} minutes</h1>
                    <h1>{{ seconds }} seconds</h1>
                </div>
            </div>
        </div>
        <div class="buttons" v-if="showCountdown">
            <button @click="toggleMute" class="sound-button">
                <i :class="[isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high']"></i>
            </button>
            <input type="range" min="0" max="1" step="0.01" class="volume-slider" :value="volumeSlider" @input="e => setVolume(parseFloat((e.target as HTMLInputElement).value))">
        </div>
    </div>
</template>

<script setup lang="ts">
import functions from '@/assets/ts/functions';

const showCountdown = ref(false);
const countdownDate = new Date('2026-06-11').getTime();
const currentTime = ref(new Date().getTime());
const timeRemaining = computed(() => countdownDate - currentTime.value);
const days = computed(() => Math.floor(timeRemaining.value / (1000 * 60 * 60 * 24)));
const hours = computed(() => Math.floor((timeRemaining.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const minutes = computed(() => Math.floor((timeRemaining.value % (1000 * 60 * 60)) / (1000 * 60)));
const seconds = computed(() => Math.floor((timeRemaining.value % (1000 * 60)) / 1000));
const audioElement = ref<HTMLAudioElement | null>(null);
const isMuted = ref(false);
const volumeSlider = ref<Number>(1);
const volume = ref(functions.getCookie('volume') as string);

function toggleMute() {
    isMuted.value = !isMuted.value;
    if (audioElement.value) {
        audioElement.value.volume = isMuted.value ? 0 : (volumeSlider.value as number);
    }
}

function setVolume(value: number) {
    console.log(value)
    if (audioElement.value) {
        audioElement.value.volume = value;
        volumeSlider.value = value;
        if(value == 0) isMuted.value = true;
        else isMuted.value = false;
        functions.setCookie('volume', value.toString(), 365);
    }
}

function showCountdownModal() {
    showCountdown.value = true;
    nextTick(() => {
        if(audioElement.value) {
            if(volume.value) {
                setVolume(parseFloat(volume.value));
                volumeSlider.value = parseFloat(volume.value);
            }
        }
    });
}

onMounted(() => {
    setInterval(() => {
        currentTime.value = new Date().getTime();
    }, 1000);
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>