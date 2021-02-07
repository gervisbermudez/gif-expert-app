export const getGift = async (category) => {
    const api_key = 'Ajbra33ggJ7fTmskwwVBhe6LfMzpt5RD';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=25&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized.url
        }
    })
    return (gifs);
}