import "./GlobalStyles.scss";
import { FC, ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const GlobalStyles: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalStyles;
