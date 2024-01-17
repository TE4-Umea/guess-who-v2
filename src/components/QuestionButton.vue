<script setup>
defineProps(['question'])
</script>

<template>
    <li>
        <a v-on:click="() => { runScript(question.command) }">
            <p>{{ question.text }}</p>
        </a>
    </li>
</template>

<script>

</script>
