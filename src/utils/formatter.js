export const formatTimestamp = (timestamp) => {
    if(timestamp == undefined || timestamp == null || timestamp == '') {
        return 'never';
    }
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}

export const formatTemp = (temp) => {
    var value = Math.round(parseFloat(temp)) || '-';
    return `${value}\u00B0F`;
}