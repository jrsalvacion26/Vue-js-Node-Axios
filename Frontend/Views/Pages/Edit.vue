<template>
    <h1>Edit</h1>
    <div class="div" style="display: flex; justify-content:space-between;">
        <router-link :to="{name:'home'}">Home</router-link>
    </div>
    
    
       
        <form @submit.prevent="updateData">
            <h1 v-if="message" style="color:red;">{{ message }}</h1>
            <input type="hidden" v-model="id">
            <input type="text" v-model="fullname">
            <input type="text" v-model="email">
            <input type="text" v-model="password">
            <button type="submit">Submit</button>
          </form>
          
          
        
      
</template>
<script>
    import axios from 'axios';

    export default{
        data() {
            return {
                items:[],
                id: '',
                fullname:'',
                email:'',
                password:'',
                message:''
               
            }
            
        },

       
        created() {
            this.id = this.$route.params.id
            this.fetchData()
        },

        methods: {
            async fetchData(){
                try {
                    const response = await axios.get(`http://localhost:3000/edit/${this.id}`)
                    this.items = response.data
                    this.id = this.items[0].id
                    this.fullname = this.items[0].fullname
                    this.email = this.items[0].email
                    this.password = this.items[0].password

                    return;
                   
                } catch (error) {
                    console.log(error);
                }
            },

            async updateData(){
                if(!this.fullname || !this.email || !this.password){
                this.message = 'Please enter a Data on input';
                this.$router.push({ name: 'edit' });

                setTimeout(() => {
                        this.message = ''
                    }, 2000);
                return;
            }
                        if (this.fullname === this.items[0].fullname && this.email === this.items[0].email && this.password === this.items[0].password) {
                // Set the message to "Please enter new data on the input"
                this.message = 'Please enter new data on the input';
                // Redirect to the edit page
                this.$router.push({ name: 'edit' });

                // Reset the message after 2 seconds
                setTimeout(() => {
                    this.message = '';
                }, 2000);
                return;
                }
                try {
                    const response = await axios.post("http://localhost:3000/update",{
                        id:this.id,
                        fullname: this.fullname,
                        email: this.email,
                        password: this.password
                    })
                    
                    this.message = 'Insert successful';

                    this.$router.push({ name: 'home' });
                } catch (error) {
                    console.error(error);
                }
            }
        },
    }
</script>