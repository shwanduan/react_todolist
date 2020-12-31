let state = {
    // todos:[
    //     {id:0,title:'今天天气不错',isFinished:false},
    //     {id:1,title:'可以学习了',isFinished:true},
    // ]
    todos:localStorage.todos?JSON.parse(localStorage.todos):[]
}
export default state