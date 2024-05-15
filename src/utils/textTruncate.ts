export const truncateText = (value: string, truncateTo: number) => {
    if (value && value.length > truncateTo) {
        return value.substring(0, truncateTo) + "...";
    }
    return value;
};