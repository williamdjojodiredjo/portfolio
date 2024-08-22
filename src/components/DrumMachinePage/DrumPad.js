import React, { useEffect, useCallback } from 'react';
import './DrumPad.css';

function DrumPad({ keyTrigger, sound, label, updateDisplay, power, volume }) {
  const playSound = useCallback(() => {
    if (power) {
      const audio = document.getElementById(keyTrigger);
      audio.volume = volume;
      audio.currentTime = 0;

      // Check if the audio is ready to play
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log(`Playback prevented due to the error: ${error.message}`);
        }).then(() => {
          updateDisplay(label);
        });
      }
    }
  }, [keyTrigger, label, updateDisplay, power, volume]);

  const handleKeyPress = useCallback((event) => {
    if (event.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  }, [keyTrigger, playSound]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="drum-pad" id={label} onClick={playSound}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={sound}></audio>
    </div>
  );
}

export default DrumPad;
