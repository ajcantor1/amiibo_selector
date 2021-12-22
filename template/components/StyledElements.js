import styled from "styled-components";

export const MainContainer = styled.div`
    
    margin: auto;
    display: flex;
    width: 1250px;
    height: 500px;
    flex-direction: row;
    @media screen and (max-width: 600px) {
        transform-origin: center left;
        transform: rotate(-90deg) translate(-300px, 150px) scale(0.6);
  
     
    }
   
`
export const Joycon = styled.div`
    background-image: ${
        props => props.direction == 'left' ? 
            `url("./static/images/left-blue-joycon.png")`
            : `url("./static/images/right-red-joycon.png")`
        };
    width: 130px;
    height: 400px;
    position: relative;
`;

export const MiddleContainer = styled.div`
    width: 650px;
    display: flex;
    align-self: stretch;
    flex-direction:column;
`

export const ScreenContainer = styled.div`
    border-left: 20px solid #323639;
    border-top: 30px solid #323639;
    border-bottom: 30px solid #323639;
    border-right: 20px solid #323639;
    background-color: #010101;
    height: 380px;
    border-radius: 20px 20px 0px 0px;

`

export const TopButtonLayer = styled.div`
    height: 10px;
    margin: 0px 30px;
    background-color: #595E62;
    border-radius: 20px 20px 0px 0px;
    display: block;
    z-index: 2;
`

export const TopButtons = styled.div`
  width: 500px;
  margin: 0 auto;
  height: 5px;
  position: relative;
`

export const PowerButton = styled.button`
    all: unset;
    height: 5px;
    width: 20px;
    left: 20px;
    position: absolute;
    background-color: #323639;
    transition: 0.2s;
    &:active {
        top: 4px;
      
    }
`

export const VolumeUpButton = styled.button`
    all: unset;
    height: 5px;
    width: 30px;
    left: 60px;
    position: absolute;
    background-color: #323639;
    transition: 0.2s;
    &:active {
        top: 4px;
      
    }
`

export const VolumeDownButton = styled.button`
    all: unset;
    height: 5px;
    width: 30px;
    left: 95px;
    position: absolute;
    background-color: #323639;
    transition: 0.2s;
    &:active {
        top: 4px;
      
    }
`

export const Character = styled.img`
    border-radius: 50%;
    height: 150px;
    width: 150px;
    border: 20px solid white;
`

export const CharacterContainer = styled.div`
    margin: 0 10px !important;
`

export const SlideContainer = styled.div`
    margin: 50px 10px;
    overflow: hidden;
`

export const LeftButton = styled.button`
    background: transparent;
    border: none !important;
    position: absolute;
    top: 205px;
    left: 25px;
    width: 28px;
    height: 28px;
}`

export const RightButton = styled.button`
    background: transparent;
    border: none !important;
    position: absolute;
    top: 205px;
    left: 85px;
    width: 28px;
    height: 28px;
}`

