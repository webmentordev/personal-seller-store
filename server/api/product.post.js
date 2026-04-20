import PocketBase from 'pocketbase';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const req = await readBody(event);
    try {
        let pb = new PocketBase(config.apiUrl);
        const record = await pb.collection('products').getFirstListItem(
            `slug="${req.slug}"`
        );
        if (!record) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Product not found'
            });
        }
        const imageUrl = record.image 
            ? `${config.apiUrl}/api/files/products/${record.id}/${record.image}`
            : null;
        
        const imagesArray = (record.images || []).map(img => 
            `${config.apiUrl}/api/files/products/${record.id}/${img}`
        );
        
        return {
            id: record.id,
            name: record.name,
            slug: record.slug,
            price: parseInt(record.price),
            description: record.description,
            brand: record.brand,
            warranty: record.warranty,
            quantity: parseInt(record.quantity),
            phone: record.phone,
            image: imageUrl,
            images: imagesArray,
            features: record.features,
            is_sold: record.is_sold,
            return: record.return,
            shipping: record.shipping,
        };
    } catch (error) {
        console.error('Product fetch error:', error);
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Failed to fetch product'
        });
    }
});