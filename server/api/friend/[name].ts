export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const data = await Database.quick<Interfaces.Friend>(Enums.ResponseFormat.ONE, runtimeConfig, 'friend', { name });
    if (data) {
        const imgData = data.image!.split(':');
        switch (imgData[0]) {
            case 'grav':
                data.image = `https://thefemdevs.com/assets/images/grav/${imgData[1]}`;
                break;
            case 'dc':
                data.image = `https://ted.ac/api/discord/user/${imgData[1]}/avatar`;
                break;
        }
    }
    return data;
})