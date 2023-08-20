import React from 'react';
import { useState } from '@types/react';

const InputValue = () => {
  const [value, setValue] = useState('Text in  my input');

  return (
    <div>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/><h2>{value}</h2>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </div>
  );
};

export default InputValue;