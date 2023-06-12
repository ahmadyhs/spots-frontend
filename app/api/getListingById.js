export default async function getListtingById(
    parameter
) {
    try{
        const data = await fetch ('https://api.spotscoworking.live/coworking-spaces/' + parameter)
        const json = await data.json();
    
        return json.coworkingSpace;
    } catch (error){
        throw new Error(error);
    }
}