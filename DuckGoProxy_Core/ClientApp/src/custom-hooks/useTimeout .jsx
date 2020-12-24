const useTimeout = (callback,delay)=>{
    const savedCallback = React.useRef();
    React.useEffect(() => {
        savedCallback.current = callback;
    },[callback]);

    React.useEffect(()=>{
        function tick() {
            savedCallback.current();
        }

        if(delay !== null){
            let id = setTimeout(callback,delay);
            return () => clearTimeout(id);
        }
    }
    ,[delay]);
};

/**Usage Example: 
 * const ExampleTimeFiveSeconds = props => {
 * const [seconds,setSeconds] = React.useState(0)
 * useTimeout( ()=>{
 *      setSeconds(seconds + 1);
 *    },5000);
 * 
 * return <p>{seconds}</p>;
 * )
 * };
 * ReactDOM.render(<ExampleTimeFiveSeconds />,document.getElementById('root'));
*/


/**
 * 
 * With this hook, we can implement setTimeout using a declarative approach. First, we create a custom hook with a callback and a delay. Then we use the useRef hook to create a ref for the callback function. Finally, we make use of useEffect twice. One time for remembering the last callback and one time for setting up the timeout and cleaning up.
 */