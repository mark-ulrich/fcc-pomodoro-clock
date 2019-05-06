(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),s=n.n(r),o=(n(14),n(1)),c=n(2),l=n(4),m=n(3),h=n(5),u=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).convertTimeFormat=function(e){var t=Math.floor(e/60),n=e%60,a=t<10?"0".concat(t):"".concat(t),i=n<10?"0".concat(n):"".concat(n);return"".concat(a,":").concat(i)},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=document.querySelector("#time-left");this.props.timeRemaining<60*this.props.warningThreshold?e.classList.add("warning"):e.classList.contains("warning")&&e.classList.remove("warning")}},{key:"render",value:function(){var e=this.props.isOnBreak?"Break":"Session",t=this.props.timeRemaining;return i.a.createElement("div",{id:"timer-container"},i.a.createElement("div",{id:"timer-label"},i.a.createElement("h3",null,e)),i.a.createElement("div",{id:"time-left"},this.convertTimeFormat(t)),i.a.createElement("audio",{id:"beep",preload:"auto",src:"./audio/BeepSound.wav"}))}}]),t}(a.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.isPaused?"Start ":"Stop ",t=(this.props.isPaused?"far fa-play-circle":"far fa-stop-circle")+" btn-icon",n=this.props.controlMethods,a=n.togglePause,r=n.reset;return i.a.createElement("div",{id:"timer-controls"},i.a.createElement("button",{className:"timer-control-button",id:"start_stop",onClick:a},e,i.a.createElement("i",{className:t})),i.a.createElement("button",{className:"timer-control-button",id:"reset",onClick:r},"Reset ",i.a.createElement("i",{className:"fa fa-sync btn-icon"})))}}]),t}(a.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.controlMethods,t=e.increment,n=e.decrement;return i.a.createElement("div",{className:"length-control-container",id:"session-controls"},i.a.createElement("h3",{id:"session-label"},"Session Length"),i.a.createElement("div",{className:"control arrow-control",id:"session-decrement",onClick:n},i.a.createElement("i",{className:"fa fa-arrow-down"})),i.a.createElement("div",{className:"control",id:"session-length"},this.props.sessionLength),i.a.createElement("div",{className:"control arrow-control",id:"session-increment",onClick:t},i.a.createElement("i",{className:"fa fa-arrow-up"})))}}]),t}(a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.controlMethods,t=e.increment,n=e.decrement;return i.a.createElement("div",{className:"length-control-container",id:"break-controls"},i.a.createElement("h3",{id:"break-label"},"Break Length"),i.a.createElement("div",{className:"control arrow-control",id:"break-decrement",onClick:n},i.a.createElement("i",{className:"fa fa-arrow-down"})),i.a.createElement("div",{className:"control",id:"break-length"},this.props.breakLength),i.a.createElement("div",{className:"control arrow-control",id:"break-increment",onClick:t},i.a.createElement("i",{className:"fa fa-arrow-up"})))}}]),t}(a.Component),b=1,k=25,f=5,v=1,L=60,E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).tick=function(){n.state.isPaused||n.setState({timeRemaining:n.state.timeRemaining-1})},n.reset=function(){n.beepClip.pause(),n.beepClip.currentTime=0,n.setState({sessionLength:k,breakLength:f,timeRemaining:60*k,isOnBreak:!1,isPaused:!0})},n.toggleBreak=function(){var e=!n.state.isOnBreak,t=60*(e?n.state.breakLength:n.state.sessionLength);n.setState({isOnBreak:e,timeRemaining:t})},n.togglePause=function(){var e=!n.state.isPaused;n.setState({isPaused:e})},n.timerControlMethods={reset:n.reset,togglePause:n.togglePause},n.incrementSessionLength=function(){var e=Math.min(n.state.sessionLength+1,L);n.updateSessionLength(e)},n.decrementSessionLength=function(){var e=Math.max(n.state.sessionLength-1,v);n.updateSessionLength(e)},n.updateSessionLength=function(e){n.state.isPaused&&(n.setState({sessionLength:e}),n.state.isOnBreak||n.setState({timeRemaining:60*e}))},n.incrementBreakLength=function(){var e=Math.min(n.state.breakLength+1,L);n.updateBreakLength(e)},n.decrementBreakLength=function(){var e=Math.max(n.state.breakLength-1,v);n.updateBreakLength(e)},n.updateBreakLength=function(e){n.state.isPaused&&(n.setState({breakLength:e}),n.state.isOnBreak&&n.setState({timeRemaining:60*e}))},n.sessionMethods={increment:n.incrementSessionLength,decrement:n.decrementSessionLength},n.breakMethods={increment:n.incrementBreakLength,decrement:n.decrementBreakLength},n.warningThreshold=b,n.state={sessionLength:k,breakLength:f,timeRemaining:60*k,isOnBreak:!1,isPaused:!0},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.beepClip=document.querySelector("#beep"),this.timer=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"componentWillUpdate",value:function(){this.state.timeRemaining<=0?this.toggleBreak():1===this.state.timeRemaining&&this.beepClip.play()}},{key:"render",value:function(){var e=this.state.timeRemaining;return i.a.createElement("div",{id:"app-container"},i.a.createElement("div",{id:"app-header"},i.a.createElement("h1",null,"Pomodoro Clock")),i.a.createElement(u,{timeRemaining:e,isOnBreak:this.state.isOnBreak,warningThreshold:this.warningThreshold}),i.a.createElement("div",{id:"length-controls"},i.a.createElement(g,{breakLength:this.state.breakLength,controlMethods:this.breakMethods}),i.a.createElement(p,{sessionLength:this.state.sessionLength,controlMethods:this.sessionMethods})),i.a.createElement(d,{isPaused:this.state.isPaused,controlMethods:this.timerControlMethods}))}}]),t}(a.Component);s.a.render(i.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.afbc1eb7.chunk.js.map