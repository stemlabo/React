import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const name = {
  firstName: '杏介',
  lastName: '中島'
};

const someHtml = {__html: '<h2>これはh2タグです。</h2>'};
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
   Helloコンポーネントが書き出されました！
   <br />
   <span dangerouslySetInnerHTML={ someHtml } />
      </p>

      <div data-role="imageBox">
      <img src="https://goo.gl/0kZocc" alt="Google" /></div>
    </section>
  );
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
