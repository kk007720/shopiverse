<template>
    <div>
        {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    </div>
</template>

<script setup>
    const counter = useCounter();
    console.log('counterxxx', counter.value);
    watch(counter, (value) => {
        console.log('value', value);
    });
</script>

<style lang="scss" scoped>

</style>