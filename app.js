import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  },
  created: function(){
  	window.onbeforeunload=()=>{
  		let dataString=JSON.stringify(this.todoList)
  		window.localStorage.setItem('myTodos',dataString)

      let dataString1=JSON.stringify(this.newTodo)
      window.localStorage.setItem('myTodos1',dataString1)
  	}

  	let oldDataString=window.localStorage.getItem('myTodos')
  	let oldData=JSON.parse(oldDataString)
  	this.todoList=oldData||[]

    let oldDataString1=window.localStorage.getItem('myTodos1')
    let oldData1=JSON.parse(oldDataString1)
    this.newTodo=oldData1||''
  },
  methods: {
    addTodo: function(){
      this.todoList.push({
        title: this.newTodo,
        createdAt: this.createTime(),
        done: false
      })
      this.newTodo = ''
    },
    removeTodo: function(todo){
    	let index=this.todoList.indexOf(todo)
    	this.todoList.splice(index,1)
    },
    createTime: function(){
        function set(t){
          if(t<10)
            return ('0'+t)
          else
            return t
        }
        let time=new Date();
        let year=time.getFullYear(),
            month=time.getMonth()+1,
            date=time.getDate(),
            hour=time.getHours(),
            minute=time.getMinutes(),
            second=time.getSeconds();
        return (set(year)+'年'+set(month)+'月'+set(date)+'日 '+set(hour)+'时'+set(minute)+'分'+set(second)+'秒');
    }
  }
})   