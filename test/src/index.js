import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function Hello() {
  return(
    <div>
      <h1>
       こんにちは
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
