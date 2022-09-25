// 1080 -> 18:00

export function convertMinutesToHourString(minutesAmount: number) {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;

    // caso não tenha 2 caracteres insere um 0 na frente
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}