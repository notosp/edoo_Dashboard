import React, { useState, useEffect } from 'react';
import Content from '../../../components/Content';

export default () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCounter(counter + 1);
      console.log(counter);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [counter])

  return (
    <Content>
      <div>{counter}</div>
    </Content>
  );
}