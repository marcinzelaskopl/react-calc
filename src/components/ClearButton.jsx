import React, { Component } from 'react';
import './ClearButton.css';

export const ClearButton = (props) => (
  <div onClick={props.handleClear} className={'clear-btn'}>
      {props.children}
  </div>
);