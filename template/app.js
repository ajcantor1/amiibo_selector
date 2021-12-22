import React, { useEffect, useState, useRef}  from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
    MainContainer, 
    Character,
    CharacterContainer,
    Joycon, 
    MiddleContainer, 
    ScreenContainer, 
    TopButtonLayer, 
    TopButtons,
    PowerButton,
    VolumeUpButton,
    VolumeDownButton,
    SlideContainer,
    LeftButton,
    RightButton
} from './components/StyledElements';

const App = () => {
    
    var characterSlider = useRef(null);

    const [characters, setCharacters] = useState(null);
    const [showCarousel, setShowCarousel] = useState(true);

    useEffect(() => {
        if(!characters) {
            axios.get("https://amiibo-selector.herokuapp.com/characters").then((response) => {
                setCharacters(response.data.results);
            });
        }
    }, [showCarousel])
  
    const slickSettings = {
 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerPadding: "40px",
        arrows: false,
        centerMode: true
      
    };

    const goPrev = (event) => {
        event.preventDefault(); 
        characterSlider.slickPrev();
    }

    const goNext = (event) => {
        event.preventDefault(); 
        characterSlider.slickNext();
    }

    return(
        <MainContainer>
            <Joycon direction="left">
                <LeftButton onClick={goPrev}/>
                <RightButton onClick={goNext}/>
            </Joycon>
            <MiddleContainer>
                        
                <TopButtons>        
                    <PowerButton onClick={(e) => {e.preventDefault(); setShowCarousel(!showCarousel)}}/>
                    <VolumeUpButton/>
                    <VolumeDownButton/>
                </TopButtons>
                <TopButtonLayer/>
                <ScreenContainer>
                    <SlideContainer>
                        <Slider ref={slider => (characterSlider = slider)} {...slickSettings}>
                        {showCarousel==true && characters && characters.map(character => {
                            return (
                                <CharacterContainer>
                                    <Character src={"./static/images/characters/"+character}/>
                                </CharacterContainer>
                            );
                        })}
                        </Slider>
                    </SlideContainer>
                </ScreenContainer>
                  
            </MiddleContainer>
            <Joycon direction="right"/>
        </MainContainer>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))