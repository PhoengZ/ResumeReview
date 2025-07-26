<script setup lang="ts">
defineEmits(['navigate'])
const items: string[] = ['Home','Upload Resume', 'Review Resume']

</script>
<template>
    <nav class=" sticky top-0 z-50 bg-white shadow-md rounded-b-xl px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center items-center h-16">
            <ul class=" flex space-x-4 sm:space-x-8">
                <li class=" relative text-base sm:text-lg font-medium text-gray-700 py-2 px-3 transition duration-300 ease-in-out cursor-pointer group"  v-for="item in items" :key="item" @click="$emit('navigate',item)">
                   {{item}}
                   <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </li>
            </ul>
        </div>
    </nav>
</template>