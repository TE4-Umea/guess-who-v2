<script setup()>
console.log('hej')
</script>

<template>
<div class="center">
    <button v-on:click="() => { test() }">test</button>
</div>
</template>

<script>
export default{
    methods: {
        test(){
            console.log('Fem')
        }
    }
}
</script>

<style>
</style>
