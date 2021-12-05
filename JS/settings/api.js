export const baseUrl = "http://localhost:1337/";
export const productsUrl = baseUrl + "products";

export async function fetchAPI(afunction, url) {
    try {
        const response = await fetch(url);
        const JSON = await response.json();
        const result = JSON;

        afunction(result);
        
    } catch (error) {
        console.log();
    }
}