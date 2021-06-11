<template>
    <div class="board">
        <button @click="play">{{label}}</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SoundButton extends Vue {
    @Prop() private label!: string;

    @Prop() private fileName!: string;

    play() {
        const audio = new Audio(`./media/${this.fileName}.mp3`);
        audio.play();
        console.log("Игого");
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.board {
    button {
        width: 100px;
        height: 100px;
        margin: 20px;
    }
}
</style>
