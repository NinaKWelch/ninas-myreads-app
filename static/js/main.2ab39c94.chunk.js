(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),c=a.n(r),s=a(5),l=a(6),i=a(8),u=a(7),h=a(9),m=a(17),b="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:d},f=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(m.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},k=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(m.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=a(10),E=(a(29),a(11)),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={shelf:"none"},a.changeShelf=function(e){a.setState({shelf:e.target.value}),a.props.updateBookShelf(a.props.book,e.target.value)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({shelf:this.props.book.shelf})}},{key:"render",value:function(){var e=this.props.book,t=this.state.shelf,a={width:128,height:193,backgroundImage:e.imageLinks?"url(".concat(e.imageLinks.thumbnail,")"):""};return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:a}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:t,onChange:this.changeShelf},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors?e.authors.toString():"")))}}]),t}(o.a.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",bookSearch:[]},a.updateQuery=function(e){a.setState({query:e}),e&&k(e).then(function(e){e.length?a.setState({bookSearch:e}):a.setState({bookSearch:[]})})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.query,n=t.bookSearch,r=this.props.updateBookShelf;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(E.b,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:a,onChange:function(t){return e.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},n.map(function(e){return o.a.createElement(y,{key:e.id,book:e,updateBookShelf:r})}))))}}]),t}(o.a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.thisShelf,a=e.books,n=e.updateBookShelf;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},t.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},a.filter(function(e){return e.shelf===t.name}).map(function(e){return o.a.createElement(y,{key:e.id,book:e,updateBookShelf:n})}))))}}]),t}(o.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.updateBookShelf;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,[{title:"Currently Reading",name:"currentlyReading"},{title:"Want to Read",name:"wantToRead"},{title:"Read",name:"read"}].map(function(e){return o.a.createElement(j,{key:e.name,thisShelf:e,books:t,updateBookShelf:a})}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(E.b,{to:"search"},"Add a book")))}}]),t}(o.a.Component),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.updateBookShelf=function(e,t){f(e,t).then(function(){e.shelf=t,a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat([e])}})})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:p}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this,t=this.state.books;return o.a.createElement("div",{className:"app"},o.a.createElement(v.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(S,{books:t,updateBookShelf:e.updateBookShelf})}}),o.a.createElement(v.a,{exact:!0,path:"/",render:function(){return o.a.createElement(g,{books:t,updateBookShelf:e.updateBookShelf})}}))}}]),t}(o.a.Component);a(34);c.a.render(o.a.createElement(E.a,null,o.a.createElement(O,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.2ab39c94.chunk.js.map