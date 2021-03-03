import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 注意，原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头，比如 HelloMessage 不能写成 helloMessage。除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。
function HelloMessage1(props) {
	return <h1>Hello World!</h1>;
}

const element1 = <HelloMessage1 />;

ReactDOM.render(
	element1,
	document.getElementById('example1')
);



function HelloMessage2(props) {
	return <h1>Hello {props.name}!</h1>;
}

const element2 = <HelloMessage2 name="Runoob"/>;

ReactDOM.render(
	element2,
	document.getElementById('example2')
);

// 复合组件
function Name(props) {
	return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
	return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
	return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
	return (
	<div>
		<Name name="菜鸟教程" />
		<Url url="http://www.runoob.com" />
		<Nickname nickname="Runoob" />
	</div>
	);
}

ReactDOM.render(
	 <App />,
	document.getElementById('example3')
);