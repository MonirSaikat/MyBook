import clientPromise from ".";

let client;
let db;
let dictionary;

async function init() {
    if (db) return;
    try {
        client = await clientPromise;
        db = await client.db();
        dictionary = await db.collection('dictionary');
    } catch (error) {
        throw new Error('Failed to establish connection to the database');
    }
}

(async () => {
    await init();
})();

export async function getDictionary() {
    try {
        if (!dictionary) await init();
        const data = await dictionary.find().toArray();
        return { dictionary: data };
    } catch (error) {
        console.error(error);
        return { error: 'Failed to fetch dictionary' };
    }
}
