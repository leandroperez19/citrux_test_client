import { FC, ReactNode } from "react"
import { DefaultLayoutWrapper } from "./Default.layout.styled";
import { Navbar } from "./components/Navbar/Navbar";

type DefaultLayoutProps = {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <DefaultLayoutWrapper>
      <Navbar />
        { children }
    </DefaultLayoutWrapper>
  )
}

export default DefaultLayout;