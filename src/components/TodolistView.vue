<template>
    <h3>Task list</h3>
    <div class="lists" v-for="data of alltask" :key="data.id">
            <div class="list">
                <h3><span>{{data.id}}</span></h3>
                <h3><span>taskname:</span>{{data.name}},</h3>
                <h3><span>done:</span><small v-if="data.done">yet</small><small v-if="!data.done">Not yet</small></h3>
                <button class="btn-danger">delete</button>
                <button class="btn-primary" v-if="!data.done" @click="complete(data.id)">complete</button>   
            </div>
            

        </div>
    

</template>

<script>

import  {mapGetters,mapActions} from 'vuex'


export default{
    data(){
        return{
            newtasks:[]
        }
    },
    methods:{
       ...mapActions(["getalltodo","deletetask","completetask"])

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
   align-items: center;
}
.notdone{
    background-color: brown;
}
.btn-primary{
    background-color: blue;
}
.btn-danger{
    background-color: brown;
}
button{
    background-color: crimson;
    
    border: 0;
    padding: 10px 20px;
    
    border-radius: 20px;
    color: white;
  
}

</style>

