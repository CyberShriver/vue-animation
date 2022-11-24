<template>
    <div class="todolist">
        
        <form >
            <input type="text" v-model="taskname">
            <button type="submit" @click="addtask">Add New task</button>
        </form>
    </div>
    
</template>

<script>
import { mapActions } from 'vuex';

export default{
    
    data(){
        return{
            taskname:''

        }

    },
    
    methods:{
        ...mapActions(['newtask']),

        addtask(e){
            e.preventDefault()
            this.newtask(this.taskname)
            this.taskname=''

        }


    }
    
}
</script>
<style >

button{
    background-color:cornflowerblue;
    border: 0;
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
  
}
form{
    display: block;
    
}
input
{
    display: inline-block;
    width: 30%;
    border-radius: 10px;
    border-color: black;
    position: relative;
    padding: 3px;
    
}
</style>