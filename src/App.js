import React from 'react';
import './App.scss';
import { Card } from './Card';

function App() {

  const food_list = [
    {
      type: 'с фуа-гра',
      number: 10,
      mice: 0,
      count: 0.5,
      isSatisfied: false,
      description: 'Печень утки разварная с артишоками.',
      disabledText: 'Печалька, с фуа-гра закончился.',
      disabled: false,
    },
    {
      type: 'с рыбой',
      number: 40,
      mice: 2,
      count: 2,
      isSatisfied: false,
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      disabledText: 'Печалька, с рыбой закончился.',
      disabled: false,
    },
    {
      type: 'с курой',
      number: 100,
      mice: 5,
      count: 5,
      isSatisfied: true,
      description: 'Филе из цыплят с трюфелями в бульоне.',
      disabledText: 'Печалька, с курой закончился.',
      disabled: true,
    }
  ]

  return (
    <div className="main">
      <div className="container">
        <div className="title-wrapper">
          <h1 className="title">Ты сегодня покормил кота?</h1>
        </div>
        <div className="card-container">
          {
            food_list.map((item, index) => {
              return (
                <Card item={item} key={index} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
