import { FC } from "react";
import { ToggleWrapper } from "./Toggle.styled";

type ToggleProps = {
    toggled: boolean;
    onChange: () => void;
};

const Toggle: FC<ToggleProps> = ({ toggled, onChange }) => {

    return (
        <ToggleWrapper>
            <div
                onClick={() => onChange()}
                className={`toggle ${!toggled ? "active" : "inactive"}`}
            >
                <div className="ball"></div>
            </div>
        </ToggleWrapper>
    );
};

export default Toggle;
