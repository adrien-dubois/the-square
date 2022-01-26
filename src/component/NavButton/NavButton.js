import React from 'react';
import { 
    Arrow,
    NavButtonContainer, 
    NBLink, 
    NBMain 
} from './NavButton.elements';

const NavButton = (props) => {
  return (
    <NavButtonContainer>
        <NBMain>
            {props.left && (
                <NBLink to={props.left} className="left hover">
                    <Arrow>&#10092;</Arrow>
                </NBLink>
            )}

            <p className='center'> naviguer </p>

            {props.right && (
                <NBLink to={props.right} className="right hover">
                    <Arrow>&#10093;</Arrow>
                </NBLink>
            )}
        </NBMain>
    </NavButtonContainer>
  );
};

export default NavButton;
