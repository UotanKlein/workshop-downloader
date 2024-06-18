import SteamWorkshop from 'steam-workshop';

export default async (addonId) => {
    try {
        return await new Promise((resolve, reject) => {
            const workshop = new SteamWorkshop();
            workshop.getPublishedFileDetails(addonId, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    } catch (err) {
        throw new errors.AddonNotFoundError();
    }
};
