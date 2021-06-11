<template>
    <div id="app">
        <SoundButton label="Муууу" fileName="00225" />
        <SoundButton label="Иии-го-го" fileName="01426" />
        <SoundButton label="Га-га-га" fileName="02019" />
        <SoundButton label="Кука-реку" fileName="02036" />
        <SoundButton label="Мяуу" fileName="04457" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SoundButton from "./components/SoundButton.vue";

@Component({
    components: {
        SoundButton,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}
</style>
