export default async function getListtingById(
    parameter
) {
    try{
        const id = parameter.params.id
        const data = await fetch ('https://api.spotscoworking.live/coworking-spaces/' + id)
        const json = await data.json();
    
        return json.coworkingSpaceS;
    } catch (error){
        throw new Error(error);
    }
}