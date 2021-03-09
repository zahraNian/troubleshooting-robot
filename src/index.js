import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
 *convert number from english to persian
 */
  global.convertNumberFromEtoP = (num, dontTrim) => {
  if (num) {
    var i = 0
    var dontTrim = dontTrim || false
    var num = dontTrim ? num.toString() : num.toString().trim()
    var len = num.length
    var res = ''
    var pos
    var persianNumbers =
      typeof persianNumber === 'undefined'
        ? ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
        : persianNumbers

    for (; i < len; i++) {
      if ((pos = persianNumbers[num.charAt(i)])) res += pos
      else res += num.charAt(i)
    }

    return res
  }
}

global.convertNumberFromPtoE = (str) => {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g
  ]
  const arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g
  ]

  if (typeof str === 'string') {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i)
    }
  }
  return str
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
