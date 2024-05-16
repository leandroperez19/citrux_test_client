import { FC } from "react";
import { CardsSkeletonWrapper } from "./CardsSkeleton.styled";

const elements = [1, 2, 3, 4, 5, 6, 7, 8];

const CardsSkeleton: FC = () => {
    return (
        <CardsSkeletonWrapper>
            {elements.map((e) => (
                <div className="skeleton-card" key={e}>
                    <div className="text grid gap-2">
                        <div className="title w-full"></div>
                        <div className="title mb-1 w-2/4 lg:mb-4"></div>
                        <div className="line"></div>
                        <div className="line w-2/4"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line w-1/4"></div>
                    </div>                    
                    <div className="card-footer w-full flex justify-between items-center text-xs">
                        <div className="flex gap-1 items-center">
                            <span>Full article</span>
                            <span className="material-symbols-outlined text-lg">open_in_new</span>
                        </div>
                        <div className="read-more flex gap-1 items-center">
                            <span>More details</span>
                            <span className="material-symbols-outlined">arrow_right_alt</span>
                        </div>
                    </div>
                </div>
            ))}
        </CardsSkeletonWrapper>
    );
};

export default CardsSkeleton;
