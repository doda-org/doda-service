(this["webpackJsonpyoutube-dl-webui"]=this["webpackJsonpyoutube-dl-webui"]||[]).push([[0],{24:function(e,t,a){e.exports=a(59)},29:function(e,t,a){},30:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),i=a.n(r),c=(a(29),a(1)),s=a(3),o=a(5),u=a(4),d=(a(30),a(7)),m=a.n(d),v=function e(){Object(c.a)(this,e),this.api_host_dev="localhost:9001",this.getApiHost=function(){return window.location.protocol+"//"+window.location.host.replace("3000","5000")},this.getEnv=function(){return"dev"}},h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item;return l.a.createElement("div",{key:e.id,className:"divTableRow"},l.a.createElement("div",{className:"divTableCell"},e.status," "),l.a.createElement("div",{className:"divTableCell"},e.title),l.a.createElement("div",{className:"divTableCell"},e.progress,"% "))}}]),a}(n.Component),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"divTable"},l.a.createElement("div",{className:"divTableHeading"},l.a.createElement("div",{className:"divTableHead"},"Status"),l.a.createElement("div",{className:"divTableHead"},"Title"),l.a.createElement("div",{className:"divTableHead"},"Progress")),l.a.createElement("div",{className:"divTableBody"},this.props.items.map((function(e){return l.a.createElement(h,{key:e.id,item:e})}))))}}]),a}(n.Component),b=a(6),E=a.n(b),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.request;return l.a.createElement("div",{key:t.id,className:"divTableRow"},l.a.createElement("div",{className:"divTableCell"},l.a.createElement("div",null,t.url),l.a.createElement("div",null,l.a.createElement(p,{items:t.items}))),l.a.createElement("div",{className:"divTableCell"},t.avgPrg),l.a.createElement("div",{className:"divTableCell"},l.a.createElement("button",{value:t.id,onClick:function(t){return e.setState({isModalOpen:!0})}},l.a.createElement("img",{width:"24px",src:"/delete.png"})),l.a.createElement(E.a,{isOpen:this.state.isModalOpen,style:{overlay:{backgroundColor:"grey"},content:{border:1,width:"40%",height:"20%",left:"30%",top:"40%"}}},l.a.createElement("h2",null,"Confirm Deletion"),l.a.createElement("div",null,"Are you sure to delete the request '",t.url,"'"),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.props.onDelete(t.id)}},"Submit"),"\xa0",l.a.createElement("button",{onClick:function(){return e.setState({isModalOpen:!1})}},"Cancel")))))}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"divTable"},l.a.createElement("div",{className:"divTableHeading"},l.a.createElement("div",{className:"divTableHead"},"URL"),l.a.createElement("div",{className:"divTableHead"},"Progress"),l.a.createElement("div",{className:"divTableHead"},"Actions")),l.a.createElement("div",{className:"divTableBody"},this.props.requests.map((function(t){return l.a.createElement(f,{key:t.id,request:t,onDelete:function(t){return e.props.onDelete(t)}})}))))}}]),a}(n.Component),O=a(23),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){n.props.onAdd(n.state),n.setState({isModalOpen:!1})},n.handleInputChange=function(e){var t=e.target,a=t.name,l="schedule"===a?!t.checked:t.value;console.log("handling the onChange event of ".concat(a," changing to ").concat(l)),n.setState(Object(O.a)({},a,l))},n.state={isModalOpen:!1,url:"",schedule:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;E.a.setAppElement("#root");var t=this.state,a=t.url,n=t.schedule;return l.a.createElement("header",{className:"App-header"},l.a.createElement("div",null,l.a.createElement(E.a,{isOpen:this.state.isModalOpen,style:{overlay:{backgroundColor:"grey"},content:{border:1,width:"40%",height:"20%",left:"30%",top:"40%"}}},l.a.createElement("h2",null,"New Download Request"),l.a.createElement("div",null,"URL: ",l.a.createElement("input",{type:"text",name:"url",value:a,onChange:this.handleInputChange,style:{width:"92%"}})),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",null,l.a.createElement("input",{name:"schedule",type:"checkbox",checked:!n,onChange:this.handleInputChange}),"Download during off peak hours"),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.handleSubmit},"Submit"),"\xa0",l.a.createElement("button",{onClick:function(){return e.setState({isModalOpen:!1})}},"Cancel")))),l.a.createElement("div",{className:"divTable"},l.a.createElement("div",{className:"divTableRow"},l.a.createElement("div",{className:"divTableCell"},l.a.createElement("button",{onClick:function(){return e.setState({isModalOpen:!0})},variant:"contained",color:"primary"},l.a.createElement("img",{width:"24px",src:"/add.png"}))))))}}]),a}(n.Component),C=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).baseUrl=(new v).getApiHost(),e.deleteRequest=function(t){console.log("delete requested",t),m.a.delete(e.baseUrl+"/api/requests/"+t).then((function(t){e.getRequests()}))},e.addRequest=function(t){m.a.post(e.baseUrl+"/api/requests",t).then((function(t){console.log("submitted"),e.getRequests()}))},e.avgPrg=function(e){var t=0;return e.items.forEach((function(e){return t+=e.progress})),null==e.items||0===e.items.length?0:t/e.items.length},e.getRequests=function(){m.a.get(e.baseUrl+"/api/requests").then((function(t){var a=t.data;a.map((function(t){return t.avgPrg=e.avgPrg(t),t})),e.setState({requests:a})}))},e.state={requests:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getRequests(),setInterval(this.getRequests,5e3)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(y,{onAdd:function(t){return e.addRequest(t)}}),l.a.createElement(g,{requests:this.state.requests,onDelete:function(t){return e.deleteRequest(t)}}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.88079730.chunk.js.map