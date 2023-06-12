export default async function getProfile(
    token
) {
    try{ 
        const header = {'Authorization': 'Bearer ' + token};
        const data = await fetch ('https://api.spotscoworking.live/tenants/profile', {headers: header})
        const json = await data.json();
        const tenant = json.tenant;
        
        return tenant;
    } catch (error){
        throw new Error(error);
    }
}