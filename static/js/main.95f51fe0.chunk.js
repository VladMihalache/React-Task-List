(this.webpackJsonpsite7reactv222=this.webpackJsonpsite7reactv222||[]).push([[0],{11:function(t,e,o){t.exports=o(19)},18:function(t,e,o){},19:function(t,e,o){"use strict";o.r(e);var s=o(0),a=o.n(s),r=o(8),i=o.n(r),n=o(10),l=o(1),p=o(2),c=o(3),d=o(4),m=function(t){Object(d.a)(o,t);var e=Object(c.a)(o);function o(){return Object(l.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"render",value:function(){return a.a.createElement("div",{className:"titleBox"},a.a.createElement("div",null,a.a.createElement("p",{className:"thisDay"},"18.05.2020"),a.a.createElement("p",{className:"mainTitle"},"Today Tasks")),a.a.createElement("div",{className:"blueCircle"}))}}]),o}(s.Component),h=function(t){Object(d.a)(o,t);var e=Object(c.a)(o);function o(){var t;Object(l.a)(this,o);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).checkCompleted=function(){return{backgroundColor:t.props.todo.completed?"#1AFF00":"#ffffff",border:t.props.todo.completed?"none":"2px solid #D7DBE6"}},t.getLine=function(){return t.props.todo.completed?{backgroundColor:"#1AFF00",boxShadow:"0px 0px 10px 2.5px #1AFF0050",height:t.scrollheight}:{backgroundColor:"#FF006F",boxShadow:"0px 0px 10px 2.5px #FF006F50",height:t.scrollheight}},t.getStyle=function(){return{padding:"10px",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(p.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title,s=t.priority;return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"todoElement"},a.a.createElement("input",{className:"done",style:this.checkCompleted(),type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),a.a.createElement("div",{className:"height"},a.a.createElement("div",{className:"line",style:this.getLine()}),a.a.createElement("div",{className:"text"},a.a.createElement("p",{className:"todoTitle",style:this.getStyle()},o),a.a.createElement("p",{className:"prio"},s))),a.a.createElement("div",{className:"deleteX",onClick:this.props.delTodo.bind(this,e)})))}}]),o}(s.Component),u=function(t){Object(d.a)(o,t);var e=Object(c.a)(o);function o(){return Object(l.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"render",value:function(){var t=this,e=this.props.itemsToShow,o=[];if(0===e)for(var s=0;s<this.props.todos.length;s++)"Very High"===this.props.todos[s].priority&&o.push(this.props.todos[s]);else if(1===e)for(var r=0;r<this.props.todos.length;r++)!1===this.props.todos[r].completed&&"Very High"===this.props.todos[r].priority&&o.push(this.props.todos[r]);else if(2===e)for(var i=0;i<this.props.todos.length;i++)!0===this.props.todos[i].completed&&"Very High"===this.props.todos[i].priority&&o.push(this.props.todos[i]);return o.map((function(e){return a.a.createElement(h,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),o}(s.Component),f=function(t){Object(d.a)(o,t);var e=Object(c.a)(o);function o(){return Object(l.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"render",value:function(){var t=this,e=this.props.itemsToShow,o=[];if(0===e)for(var s=0;s<this.props.todos.length;s++)"High"===this.props.todos[s].priority&&o.push(this.props.todos[s]);else if(1===e)for(var r=0;r<this.props.todos.length;r++)!1===this.props.todos[r].completed&&"High"===this.props.todos[r].priority&&o.push(this.props.todos[r]);else if(2===e)for(var i=0;i<this.props.todos.length;i++)!0===this.props.todos[i].completed&&"High"===this.props.todos[i].priority&&o.push(this.props.todos[i]);return o.map((function(e){return a.a.createElement(h,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),o}(s.Component),y=function(t){Object(d.a)(o,t);var e=Object(c.a)(o);function o(){return Object(l.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"render",value:function(){var t=this,e=this.props.itemsToShow,o=[];if(0===e)for(var s=0;s<this.props.todos.length;s++)"Medium"===this.props.todos[s].priority&&o.push(this.props.todos[s]);else if(1===e)for(var r=0;r<this.props.todos.length;r++)!1===this.props.todos[r].completed&&"Medium"===this.props.todos[r].priority&&o.push(this.props.todos[r]);else if(2===e)for(var i=0;i<this.props.todos.length;i++)!0===this.props.todos[i].completed&&"Medium"===this.props.todos[i].priority&&o.push(this.props.todos[i]);return o.map((function(e){return a.a.createElement(h,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),o}(s.Component),v=function(t){Object(d.a)(o,t);var e=Object(c.a)(o);function o(){return Object(l.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"render",value:function(){var t=this,e=this.props.itemsToShow,o=[];if(0===e)for(var s=0;s<this.props.todos.length;s++)"Low"===this.props.todos[s].priority&&o.push(this.props.todos[s]);else if(1===e)for(var r=0;r<this.props.todos.length;r++)!1===this.props.todos[r].completed&&"Low"===this.props.todos[r].priority&&o.push(this.props.todos[r]);else if(2===e)for(var i=0;i<this.props.todos.length;i++)!0===this.props.todos[i].completed&&"Low"===this.props.todos[i].priority&&o.push(this.props.todos[i]);return o.map((function(e){return a.a.createElement(h,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),o}(s.Component),g=function(t){Object(d.a)(o,t);var e=Object(c.a)(o);function o(){var t;Object(l.a)(this,o);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:"",priority:""},t.extend=function(){document.querySelector(".containerAdd").style.zIndex="5",setTimeout((function(){document.querySelector(".containerAdd").style.opacity="1"}),300)},t.minimize=function(){document.querySelector(".containerAdd").style.opacity="0",setTimeout((function(){document.querySelector(".containerAdd").style.zIndex="-5"}),300)},t.onSubmit=function(e){e.preventDefault(),t.state.title&&t.state.priority&&t.props.addTodo(t.state.title,t.state.priority),t.setState({title:""})},t.onChange=function(e){return t.setState({title:e.target.value})},t.onSelect=function(e){return t.setState({priority:e.target.value})},t}return Object(p.a)(o,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{onClick:this.extend,className:"submitButtonBlue"},a.a.createElement("span",null,"+"),a.a.createElement("input",{className:"addSubmitBlue",type:"submit",value:"Create Task",onClick:this.extend})),a.a.createElement("form",{className:"containerAdd",onSubmit:this.onSubmit},a.a.createElement("div",{className:"create"},a.a.createElement("h1",null,"Create a new task"),a.a.createElement("div",{className:"closeX",onClick:this.minimize})),a.a.createElement("input",{className:"addInput",type:"text",name:"title",onChange:this.onChange,value:this.state.title,placeholder:"Task Name"}),a.a.createElement("p",null,"Priority"),a.a.createElement("div",{className:"radio"},a.a.createElement("input",{type:"radio",name:"priority",value:"Very High",id:"vHigh",className:"option1",onChange:this.onSelect}),a.a.createElement("input",{type:"radio",name:"priority",value:"High",id:"high",className:"option2",onChange:this.onSelect}),a.a.createElement("input",{type:"radio",name:"priority",value:"Medium",id:"medium",className:"option3",onChange:this.onSelect}),a.a.createElement("input",{type:"radio",name:"priority",value:"Low",id:"low",className:"option4",onChange:this.onSelect})),a.a.createElement("input",{className:"submitButton",type:"submit",value:"Add Task"})))}}]),o}(s.Component),b=function(t){Object(d.a)(o,t);var e=Object(c.a)(o);function o(){return Object(l.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"containerBar"},a.a.createElement("button",{onClick:this.props.showAll},"All"),a.a.createElement("button",{onClick:this.props.showUncompleted},"Uncompleted"),a.a.createElement("button",{onClick:this.props.showCompleted},"Completed"),a.a.createElement("button",{onClick:this.props.delCompleted,className:"del"},"Delete Completed")))}}]),o}(s.Component),S=o(9),C=(o(18),function(t){Object(d.a)(o,t);var e=Object(c.a)(o);function o(){var t;Object(l.a)(this,o);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],itemsToShow:0},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))});var o=JSON.parse(localStorage.getItem(e));o.completed=!o.completed,localStorage.setItem(e,JSON.stringify(o))},t.delTodo=function(e){t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))}),localStorage.removeItem(e)},t.addTodo=function(e,o){var s={completed:!1,title:e,priority:o,id:Object(S.v4)()};t.setState({todos:[].concat(Object(n.a)(t.state.todos),[s])}),localStorage.setItem(s.id,JSON.stringify(s)),t.initTheState()},t.showAll=function(){t.setState({itemsToShow:0})},t.showUncompleted=function(){t.setState({itemsToShow:1})},t.showCompleted=function(){t.setState({itemsToShow:2})},t.delCompleted=function(){t.setState({todos:t.state.todos.filter((function(t){return!0!==t.completed}))}),Object.keys(localStorage).forEach((function(t){JSON.parse(localStorage.getItem(t)).completed&&localStorage.removeItem(t)}))},t.initTheState=function(){var e=[];Object.keys(localStorage).forEach((function(t){var o=JSON.parse(localStorage.getItem(t));e.push(o)})),t.setState({todos:e})},t}return Object(p.a)(o,[{key:"render",value:function(){return 0===this.state.todos.length&&this.initTheState(),a.a.createElement("div",{className:"App"},a.a.createElement(m,null),a.a.createElement(b,{showAll:this.showAll,showUncompleted:this.showUncompleted,showCompleted:this.showCompleted,delCompleted:this.delCompleted}),a.a.createElement("div",{className:"todoScroll"},a.a.createElement(u,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo,itemsToShow:this.state.itemsToShow}),a.a.createElement(f,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo,itemsToShow:this.state.itemsToShow}),a.a.createElement(y,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo,itemsToShow:this.state.itemsToShow}),a.a.createElement(v,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo,itemsToShow:this.state.itemsToShow})),a.a.createElement(g,{addTodo:this.addTodo}))}}]),o}(s.Component));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.95f51fe0.chunk.js.map