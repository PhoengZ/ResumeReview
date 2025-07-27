<script setup lang="ts">
const emit = defineEmits(['navigate'])
function handleNavigate(id:string):void{
    emit('navigate',id)
}
</script>

<template>
    <BaseNavbar @navigate="handleNavigate"/>
    <main class=" relative">
        <slot/>
    </main>
</template>