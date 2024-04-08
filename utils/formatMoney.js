
const formatMoney = (value) => {
    const useFormatMoney = (val) => {
        if (val >= 1000000) {
            return `${(val / 1000000).toFixed(1)}M`;
        } else {
            return `${val / 1000}K`;
        }
    };

    return useFormatMoney(value);
};

export default formatMoney;