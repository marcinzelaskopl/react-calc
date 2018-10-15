import React, {Component} from 'react';
import './Button.css';

export const Button = props =>
    <div className={`button-wrapper ${isOperator(props.children) ? null : 'operator'}`}>
        {props.children}
    </div>;


const isOperator = val => {
    return !isNaN(val) || val === '.' || val === '=';
}

