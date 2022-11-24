<template>
    <div class="todolist">
        <form >
            <input type="text" v-model="taskname">
            <button type="submit" @click="addnewtask">Add New one</button>
        </form>
    </div>
    
</template>

<script>
import axios from 'axios'
const url='http://localhost:3003/taskstodo'
export default{
    
    data(){
        return{

            list:[],
            taskname:'',  
        }

    },
    
    async created(){
        try {
            const response = await axios.get(url);

        this.list = response.data;
 
        } catch (error) {
            console.error(error);
        }
    },
    methods:{
        async addnewtask()
        {
            try {
               const res= await axios.post(url,{
                name:this.taskname
               
            })
            this.list = [...this.todos, res.data];

            this.taskname= "";
                
            } catch (error) {
                console.log(error)
                
            }
        },
        async complete(id) {
 try {
    await axios.patch(`${url}/${id}`, {
      done: true,
    });

    this.list =this.list.map(todo => {
      if (todo.id === id) {
        todo.done = true;
      }

      return todo;
    });
  } catch (e) {
    console.error(e);
  }
},

        
       
    }
    
}
</script>
<style>

.todolist{
   display: inline-block;
   align-items: center;  
}

.lists{
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
    margin-top: 40px;
    background-color: aliceblue;
    
}
</style>