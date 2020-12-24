const useComponentDidMount = onMountHandler => {
    React.useEffect(()=>{
        onMountHandler()
    },[])
}

/**Exmaple
 * 
 * 
 * const MountComponent = () => {
 * 
 *  useComponentDidMount(()=> console.log(`This Component has been mounted`))

    return <div>Check you browser console</div>
 * }
 * 
 */

  /**
  * This hook is a small example of how to execute a callback right after a component is mounted. For the second argument, we simply use useEffect with an empty array, to execute the provided callback once as soon as the component is mounted.
  */