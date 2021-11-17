import DataJSON from "../data.json";
import useUtils from "./useUtils";


const useData = () => {
  const { capitalizeFirstElement } = useUtils();

  const dataMapped = DataJSON.elements
    .filter((_, index) => index < 10) // only 10 elements
    .map((element, index) => {
      // only 10 properties of this element
      const elementKeys = Object.keys(element).filter((_, index) => index < 10);
      return elementKeys
        .map((elementKey) =>
          element[elementKey]
            ? `${capitalizeFirstElement(elementKey)}: ${element[elementKey]}`
            : null
        )
        .filter((x) => x);
    });

  const initialState = dataMapped.map((e) => false);
  return { initialState, dataMapped };
};

export default useData;
