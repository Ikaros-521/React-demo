import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var myStyle = {color:'red',textAlign:'center'}

class Name extends React.Component {
  render() {
    return <h1 style={myStyle}>网站名称：{this.props.name}</h1>;
  }
}
class Url extends React.Component {
  render() {
    return <h1>网站地址：{this.props.url}</h1>;
  }
}
class Nickname extends React.Component {
  render() {
    return <h1>网站地址：{this.props.nickname}</h1>;
  }
}

function App(props) {
    return (
        <div>
            <Name name="test"/>
            <Url  url={props.url}/>
            <Nickname  nickname={props.nickname}/>
        </div>
    );
}

// 多个属性的传入注意不用逗号或分号隔开而是空格符隔开:
ReactDOM.render(
  <App name={"abc"} url={"http://www..com"} nickname={"abc"}/>,
  document.getElementById('example')
);