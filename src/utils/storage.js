const appName = 'TMRZ';

export const loadState = () => {
    const timersSerialized = JSON.parse(localStorage[appName]);
    return timersSerialized;
}

export const saveState = (timers) => {
    const timersStringified = JSON.stringify(timers);

    localStorage[appName] = timersStringified;
}
