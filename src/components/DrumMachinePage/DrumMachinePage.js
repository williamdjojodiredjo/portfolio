import React, { useState } from 'react';
import DrumPad from './DrumPad';
import './DrumMachinePage.css';
import NavBar from '../NavBar/NavBar';

const drumPads = [
  { key: 'Q', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', label: 'Heater 1' },
  { key: 'W', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', label: 'Heater 2' },
  { key: 'E', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', label: 'Heater 3' },
  { key: 'A', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', label: 'Heater 4' },
  { key: 'S', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', label: 'Clap' },
  { key: 'D', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', label: 'Open-HH' },
  { key: 'Z', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', label: 'Kick-n-Hat' },
  { key: 'X', sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', label: 'Kick' },
  { key: 'C', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', label: 'Closed-HH' },
];

function DrumMachinePage() {
  const [display, setDisplay] = useState('');
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const handleDisplay = (label) => {
    if (power) {
      setDisplay(label);
    }
  };

  const handlePowerToggle = () => {
    setPower(!power);
    setDisplay('');
  };

  const handleVolumeChange = (event) => {
    const volumeValue = event.target.value;
    setVolume(volumeValue);
    setDisplay(`Volume: ${Math.round(volumeValue * 100)}`);
    setTimeout(() => setDisplay(''), 1000); // Clear display after 1 second
  };

  return (
    <div>
      <NavBar />
      <div id="drum-machine">
        <div className="pad-container">
          <div className="pads">
            {drumPads.map((pad) => (
              <DrumPad
                key={pad.key}
                keyTrigger={pad.key}
                sound={pad.sound}
                label={pad.label}
                updateDisplay={handleDisplay}
                power={power}
                volume={volume}
              />
            ))}
          </div>
          <div className="controls">
            <div className="power-control">
              <label>Power</label>
              <label className="switch">
                <input type="checkbox" checked={power} onChange={handlePowerToggle} />
                <span className="slider round"></span>
              </label>
            </div>
            <div id="display">{display}</div>
            <div className="volume-control">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumMachinePage;
