import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element1 = <h1 className="foo">Hello, world</h1>;
ReactDOM.render(element1, document.getElementById('example1'));

ReactDOM.render(
  <div>
  <h1>菜鸟教程</h1>
  <h2>欢迎学习 React</h2>
  <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
  {/*注释...*/}
  </div>
  ,
  document.getElementById('example2')
);

ReactDOM.render(
  <div>
    <h1>{1+1}</h1>
  </div>
  ,
  document.getElementById('example4')
);

var i = 1;
ReactDOM.render(
  <div>
    <h1>{i == 1 ? 'True!' : 'False'}</h1>
  </div>
  ,
  document.getElementById('example5')
);

var myStyle = {
  fontSize: 100,
  color: '#FF0000'
};
ReactDOM.render(
 <h1 style = {myStyle}>菜鸟教程</h1>,
 document.getElementById('example6')
);

var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example7')
);
