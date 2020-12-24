const useClickOutside = (ref,callback) => {
   
    const handleClick = e => {

        if(ref.current && !ref.current.contains(e.target)){
            callback();
        }
    };
    React.useEffect (()=>{
            document.addEventListener('click',handleClick);
            return ()=>{
                document.removeEventListener('click',handleClick);
            };
    });
};


/***Exmaple
 * 
 * const HitBox = ({useClickOutside}) => {
 * 
 *  const clickRef = React.useRef();
 *  useClickInside(clickRef,useClickOutside);
 * 
 * return (
 *  <div>empty></empty>
 * 
 * )
 * 
 * 
 * }
 * 
 * 
 * 
 * 
 *
 * 
 * <HitBox useClickOutside={() => alert('dont hit the box')} /> 
 */


/**
 * The useClickOutside hook is quite similar to the useClickInside hook but it takes care of clicking outside a wrapped component and not inside. So again, we create a custom hook that takes in a ref and a callback to handle the click event. Then we make use of useEffect to append and clean up the click event. Finally, we use useRef to create a ref for the component and pass it to the useClickOutside hook.
 * 
 */