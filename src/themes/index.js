import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Colors from './colors';

const withTheme = Component=>(props) =>{

    const { theme } = useSelector(({uiReducer})=>uiReducer);
    return <Component {...props} theme={theme}/>
}

export {
    Colors,
    withTheme,
  };