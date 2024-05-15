import { FC } from "react";
import { BackButtonWrapper } from "./BackButton.styled";
import { useNavigate } from "react-router-dom";

// type BackButtonProps = {
//     url: string;
// };

const BackButton: FC = () => {
    const navigate = useNavigate();
    // ROUTER
    return (
        <BackButtonWrapper onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">chevron_left</span>
            <span>Back</span>
        </BackButtonWrapper>
    );
};

export default BackButton;
