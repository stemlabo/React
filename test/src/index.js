import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const name = {
  firstName: '杏介',
  lastName: '中島'
};

let count = 0;
for (let i = 0; i < 12; i++) {
  count ++;
} 

function Hello() {
  return(
 <section>
      <h1>
       こんにちは { name.lastName + name.firstName} さん　{ count + 1 } 回目の訪問です
        </h1>
      <p id="hello">
      {/*
        Helloコンポーネントが書き出されました！*/}
      </p>

      <div style={{'margin-top': '100px', 'padding': '50px'}}>
      <img src="https://goo.gl/0kZocc" alt="Google" /></div>
    </section>
  );
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
