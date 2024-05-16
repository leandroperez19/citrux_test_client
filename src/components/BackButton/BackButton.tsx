import { FC } from "react";
import { BackButtonWrapper } from "./BackButton.styled";

type BackButtonProps = {
    url?: string;
};

const BackButton: FC<BackButtonProps> = ({ url='/' }) => {

    return (
        <BackButtonWrapper>
            <a href={url} className="w-fit">
                <span className="material-symbols-outlined">chevron_left</span>
                <span>Back</span>
            </a>
        </BackButtonWrapper>
    );
};

export default BackButton;
