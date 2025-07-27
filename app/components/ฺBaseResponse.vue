<script setup lang="ts">
defineProps<{
    result?: string
    err?: boolean
}>()
</script>

<template>
    <div
        class="w-80 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out z-50"
        :class="err ? 'bg-red-50 border border-red-300' : 'bg-green-50 border border-green-300'"
    >
        <div class="flex items-center mb-3">
            <template v-if="err">
                <svg class="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <h2 class="text-red-700 text-xl font-bold">Error</h2>
            </template>
            <template v-else>
                <svg class="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h2 class="text-green-700 text-xl font-bold">Processing</h2>
            </template>
        </div>
        <p :class="err ? 'text-red-600' : 'text-green-600'" class="text-base text-center leading-relaxed">
            {{ result }}
        </p>
    </div>
</template>
