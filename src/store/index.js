import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state:{

        todolist:[],
        url:'http://localhost:3003/taskstodo'

    },
    mutations:{
        //getalltoto
        GETLIST(state,alltodo)
        {
            state.todolist=alltodo
        }
        ,//addnewto
        ADDNEWTODO(state,newtodo){
            state.todolist.unshift(newtodo)
        },
        //completetodo
        COMPLTETETODO(state,todotocomplete){
            const indextodo=state.todolist.findIndex((todo)=>{todo.id==todotocomplete.id})
            if(indextodo!== -1)
            {
                state.todolist.splice(indextodo,1,todotocomplete)
            }
               
        },
        //deletetodo
        DELETETODO(state,id){
            this.state.todolist=state.todolist.filter((todo)=>{
                todo.id!=id
            })
        }
    },
    actions:{
    async getalltodo({commit}) {
        try {
           const response=await axios.get(this.state.url)
            commit('GETLIST',response.data)
        }catch (error) {
            console.log(error)
            
        }
    
        },
        async newtask({commit},newtodo){
            try {
                const response=await axios.post(this.state.url,{name:newtodo,done:false})
                commit('ADDNEWTODO',response.data)

                
            } catch (error) {
                console.log(error)
                
            }
        },
        async deletetask({commit},idtask){
            try {
                await axios.delete(`${this.state.url}/${idtask}`)
                commit('DELETETODO',idtask)

                
            } catch (error) {
                console.log(error)
                
            }
        },
        async completetask({commit},updatetask){
            try {
                const response=await axios.patch(`${this.state.url}/${updatetask.id}`,updatetask)
                commit('COMPLTETETODO',response.data)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        
    
    

    },
    getters:{
        alltask:state=>state.todolist

    },

})