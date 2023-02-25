import styled from 'styled-components';
export const OptionButtons = styled.button`
width: 10rem;
height: 3rem;
display: block;
background-color: #903DE8;
border: none;
border-radius: 5px;
text-align: center;
justify-content: center;
text-transform: uppercase;
margin: 15px;
cursor: pointer;
box-shadow: .3rem .3rem .6rem #c8d0e7, 
    -.2rem -.2rem .5rem white;
    cursor: pointer;
    transition: all .3s ease;
    :hover {
        color: #FFFFFF;
    }
    :active {
        box-shadow: inset .2rem .2rem .5rem #c8d0e7, 
        inset -.2rem -.2rem .5rem white;
    }
`;
export const FeedbackBox = styled.ul`
width: 350px;
display: flex;
justify-content: space-between;
padding: 22px;
margin: 0;
`;