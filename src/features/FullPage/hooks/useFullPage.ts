import { useContext } from "react";
import { FullPageContext } from "../FullPage";

const useFullPage = () => {
  const values = useContext(FullPageContext);

  if (!values) {
    throw new Error("Not Found FullPageContext");
  }

  return values;
};

export default useFullPage;
