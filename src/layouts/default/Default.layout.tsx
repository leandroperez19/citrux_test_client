import { FC } from "react"
import { Outlet } from "react-router-dom";
import { DefaultLayoutWrapper } from "./Default.layout.styled";
import { Navbar } from "./components/Navbar/Navbar";

const DefaultLayout: FC = () => {
  return (
    <DefaultLayoutWrapper>
      <Navbar />
        <Outlet />
    </DefaultLayoutWrapper>
  )
}

export default DefaultLayout;