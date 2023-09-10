export const fetchEndPoint = async (url) => {
    const response = await fetch(url);

    if (response.status === 204 || response.status > 400) {
        return null;
    }

    const data = await response.json();
    return data;
}