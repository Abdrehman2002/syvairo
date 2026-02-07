import React from 'react';
import styled from 'styled-components';

// Pass 'isSpeaking' as a prop from your main VoiceAiAgent component
const VoiceEffects = ({ isSpeaking }) => {
  return (
    <StyledWrapper $isSpeaking={isSpeaking}>
      <div className={`loader-wrapper ${isSpeaking ? 'active' : ''}`}>
        <span className="loader-letter">S</span>
        <span className="loader-letter">y</span>
        <span className="loader-letter">v</span>
        <span className="loader-letter">a</span>
        <span className="loader-letter">i</span>
        <span className="loader-letter">r</span>
        <span className="loader-letter">o</span>
        <div className="loader" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    font-family: "Inter", sans-serif;
    font-size: 1.2em;
    font-weight: 300;
    color: white;
    border-radius: 50%;
    background-color: transparent;
    user-select: none;
    transition: transform 0.3s ease;
    /* Scale up slightly when talking */
    transform: ${props => props.$isSpeaking ? 'scale(1.1)' : 'scale(1)'};
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: transparent;
    /* Speed up animation if isSpeaking is true */
    animation: loader-rotate ${props => props.$isSpeaking ? '1s' : '3s'} linear infinite;
    z-index: 0;
    will-change: transform, box-shadow;
  }

  @keyframes loader-rotate {
    0% {
      transform: rotate(0deg);
      box-shadow: 0 10px 20px 0 #fff inset, 0 20px 30px 0 #ad5fff inset, 0 60px 60px 0 #471eec inset;
    }
    50% {
      /* Intensify colors if speaking */
      box-shadow: ${props => props.$isSpeaking ? 
        '0 10px 40px 0 #fff inset, 0 20px 50px 0 #ff0055 inset, 0 60px 100px 0 #311e80 inset' : 
        '0 10px 20px 0 #fff inset, 0 20px 10px 0 #d60a47 inset, 0 40px 60px 0 #311e80 inset'};
    }
    100% {
      transform: rotate(360deg);
      box-shadow: 0 10px 20px 0 #fff inset, 0 20px 30px 0 #ad5fff inset, 0 60px 60px 0 #471eec inset;
    }
  }

  .loader-letter {
    display: inline-block;
    opacity: ${props => props.$isSpeaking ? '1' : '0.4'};
    transform: translateY(0);
    /* Speed up letter bounce when talking */
    animation: loader-letter-anim ${props => props.$isSpeaking ? '0.5s' : '2s'} infinite;
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  /* Keep your nth-child delays the same */
  .loader-letter:nth-child(1) { animation-delay: 0s; }
  .loader-letter:nth-child(2) { animation-delay: 0.1s; }
  .loader-letter:nth-child(3) { animation-delay: 0.2s; }
  .loader-letter:nth-child(4) { animation-delay: 0.3s; }
  .loader-letter:nth-child(5) { animation-delay: 0.4s; }
  .loader-letter:nth-child(6) { animation-delay: 0.5s; }
  .loader-letter:nth-child(7) { animation-delay: 0.6s; }

  @keyframes loader-letter-anim {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(${props => props.$isSpeaking ? '-10px' : '-2px'}); }
  }
`;

export default VoiceEffects;