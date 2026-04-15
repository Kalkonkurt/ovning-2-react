import type { TemperatureProps } from '../types/temperature.types';
import { useState } from 'react';
import Button from '../elements/Button';

function Temperature({ startTemperature }: TemperatureProps) {
  const [temp, setTemp] = useState<number>(startTemperature);

  return (
    <>
      <Button
        text="increase"
        onClick={() => setTemp(temp + 1)}
        style={{ marginRight: '400px', marginLeft: '400px', backgroundColor: 'orange' }}
      ></Button>
      <Button
        text="decrease"
        onClick={() => setTemp(temp - 1)}
        style={{ marginRight: '400px', marginLeft: '400px', backgroundColor: 'blue' }}
      ></Button>
      <h2>Temperature</h2>
      <p>{temp} °C</p>
    </>
  );
}
export default Temperature;
