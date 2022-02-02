import React from 'react';
import { RightBlock } from './SvgBlock.elements';


const SvgBlock = ({svg}) => {
    const SvgIcon = require(`../../assets/img/${svg}`);

  return (
    <RightBlock id='svgBlock'>
       <img src={SvgIcon} alt="Services" />
    </RightBlock>
 );
};

export default SvgBlock;
