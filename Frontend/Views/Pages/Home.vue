<template>
   
    <div class="divs">
        <h1>home</h1>
        <div class="link">
            <router-link :to="{name:'home'}">Home</router-link>
            <router-link
            v-for="item in items"
            :key="item.id"
            :to="{ name: 'edit', params: { id: item.id } }"
          >
            Edit
          </router-link>
        </div>
        
    </div>
   
    <Retrieve/>
</template>
<script>
import Retrieve from '../src/components/retrive.vue'


export default {
  components: {
    Retrieve,
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style scoped>
    .divs{
       
        display: flex; 
        
        
        align-items: center;
        flex-direction: column;
        justify-content:space-between;
    }

    .link{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
</style>