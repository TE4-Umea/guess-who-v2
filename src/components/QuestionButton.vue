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

<style>
#myUL li a {
    border: 1px solid #ddd;
    background-color: #28282b;

    margin-top: -1px;
    padding: 12px;
    padding-right: 50px;

    text-decoration: none;
    font-size: 18px;
    /*Seth was here*/

    display: block;
    size: 100%;
}

#myUL li:hover {
    background-color: #505050;
}

a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}

a:hover {
    color: #535bf2;
}
</style>
