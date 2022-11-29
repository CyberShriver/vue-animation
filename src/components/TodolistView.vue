<template>
    <h3>Task list</h3>
    <div class="lists" v-for="data of alltask" :key="data.id">
        
            <div class="list" :class="{'completed':data.done}">
                <h4>{{data.name}}</h4>
            <div class="svg">
               <font-awesome-icon icon="fa-solid fa-trash" class="trash" @click="deleteanytask(data.id)"/>
               <font-awesome-icon icon="fa-solid fa-check" class="complete" v-if="!data.done" @click="complete(data)" />
            </div>      
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
        const updatetask={id:alltask.id,name:alltask.name,done:true}
        this.completetask(updatetask)
        this.getalltodo()
        
   


    },
    deleteanytask(idtask){
        this.deletetask(idtask).then(this.getalltodo())
        

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
    justify-content:space-around;
    gap: 20px;
    align-items: center;
    width: 40vh;
    padding: 10px;
    color: white;
    overflow: hidden;
 background-color:darkblue;
   
   border-radius: 10px;
}
svg{
    padding-left: 20px;
    font-size: 30px;
    
}
.trash{
    color: brown;
}
.complete{
    color:bisque;
}

.completed{
    background-color:cadetblue;
}

.btn-primary{
    background-color: blue;
    

}
.btn-danger{
    background-color: brown;
}


.lists{
    display: flex;
    justify-content:flex-start;
    text-align: center;
    margin:10px 20px;
    
}

</style>

