const useUtils = () => {
  function capitalizeFirstElement(myString) {
    return `${myString.charAt(0).toUpperCase()}${myString.substring(
      1,
      myString.length
    )}`;
  }

  return { capitalizeFirstElement };
};

export default useUtils
