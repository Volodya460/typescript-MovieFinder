import { Audio } from "react-loader-spinner";
import { LoaderDiv } from "./Loader.styled";
export const Loader = () => {
  return (
    <LoaderDiv>
      {" "}
      <Audio height="80" width="80" color="blue" ariaLabel="loading" />
    </LoaderDiv>
  );
};
