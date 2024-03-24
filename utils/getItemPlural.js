export const getItemPlural = (text, dataLength) => {
    return `${dataLength > 1? `${text}s` : text}`;
}