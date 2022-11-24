import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state:{

        todolist:[]

    },
    mutations:{
        //getalltoto
        getlist(state,alltodo)
        {
            state.todolist=alltodo
        }
        ,//addnewto
        addnewtodo(state,newtodo){
            state.todolist.unshift(newtodo)
        },
        //completetodo
        completetodo(state,todotocomplete){
            const indextodo=state.todolist.findIndex((todo)=>{todo.id==todotocomplete.id})
            if(indextodo!== -1)
            {
                state.todolist.splice(indextodo,1,todotocomplete)
            }
               
        },
        //deletetodo
        delete(state,id){
            this.state.todolist=state.todolist.filter((todo)=>{
                todo.id!=id
            })
        }



    },
    actions:{
        

    },
    getters:{

    },

})