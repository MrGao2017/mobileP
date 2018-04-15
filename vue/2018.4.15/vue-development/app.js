//存储localstorge中的数据
var store = {
    save(key,value){   //保存
        localStorage.setItem(key,JSON.stringify(value))
    },
    fetch(key){     //获取
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}
// var lists = [
//     {
//         title:'吃饭，睡觉',
//         isChecked:false
//     },
//     {
//         title:'吃饭，睡觉2',
//         isChecked:true
//     }       
// ]
var lists = store.fetch('miaov-class')

//过滤的时候3中情况all unfinshed finshed
var filter = {
    all:function(lists){
        return lists
    },
    finishied:function(lists){
        return lists.filter(function(item){
            return item.isChecked
        })
    },
    unfinishied:function(lists){
        return lists.filter(function(item){
            return !item.isChecked
        })
    }
}

var vm = new Vue({
    el:'.main',
    data:{
        list:lists,
        msg:'',
        edtorTodos:'',
        edtorBefore:'',
        visibility:'all'   //通过这个属性值的变化对数据进行筛选
    },
    watch: {
        // list:function(){   //监控list属性当这个属性对应的值发生变化执行函数
        //     store.save('miaov-class',this.list)
        // }
        list:{
            handler:function(){
                store.save('miaov-class',this.list)
            },
            deep:true
        }
    },
    computed: {
        noCheckLength(){
            return this.list.filter(function(item){
                return !item.isChecked
            }).length
        },
        filteredList:function(){
            

            
           //找到了过滤函数，就返回过滤后的数据；如果没有返回所有数据
            return filter[this.visibility]?filter[this.visibility](this.list):this.list
        }
       
       
    },
    methods: {
        addTodo(){    //添加
            this.list.push({
                title:this.msg,
                isChecked:false
            })
            this.todo = ''
        },
        removeTodo(todo){    //移除
            
            var index = this.list.indexOf(todo);
            this.list.splice(index,1)
            
        },
        edtorTodo(todo){ //编辑
            this.edtorBefore = todo.title
            this.edtorTodos = todo
        },
        edtorTodoed(todo){
            console.log(1)
            this.edtorTodos = ''

        },
        cancelTodo(todo){       //清楚
            todo.title = this.edtorBefore
            this.edtorBefore = ''
            this.edtorTodos = ''
        }
    },
    directives: { 
        'focus':{
            updated (el,binding) {
                if(binding.value){
                     el.focus()
                }
            }
        }
     }
})
function watchHashchange(){
    var hash = window.location.hash.slice(1)
    vm.visibility = hash
    
}
watchHashchange();

window.addEventListener('hashchange',watchHashchange)