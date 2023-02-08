export const formatTime = (time) => {
    const seconds = Math.round(time/1000)  % 60
    return seconds
}