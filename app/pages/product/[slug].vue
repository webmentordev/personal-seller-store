<template>
    <div class="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <Header />

        <div v-if="!product" class="max-w-7xl mx-auto px-6 py-12">
            <p class="text-white text-center">Loading...</p>
        </div>

        <div v-else class="max-w-7xl mx-auto px-6 py-12">
            <NuxtLink to="/"
                class="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-8">
                <span>←</span>
                <span>Back to Shop</span>
            </NuxtLink>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                    <div
                        class="flex items-center justify-center bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden aspect-square mb-4">
                        <img v-if="selectedImage" :src="selectedImage" :alt="product.name"
                            class="w-full h-full object-cover" />
                        <span v-else class="text-slate-400">No image</span>
                    </div>
                    <div v-if="product.images && product.images.length" class="flex gap-3 overflow-x-auto pb-2">
                        <button @click="selectedImage = product.image" :class="[
                            'shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                            selectedImage === product.image
                                ? 'border-orange-500'
                                : 'border-slate-700 hover:border-slate-600'
                        ]">
                            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
                        </button>

                        <button v-for="(img, idx) in product.images" :key="idx" @click="selectedImage = img" :class="[
                            'shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                            selectedImage === img
                                ? 'border-orange-500'
                                : 'border-slate-700 hover:border-slate-600'
                        ]">
                            <img :src="img" :alt="`${product.name} ${idx + 1}`" class="w-full h-full object-cover" />
                        </button>
                    </div>
                </div>

                <div class="flex flex-col justify-between">
                    <div>
                        <div class="mb-4">
                            <span
                                class="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                {{ product.is_sold ? 'Sold Out' : 'Available' }}
                            </span>
                            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ product.name }}</h1>

                            <div class="flex items-center gap-4 mb-8">
                                <span class="text-4xl font-bold text-orange-400">
                                    PKR {{ product.price.toLocaleString() }}
                                </span>
                            </div>

                            <p class="text-slate-300 text-lg leading-relaxed mb-8">
                                {{ product.description }}
                            </p>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <button @click="showContact = !showContact" :disabled="product.is_sold"
                            class="w-full py-4 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                            <span class="text-2xl">📱</span>
                            <span>{{ product.is_sold ? 'Sold Out' : 'Contact on WhatsApp' }}</span>
                        </button>
                        <div v-if="showContact && !product.is_sold"
                            class="bg-slate-800/50 border border-green-600 rounded-lg p-4 text-center">
                            <p class="text-slate-400 text-sm mb-2">Contact Number</p>
                            <p class="text-white font-bold text-2xl">{{ formatPhone(product.phone) }}</p>
                            <a :href="`https://wa.me/${product.phone}`" target="_blank" rel="noopener noreferrer"
                                class="mt-4 inline-block w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                                Open WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t border-slate-800 pt-12 mb-16">
                <h2 class="text-3xl font-bold text-white mb-8">Product Details</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-4">Specifications</h3>
                        <ul class="space-y-3">
                            <li class="flex justify-between text-slate-300 pb-3 border-b border-slate-800">
                                <span>Brand:</span>
                                <span class="text-white font-semibold">{{ product.brand }}</span>
                            </li>
                            <li class="flex justify-between text-slate-300 pb-3 border-b border-slate-800">
                                <span>Warranty:</span>
                                <span class="text-white font-semibold">{{ product.warranty }}</span>
                            </li>
                            <li class="flex justify-between text-slate-300 pb-3 border-b border-slate-800">
                                <span>Quantity:</span>
                                <span class="text-white font-semibold">{{ product.quantity }}</span>
                            </li>
                            <li class="flex justify-between text-slate-300 pb-3 border-b border-slate-800">
                                <span>Return Policy:</span>
                                <span class="text-white font-semibold">{{ product.return }}</span>
                            </li>
                            <li class="flex justify-between text-slate-300">
                                <span>Shipping:</span>
                                <span class="text-white font-semibold">{{ product.shipping }}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-4">Features</h3>
                        <ul class="space-y-2">
                            <li v-for="(feature, idx) in parsedFeatures" :key="idx"
                                class="flex items-start gap-3 text-slate-300">
                                <span class="text-orange-400 font-bold mt-0.5">✓</span>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div v-if="relatedProducts.length" class="border-t border-slate-800 pt-12">
                <h2 class="text-3xl font-bold text-white mb-8">Related Products</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="related in relatedProducts" :key="related.id"
                        class="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer">
                        <div class="relative h-40 bg-slate-900 overflow-hidden">
                            <img :src="related.image" :alt="related.name"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div class="p-4">
                            <h3
                                class="text-white font-semibold text-sm mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                                {{ related.name }}
                            </h3>
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-orange-400 font-bold">PKR {{ related.price.toLocaleString() }}</span>
                            </div>
                            <NuxtLink :to="`/product/${related.slug}`"
                                class="w-full py-2 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg text-sm transition-all duration-300 transform group-hover:scale-105 block text-center">
                                View
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup>
const route = useRoute()
const showContact = ref(false)
const relatedProducts = ref([])
const product = ref(null)
const selectedImage = ref(null)

const formatPhone = (phone) => {
    if (!phone) return ''
    const phoneStr = phone.toString()
    if (phoneStr.startsWith('92')) {
        return '+92 ' + phoneStr.slice(2, 5) + ' ' + phoneStr.slice(5, 8) + ' ' + phoneStr.slice(8)
    }
    return phone
}

const parsedFeatures = computed(() => {
    if (!product.value?.features) return []
    return product.value.features
        .replace(/<[^>]*>/g, '')
        .split('\n')
        .map(f => f.trim())
        .filter(f => f.length > 0)
})

onMounted(async () => {
    try {
        const data = await $fetch('/api/product', {
            method: 'POST',
            body: {
                slug: route.params.slug
            }
        })
        if (!data) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Product not found',
                data: { slug: route.params.slug }
            })
        }
        product.value = data
        selectedImage.value = data.image
        const related = await $fetch('/api/products')
        relatedProducts.value = related.filter(p => p.id !== data.id).slice(0, 4)

    } catch (error) {
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.message || 'Failed to load product',
            fatal: true
        })
    }
})

watchEffect(() => {
    if (!product.value) return
    useSeoMeta({
        title: `${product.value.name} | Buy & Sell Online in Multan`,
        ogTitle: product.value.name,
        description: product.value.description?.slice(0, 160),
        ogDescription: product.value.description?.slice(0, 160),
        ogImage: product.value.image,
        twitterCard: 'summary_large_image',
        ogType: 'product',
        ogSiteName: 'My Store',
        twitterTitle: product.value.name,
        twitterDescription: product.value.description?.slice(0, 160),
        twitterImage: product.value.image,
    })
})
</script>