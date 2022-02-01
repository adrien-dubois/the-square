import React from 'react';
import { 
    LeftBlock, 
    Square, 
    SubText, 
    Title, 
    Topic 
} from './TextBlock.elements';



const TextBlock = ({
    children,
    topic, 
    start,
    subRight,
    subText,
    titleRight, 
    title
}) => {
return (
        
        <LeftBlock id='leftBlock' start={start}>
            <Topic>
                <Square /> 
                <span>{topic}</span>
            </Topic>
            <Title titleRight={titleRight}>{title}</Title>
            <SubText subRight={subRight}>{subText}</SubText>
            {children}
         </LeftBlock> 
)};

export default TextBlock;
