const useComponentWillUnmount = onUnMountHandler => {
    React.useEffect(()=>() => {
        onUnMountHandler()
    },[])
}

/**Exmaple
 * 
 * 
 * const UnMountComponent = () => {
 * 
 *  useComponentWillUnmount(()=> console.log(`This Component has been unmo`))

    return <div>Check you browser console</div>
 * }
 * 
 */



  /**
   * will execute a callback as soon as the component is unmounted. So we use useEffect again with an empty array as the second argument to execute the provided callback right before the cleanup
   */