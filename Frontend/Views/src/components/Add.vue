<template>
    <div class="form">
       
        <div class="forms">
            
            <form @submit.prevent="insertData">
                <h1 v-if="message" style="color:red;">{{ message }}</h1>
                <br>
                <label for="text">Fullname:</label>
                <input type="text" v-model="fullname" />
                <label for="text">Email:</label>
                <input type="text" v-model="email" />
                <label for="text">Password:</label>
                <input type="text" v-model="password" />
                <br>
                <button type="submit">Submit</button>
            </form>
             
        </div>
        
       
    </div>
    
</template>

<script>
import axios from 'axios';


export default{
    name:'Add',
    prop:{
        addData:{
            type:Object,
            required:true
        }
    },
    data() {
        return {
            fullname:'',
            email:'',
            password:'',
            message:''
        }
    },
  

    methods: {
        async insertData(){
            if(!this.fullname || !this.email || !this.password){
                this.message = 'Please enter a Data on input';
                setTimeout(() => {
                        this.message = ''
                    }, 2000);
                return;
            }

            try{
                const response = await axios.post('http://localhost:3000/index', {
                    fullname: this.fullname,
                    email: this.email,
                    password: this.password
                });
                this.message = 'Insert successful';
               setTimeout(() => {
                this.$emit('add', {
                    
                    name: this.fullname,
                    email: this.email,
                    password: this.password
                })  
               }, 100);
                setTimeout(() => {
                this.message = ''
                }, 1000);
                
                this.clearForm()
            }catch{
                if(fullname && email && password === null){
                    this.message = 'Empty';
                        setTimeout(() => {
                        this.message = ''
                    }, 2000);
                    
                }
                console.error(error);
            }
        },
        clearForm() {
            // reset form values
            this.fullname = ''
            this.email = ''
            this.password = ''
            }
    },

}
</script>

<style scoped>
    .form{
        display: flex;
        flex-direction: column;
    }
    .forms{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid red;
        width: 45%;
        gap: 1rem;
    }
</style>