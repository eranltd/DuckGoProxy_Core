const useClickInside = (ref,callback) => {
   
    const handleClick = e => {

        if(ref.current && ref.current.contains(e.target)){
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
 * const HitBox = ({onClickInside}) => {
 * 
 *  const clickRef = React.useRef();
 *  useClickInside(clickRef,onClickInside);
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
 * <HitBox onClickInside={() => alert('hit the box')} /> 
 */


/**
 * If you deal with event handling for clicking inside of wrapped components then the useClickInside hook is the right choice for you. First, we create a custom hook that takes in a ref and a callback to handle the click event. Then we make use of useEffect to append and clean up the click event. Finally, we use useRef to create a ref for the component to be clicked and pass it to the useClickInside hook.
 */