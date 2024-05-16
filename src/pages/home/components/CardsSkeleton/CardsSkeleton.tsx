import { FC } from "react";
import { CardsSkeletonWrapper } from "./CardsSkeleton.styled";

const elements = [1, 2, 3, 4, 5, 6, 7, 8];

const CardsSkeleton: FC = () => {
    return (
        <CardsSkeletonWrapper>
            {elements.map((e) => (
                <div className="skeleton-card" key={e}>
                    <div className="text grid gap-2">
                        <div className="title w-4/5"></div>
                        <div className="title mb-1 w-2/4 lg:mb-4"></div>
                        <div className="line"></div>
                        <div className="line w-2/4"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line w-1/4"></div>
                    </div>                    
                    <div className="card-footer w-full flex justify-between items-center text-xs">
                        <div className="line w-12 flex gap-1 items-center" />
                        <div className="line w-12 flex gap-1 items-center" />
                    </div>
                </div>
            ))}
        </CardsSkeletonWrapper>
    );
};

export default CardsSkeleton;
