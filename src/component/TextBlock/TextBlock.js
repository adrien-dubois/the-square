import React from 'react';
import { 
    LeftBlock, 
    Square, 
    SubText, 
    Title, 
    Topic 
} from './TextBlock.elements';

const TextBlock = ({topic, title, subText, children}) => {
return <LeftBlock>
            <Topic>
                <Square /> <span>{topic}</span>
            </Topic>
            <Title>{title}</Title>
            <SubText>{subText}</SubText>
            {children}
         </LeftBlock> 
            
  
};

export default TextBlock;
