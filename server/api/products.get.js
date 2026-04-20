import PocketBase from 'pocketbase';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    let pb = new PocketBase(config.apiUrl);
    const records = await pb.collection('products').getFullList({
        sort: '-created',
    });
    return records.map(record => ({
        id: record.id,
        slug: record.slug,
        name: record.name,
        price: record.price,
        image: `${config.apiUrl}/api/files/${record.collectionId}/${record.id}/${record.image}?thumb=300x300`, 
    }));
});