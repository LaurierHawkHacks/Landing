import React from 'react';
import Styled from 'styled-components';

const StripDiv = Styled.div({
    width: "100%",
    display: "flex",
});

const Strip = ({ children, ...rest }) => {
    return (
        <StripDiv {...rest}>
            {children}
        </StripDiv>
    );
}

export default Strip;