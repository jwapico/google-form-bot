
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    } catch (error) {
        console.error("Unable to fetch data:", error);
    }
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

export { pickRandom };
export { fetchData };
