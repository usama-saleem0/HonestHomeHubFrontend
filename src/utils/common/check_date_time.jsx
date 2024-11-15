export function getTimeAgo(data) {
    const now = new Date();
    const createdDate = new Date(data); // Access createdAt from the data object
    const timeDifference = now - createdDate;

    const minutes = Math.floor(timeDifference / (60 * 1000));
    const hours = Math.floor(timeDifference / (60 * 60 * 1000));
    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

    if (minutes < 1) {
        return 'Just now';
    } else if (minutes < 60) {
        return `${minutes}m ago`;
    } else if (hours < 24) {
        return `${hours}h ago`;
    } else {
        return `${days}d ago`;
    }

}