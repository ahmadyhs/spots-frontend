export default async function getListting() {
    try{
        const data = await fetch ('https://api.spotscoworking.live/coworking-spaces')
        const json = await data.json();

        return json.coworkingSpaces;
    } catch (error){
        throw new Error(error);
    }
}