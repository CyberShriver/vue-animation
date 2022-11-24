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
    async getlist({commit}) {
        try {
           
               const response=await axios.get(state.url)
                commit('GETLIST',response.data)
            }
    
            
        catch (error) {
            console.log(error)
            
        }
    
        }

        

    },
    getters:{

    },

})