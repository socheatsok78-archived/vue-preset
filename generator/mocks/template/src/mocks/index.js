/**
 * Add 'mimic' package for easier mocking of not yet implemented API on backend.
 * To enable it in dev mode add VUE_APP_ENABLE_MIMIC=enable to your .env.local file.
 */

export default async function initMocks() {
    if (process.env.NODE_ENV === 'production') {
        return false;
    }

    const Mimic = (await import('mimic')).default;
    const mocks = require.context('./__mocks__', true, /\.json$/);

    try {
        await mocks
            .keys()
            .forEach((key) => Mimic.import(JSON.stringify(mocks(key))));
    } catch (error) {
        console.error(`Mimic failed to import mocks: ${error}`);
    }

    return Mimic;
}

/**
 * Start Mock Server
 */
if (process.env.VUE_APP_ENABLE_MIMIC === 'true') {
    initMocks();
}
