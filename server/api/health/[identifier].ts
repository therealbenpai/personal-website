import _ from 'lodash';

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const identifier = getRouterParam(event, 'identifier');
    const data = await Database.quick<Interfaces.Health>(
        Enums.ResponseFormat.One,
        runtimeConfig,
        'health',
        {
            name: _.lowerCase(identifier),
        },
    );
    return data;
})