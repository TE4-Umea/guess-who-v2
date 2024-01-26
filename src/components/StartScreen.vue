<script setup>
defineProps(['stats'])
</script>

<template>
<div class="">
    <div class="startScreen">
        <button v-on:click="test()">test</button>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        test() {
            this.stats.gameStarted = true
        },

        startMechanics() {
            document.getElementById('characterGrid').addEventListener('click', this.closeQuestionsOnClick);
            document.getElementById('searchField').addEventListener('click', this.search);
            document.getElementById('questionField').addEventListener('click', this.closeQuestionsOnClick);
            document.getElementById('questionField').addEventListener('click', this.clearSearchField);
        },
    },
}
</script>

<style>
.startScreen {
    width: 100%;
    min-height: 100vw;

    background-color: rgb(101, 25, 173);
}
</style>
