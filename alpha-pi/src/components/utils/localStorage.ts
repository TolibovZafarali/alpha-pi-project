export function setItem(key: string, value: unknown) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(error);
    }
}

export function getItem(key: string) {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    } catch (error) {
        console.error(error)
    }
}

// https://www.youtube.com/watch?v=RDAFJ5ToMmQ&ab_channel=CosdenSolutions