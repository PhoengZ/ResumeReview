<script setup lang="ts">
import { NuxtLayout, NuxtPage } from '#components';
function handleNavigate(id:string):void{
  nextTick(()=>{
    const element = document.getElementById(id)
    if (element){
      element.scrollIntoView({behavior:'smooth', block:'center'})
    }else{
      console.log(`Element with id ${id} not found`);
    }
  })
}
</script>

<template>
  <div>
    <NuxtLayout @navigate="handleNavigate">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
