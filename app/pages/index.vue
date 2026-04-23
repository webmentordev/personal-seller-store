<template>
    <div class="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <Header />

        <section class="max-w-7xl mx-auto px-6 py-20">
            <div class="text-center mb-16">
                <h2 class="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                    Discover Something
                    <span
                        class="bg-linear-to-r from-amber-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                        Amazing</span>
                </h2>
                <p class="text-xl text-slate-400 max-w-2xl mx-auto">
                    Curated collection of premium products delivered right to your door
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <NuxtLink v-for="product in products" :to="`/product/${product.slug}`" :key="product.id"
                    class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                    <div class="relative h-48 bg-slate-900 overflow-hidden">
                        <img :src="product.image" :alt="product.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div
                            class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div
                            class="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Available
                        </div>
                    </div>

                    <div class="p-4">
                        <h3
                            class="text-white font-semibold text-lg mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                            {{ product.name }}
                        </h3>

                        <div class="flex items-center gap-2 mb-4">
                            <span class="text-orange-400 font-bold text-xl">
                                PKR {{ product.price.toLocaleString() }}
                            </span>
                        </div>

                        <span
                            class="w-full py-2 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform group-hover:scale-105 block text-center">View</span>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script setup>
const products = ref([]);
const data = await $fetch('/api/products')
products.value = data;

useSeoMeta({
    title: 'StoreHubMultan - Buy & Sell used items in multan, Pakistan',
    ogTitle: 'StoreHubMultan - Buy & Sell used items in multan, Pakistan',
    description: 'Buy and sell used items in Multan, Pakistan. Discover great deals on furniture, electronics, clothing, and more. Fast, safe, and easy online marketplace for secondhand goods.',
    ogDescription: 'Buy and sell used items in Multan, Pakistan. Discover great deals on furniture, electronics, clothing, and more. Fast, safe, and easy online marketplace for secondhand goods.',
    ogImage: '/app-store.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'StoreHubMultan - Buy & Sell used items in multan, Pakistan',
    twitterDescription: 'Buy and sell used items in Multan, Pakistan. Discover great deals on secondhand goods online.',
    keywords: 'buy used items, sell used items, Multan, Pakistan, secondhand marketplace, classified ads',
})
</script>