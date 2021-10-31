/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--borderRadius': '4px',
    '--padding': '0',
    '--height': '8px',
  },
  medium: {
    '--borderRadius': '4px',
    '--padding': '0',
    '--height': '12px',
  },
  large: {
    '--borderRadius': '8px',
    '--padding': '4px',
    '--height': '24px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  const getBorderRadiusFromValue = value => {
    if(value < 99){
      return '4px 0px 0px 4px';
    }
    else if(value >= 99 && value < 100){
      return '4px 2px 2px 4px'
    }
    else{
      return '4px'
    }
  }


  return (
    <Background
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <Fill style={{
        '--width': value + '%',
        '--borderRadius': getBorderRadiusFromValue(value)
      }}/>
    </Background>
  );
};

const Background = styled.div`
  box-shadow: 0px 2px 4px 0px #80808059 inset;
  width: 100%;
  height: var(--height);
  background: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
`

const Fill = styled.div`
  background: ${COLORS.primary};
  border-radius: var(--borderRadius);
  width: var(--width);
  height: 100%;
`



export default ProgressBar;
