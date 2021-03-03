import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React State1
class Clock1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // componentDidMount() 与 componentWillUnmount() 方法被称作生命周期钩子。
  // 在组件输出到 DOM 后会执行 componentDidMount() 钩子，我们就可以在这个钩子上设置一个定时器。
  // this.timerID 为定时器的 ID，我们可以在 componentWillUnmount() 钩子中卸载定时器。
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock1 />,
  document.getElementById('example1')
);

// demo2 数据自顶向下流动
function FormattedDate(props) {
  return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
}

class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

ReactDOM.render(
  <Clock2 />,
  document.getElementById('example2')
);

// demo3 所有组件都是真正隔离
function App() {
  return (
    <div>
      <Clock2 />
      <Clock2 />
      <Clock2 />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('example3'));