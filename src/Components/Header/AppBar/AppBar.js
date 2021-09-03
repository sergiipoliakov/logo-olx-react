import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// const catigories = {
//   property: 'Нерухомість',
//   transport: 'Транспорт',
//   work: 'Робота',
//   electronics: 'Електроніка',
//   businessAndServices: 'Бізнес та послуги',
//   recreationAndSport: 'Відпочинок і спорт',
//   free: 'Віддам безкоштовно',
//   trade: 'Обмін',
// };

function AppBar(props) {
  return (
    <div>
      <ul>
        <NavLink to="/property">Нерухомість</NavLink>
        <NavLink to="/transport">Транспорт</NavLink>
        <NavLink to="/work">Робота</NavLink>
        <NavLink to="/electronics">Електроніка</NavLink>
        <NavLink to="/businessAndServices">Бізнес та послуги</NavLink>
        <NavLink to="/recreationAndSport">Відпочинок і спорт</NavLink>
        <NavLink to="/free">Віддам безкоштовно</NavLink>
        <NavLink to="/trade">Обмін</NavLink>
      </ul>
    </div>
  );
}

AppBar.propTypes = {};

export default AppBar;
