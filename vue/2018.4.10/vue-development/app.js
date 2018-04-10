var list = [
    {
        title:'吃饭，睡觉',
        isChecked:false
    },
    {
        title:"妙味课堂",
        isChecked:true
    }
];
new Vue({
    el:'.main',
    data:{
        list:list,
        todo:'',
        edtorTodos:'',
        beforeTitle:''
    },
    computed: {
        noCheckLength:function(){
            return this.list.filter(function(item){
                return !item.isChecked
            }).length 
        }
    },

    
    methods: {
        addTodo(){    //添加
           this.list.push({
              title:this.todo,
              isChecked:false
           })
           this.todo = ''
        },
        deleteTodo(todo){   //删除
           
            var index = this.list.indexOf(todo);
            this.list.splice(index,1)
        },
        edtorTodo(todo){     //编辑
            this.beforeTitle = todo.title;
            this.edtorTodos = todo
        },
        edtorTodoed(todo){     //编辑完成
            this.edtorTodos = ''
        },
        cancelTodo(todo){
            console.log(1)
            todo.title = this.beforeTitle ;
            this.beforeTitle = '';
            this.edtorTodos = ''
        }
    },
   directives: {
       'focus':{
            update (el,binding) {
               if(binding.value){
                el.focus()
               }
                 
            }
       }
      
   }
})