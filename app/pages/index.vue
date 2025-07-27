<script setup lang="ts">
import { IconDocument } from '#components';
import BaseResponse from '~/components/ฺBaseResponse.vue';
import { getResponseFromApi } from '~/repositories/getResponseFromapi';
useHead({
  title:'Resume Review'
})

const file = ref<File | null>(null)
const items = ref<string[]>(['Software Development', 'Data Science', 'Design', 'Marketing', 'Sales', 'Customer Support', 'Project Management', 'Human Resources'])
const checkboxs = ref<string[]>([])
const promptText = ref<string>("")
const error = ref<string>("")
const err = ref<boolean>(false)
const result = ref<string>("")
const isShow = ref<boolean>(false)
const handleFileChange = (event: Event):void=>{
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0){
    const selectedFile = target.files[0] ? target.files[0] : null;
    file.value = selectedFile
    console.log(file.value?.name);
  }else{
    error.value = "Please select a PDF file before"
  }
}
const handleReview = async()=>{
  if (!file.value){
    error.value = "Please select a PDF file before"
    err.value = true
  }else{
    const base64 = await fileToBase64(file.value)
    isShow.value = true
    result.value = "In progress..."
    const response = await getResponseFromApi(promptText.value, base64, checkboxs.value)
    result.value = response
    isShow.value = false
    err.value = false
  }
}
watch(file, (newval, oldval) => {
  if (newval && newval.type !== 'application/pdf'){
    error.value = "Only PDF files are accepted"
    file.value = null
  }else{
    error.value = ""
  }
})
</script>
<template>
  <BaseResponse v-if="isShow" :result="result" :err="err" class=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></BaseResponse>
  <div class=" relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-16 flex flex-col items-center justify-start gap-10">
    <h1 id="Home" class=" text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight tracking-tight text-gray-800">Review Resume</h1>
    <h2 class=" text-center text-lg md:text-xl text-gray-600 mt-5">PDF files only</h2>
    <div id="Upload Resume" class="relative flex flex-col justify-center items-center gap-6 border-4 border-gray-300 p-8 md:p-12 w-fit mx-auto rounded-2xl border-dashed mt-10  max-w-lg">
      <icon-uparrow class="absolute top-[-25px]"/>
      <p class="text-gray-700 text-lg font-semibold">Accepted: PDF files only</p>
      <input type="file" accept=".pdf" id="file-upload" class="hidden" @change="handleFileChange">
      <label for="file-upload" class=" bg-blue-400 p-4 rounded-xl text-white hover:bg-blue-500 hover:scale-105 transition duration-200 hover:cursor-pointer">Choose PDF files</label>
      <div v-if="file" class="flex items-center gap-2 mt-4 text-gray-700 text-md">
        <IconDocument class="text-blue-500 text-2xl"/>
        <span>{{ file.name }}</span>
      </div>
      <p v-if="error" class="text-red-500 text-sm font-bold">
        {{error}}
      </p>
      <IconDocument class="absolute bottom-[-12px] right-0"/>
    </div>
    <div class=" bg-white mx-4 md:mx-10 p-6 md:p-12 rounded-3xl mt-8 flex flex-col gap-8 border-4 border-gray-400 border-dashed max-w-6xl w-full">
      <h2 class="text-center text-3xl md:text-4xl font-bold text-gray-800">Review Options</h2>
      <div class="flex flex-col gap-5">
        <h3 class="text-center text-xl font-semibold text-gray-700">Area of Work</h3>
        <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          <li v-for="item in items" :key="item" class="flex flex-col items-center justify-between gap-3 bg-gray-50 rounded-xl p-4 w-full h-32 border border-gray-200 hover:shadow-md transition duration-200 cursor-pointer" :class="{ 'ring-2 ring-blue-400 shadow-md': checkboxs.includes(item) }">
            <label :for="'checkbox-' + item" class="text-center text-sm font-medium text-gray-700 flex-grow flex items-center justify-center">{{item}}</label>
            <input type="checkbox" :id="'checkbox-' + item" class="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-400" v-model="checkboxs" :value="item">
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-center text-xl font-semibold text-gray-700">What would you like to pay special attention to?</h3>
        <textarea v-model="promptText" placeholder="e.g., 'Ensure my project descriptions are impactful,' or 'Check for strong action verbs.'" class="bg-gray-100 rounded-xl border-2 border-gray-300 p-4 h-32 md:h-40 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 text-gray-800 resize-y"></textarea>
      </div>
      <button @click="handleReview" class="bg-blue-500 rounded-full text-center text-xl font-bold text-white w-fit px-10 py-4 mx-auto shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:cursor-pointer">
        Get My Resume Review
      </button>
    </div>
    <section id="Review Result" class="mx-4 md:mx-10 bg-white rounded-3xl shadow-xl border-2 border-dashed border-gray-300 p-6 md:p-12 mt-8 flex flex-col gap-6 max-w-4xl w-full">
      <h2 class="text-center text-3xl md:text-4xl font-bold text-gray-800">Review Result</h2>
      <textarea readonly :value="result === '' ? `Upload your resume and click Get My Resume Review to see the analysis here.` : result" class="bg-gray-100 rounded-xl border-2 border-gray-300 p-4 h-40 md:h-60 focus:outline-none text-gray-800 resize-y"></textarea>
    </section>
  </div>
</template>