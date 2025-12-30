import React from 'react'


const CounterWrapper = (WrappedComponent) => {
  return function EnhanceComponents(props) {
    const [count, setCount] = React.useState(0);
    return <WrappedComponent 
    {...props}
     count={count} 
     incrementCount={()=> setCount(count + 1)} />;
  };
};
export default CounterWrapper;
