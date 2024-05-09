import { FC } from "react"
import { Outlet } from "react-router-dom";
import { DefaultLayoutWrapper } from "./Default.layout.styled";

const DefaultLayout: FC = () => {
  return (
    <DefaultLayoutWrapper>
        <Outlet />
    </DefaultLayoutWrapper>
  )
}

export default DefaultLayout;