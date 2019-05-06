(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),s=n.n(i),o=(n(14),n(1)),c=n(2),l=n(4),m=n(3),h=n(5),u=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).convertTimeFormat=function(e){var t=Math.floor(e/60),n=e%60,a=t<10?"0".concat(t):"".concat(t),r=n<10?"0".concat(n):"".concat(n);return"".concat(a,":").concat(r)},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.isOnBreak?"Break":"Session",t=this.props.timeRemaining;return r.a.createElement("div",{id:"timer-container"},r.a.createElement("div",{id:"timer-label"},r.a.createElement("h3",null,e)),r.a.createElement("div",{id:"time-left"},this.convertTimeFormat(t)),r.a.createElement("audio",{id:"beep",preload:"auto",src:"./audio/BeepSound.wav"}))}}]),t}(a.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.isPaused?"Start ":"Stop ",t=(this.props.isPaused?"far fa-play-circle":"far fa-stop-circle")+" btn-icon",n=this.props.controlMethods,a=n.togglePause,i=n.reset;return r.a.createElement("div",{id:"timer-controls"},r.a.createElement("button",{className:"timer-control-button",id:"start_stop",onClick:a},e,r.a.createElement("i",{className:t})),r.a.createElement("button",{className:"timer-control-button",id:"reset",onClick:i},"Reset ",r.a.createElement("i",{className:"fa fa-sync btn-icon"})))}}]),t}(a.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.controlMethods,t=e.increment,n=e.decrement;return r.a.createElement("div",{className:"length-control-container",id:"session-controls"},r.a.createElement("h3",{id:"session-label"},"Session Length"),r.a.createElement("div",{className:"control arrow-control",id:"session-decrement",onClick:n},r.a.createElement("i",{className:"fa fa-arrow-down"})),r.a.createElement("div",{className:"control",id:"session-length"},this.props.sessionLength),r.a.createElement("div",{className:"control arrow-control",id:"session-increment",onClick:t},r.a.createElement("i",{className:"fa fa-arrow-up"})))}}]),t}(a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.controlMethods,t=e.increment,n=e.decrement;return r.a.createElement("div",{className:"length-control-container",id:"break-controls"},r.a.createElement("h3",{id:"break-label"},"Break Length"),r.a.createElement("div",{className:"control arrow-control",id:"break-decrement",onClick:n},r.a.createElement("i",{className:"fa fa-arrow-down"})),r.a.createElement("div",{className:"control",id:"break-length"},this.props.breakLength),r.a.createElement("div",{className:"control arrow-control",id:"break-increment",onClick:t},r.a.createElement("i",{className:"fa fa-arrow-up"})))}}]),t}(a.Component),b=25,k=5,f=1,v=60,E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).tick=function(){n.state.isPaused||n.setState({timeRemaining:n.state.timeRemaining-1})},n.reset=function(){n.beepClip.pause(),n.beepClip.currentTime=0,n.setState({sessionLength:b,breakLength:k,timeRemaining:60*b,isOnBreak:!1,isPaused:!0})},n.toggleBreak=function(){var e=!n.state.isOnBreak,t=60*(e?n.state.breakLength:n.state.sessionLength);n.setState({isOnBreak:e,timeRemaining:t})},n.togglePause=function(){var e=!n.state.isPaused;n.setState({isPaused:e})},n.timerControlMethods={reset:n.reset,togglePause:n.togglePause},n.incrementSessionLength=function(){var e=Math.min(n.state.sessionLength+1,v);n.updateSessionLength(e)},n.decrementSessionLength=function(){var e=Math.max(n.state.sessionLength-1,f);n.updateSessionLength(e)},n.updateSessionLength=function(e){n.state.isPaused&&(n.setState({sessionLength:e}),n.state.isOnBreak||n.setState({timeRemaining:60*e}))},n.incrementBreakLength=function(){var e=Math.min(n.state.breakLength+1,v);n.updateBreakLength(e)},n.decrementBreakLength=function(){var e=Math.max(n.state.breakLength-1,f);n.updateBreakLength(e)},n.updateBreakLength=function(e){n.state.isPaused&&(n.setState({breakLength:e}),n.state.isOnBreak&&n.setState({timeRemaining:60*e}))},n.sessionMethods={increment:n.incrementSessionLength,decrement:n.decrementSessionLength},n.breakMethods={increment:n.incrementBreakLength,decrement:n.decrementBreakLength},n.state={sessionLength:b,breakLength:k,timeRemaining:60*b,isOnBreak:!1,isPaused:!0},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.beepClip=document.querySelector("#beep"),this.timer=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"componentWillUpdate",value:function(){this.state.timeRemaining<=0?this.toggleBreak():1===this.state.timeRemaining&&this.beepClip.play()}},{key:"render",value:function(){var e=this.state.timeRemaining;return r.a.createElement("div",{id:"app-container"},r.a.createElement("div",{id:"app-header"},r.a.createElement("h1",null,"Pomodoro Clock")),r.a.createElement(u,{timeRemaining:e,isOnBreak:this.state.isOnBreak}),r.a.createElement("div",{id:"length-controls"},r.a.createElement(g,{breakLength:this.state.breakLength,controlMethods:this.breakMethods}),r.a.createElement(p,{sessionLength:this.state.sessionLength,controlMethods:this.sessionMethods})),r.a.createElement(d,{isPaused:this.state.isPaused,controlMethods:this.timerControlMethods}))}}]),t}(a.Component);s.a.render(r.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.88c86903.chunk.js.map