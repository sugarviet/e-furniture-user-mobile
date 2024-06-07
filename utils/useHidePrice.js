
function useHidePrice(value) {
    const stringValue = value.toString();
    const length = stringValue.length;

    if (length > 6) {
        const hiddenValue = stringValue.slice(0, -6);
        return `${hiddenValue}.???.${stringValue.slice(-3)}`;
    } else if (length === 6) {
        const hiddenValue = stringValue.slice(0, -5);
        return `${hiddenValue}??.${stringValue.slice(-3)}`;
    } else {
        const hiddenValue = stringValue.slice(0, -2);
        return `??.${stringValue.slice(-3)}`;
    }
}

export default useHidePrice;
