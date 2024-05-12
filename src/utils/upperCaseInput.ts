export const inputToUpperCase = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e) return;
    e.target.value = e.target.value.toUpperCase()
}