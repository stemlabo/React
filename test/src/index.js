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
    <div>
      <h1>
       こんにちは { name.lastName + name.firstName} さん　{ count + 1 } 回目の訪問です
        </h1>
      <p>
        Helloコンポーネントが書き出されました！
      </p>
    </div>
  );
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
