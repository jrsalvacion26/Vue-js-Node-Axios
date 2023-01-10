<template>
    <h1>retrieving</h1>
    

    
    <h1 v-if="message" style="color:red;">{{ message }}</h1>
    <div class="form_input">
      <Add @add="addData" />
    </div>
      <div class="table"  style="margin-top:5rem;">
        <table class="table" >
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Fullname</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody v-for="item in data" :key="item.id">
              <tr>
                <th scope="row">{{ item.id }}</th>
                <td style="text-align: center; vertical-align: middle;">{{ item.fullname }}</td>
                <td style="text-align: center; vertical-align: middle;">{{ item.email }}</td>
                <td style="text-align: center; vertical-align: middle;">{{ item.password }}</td>
                <td style="text-align: center; vertical-align: middle;"> 
                    <button type="submit" @click="deleteData(item.id)">Delete</button>
                    
                    <router-link v-if="typeof item.id  !== 'undefined'" 
                        v-bind:to="{ name: 'edit', params: { id: item.id } }">Edit
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
    </div>

    
</template>

<script>
import axios from 'axios'
import Add from '../components/Add.vue'


export default{
    name:'retrive',
    components:{
      Add
    },
    data(){
        return{
            data:[],

            message:'',
            id:''
        }
    },
    created() {
      this.getData()
    },

    methods: {
      async addData(item) {
        this.data.push({
          id:item.id,
          name: item.name,
          email: item.email,
          password: item.password
    })
        await this.getData()
    },

  async getData() {
    
  
    try {
      const response = await axios.get('http://localhost:3000/index')
                                
      this.data = response.data
      console.log(this.data, "rene");
    } catch (error) {
      console.error(error);

    }
  },

  
  async deleteData(id) {
    try {
      const response = await axios.delete(`http://localhost:3000/delete/${id}`)
      console.log(response, "response");
      this.message = 'User data deleted successfully'
      setTimeout(() => {
        this.message = ''
      }, 2000);
      this.data.splice(this.data.findIndex(item => item.id === id), 1)
    } catch (error) {
      console.error(error.message, "erro")
      this.message = 'An error occurred while deleting the user'
      setTimeout(() => {
        this.message = ''
      }, 2000);
    }
  }
},



}

</script>

<style scoped>

    h1{
        text-align: center;
    }
    .table{
        margin: auto; overflow: auto; height: 30rem; ;
    }
    table{
        min-width:181%
    }
</style>