import React from 'react';
import { RightBlock } from './SvgBlock.elements';


const SvgBlock = ({svg}) => {
    const SvgIcon = require(`../../assets/img/${svg}`);
    // console.log(SvgIcon);
  return (
    <RightBlock id='svgBlock'>
       <img src={SvgIcon} alt="Services" />
    </RightBlock>
 );
};

export default SvgBlock;
