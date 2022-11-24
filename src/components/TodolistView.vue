<template>
    <h3>Task list</h3>
    <div class="lists" v-for="data of alltask" :key="data.id">
        
            <div class="list" :class="{'completed':data.done}">
                <h3><span>{{data.id}}</span></h3>
                <h3>{{data.name}},</h3>
                <h3><span>done:</span><small v-if="data.done">yet</small><small v-if="!data.done">Not yet</small></h3>
                <button class="btn-danger" @click="deletetask(data.id)">delete</button>
                <button class="btn-primary" v-if="!data.done" @click="complete(data)">complete</button>   
            </div>
            

        </div>
    

</template>

<script>

import  {mapGetters,mapActions} from 'vuex'


export default{
    data(){
        return{
            newtasks:[],
            
            

        }
    },
    methods:{
       ...mapActions(["getalltodo","deletetask","completetask"]),

    complete(alltask){
        const updatetask={id:alltask.id,name:alltask.name,done:!alltask.done}
        this.completetask(updatetask)

    }

       

       
        
    },
        
    computed:{

       ...mapGetters(['alltask'])

    },
    created(){
        this.getalltodo()
    }    

    }

    

    

</script>

<style scoped>
.list{
    
    display: flex;
    justify-content:flex-start;
    gap: 30px;
    color: white;
    overflow: hidden;
   
    align-items: center;
     
   background-color:green;
   padding: 10px;
   border: 0;
   border-radius: 10px;
}
.completed{
    background-color:cornflowerblue;
}
.btn-primary{
    background-color: blue;
}
.btn-danger{
    background-color: brown;
}


.lists{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 40px;
  
    
}

</style>

