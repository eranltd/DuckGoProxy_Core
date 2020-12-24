import React from 'react'
const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
  }

  export default useViewport;

  /**This Hook is working well now,
   *  but there is still room for improvement.
   *  Currently, every component that uses this Hook will create a brand new 
   *  event listener for the window resize event. This is wasteful,
   *  and could cause performance issues if
   *  the Hook were to be used in a lot of different components at once.
   *  It would be much better if we could get the Hook to rely on a
   *  single resize event listener that the entire app could share. */