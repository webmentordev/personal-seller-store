<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
            <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div
                        class="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">◆</span>
                    </div>
                    <h1 class="text-2xl font-bold text-white tracking-tight">StoreHub</h1>
                </div>
                <nav class="flex items-center gap-6">
                    <button class="text-slate-300 hover:text-white transition-colors">Shop</button>
                    <button class="text-slate-300 hover:text-white transition-colors">About</button>
                </nav>
            </div>
        </header>

        <section class="max-w-7xl mx-auto px-6 py-20">
            <div class="text-center mb-16">
                <h2 class="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                    Discover Something
                    <span
                        class="bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                        Amazing</span>
                </h2>
                <p class="text-xl text-slate-400 max-w-2xl mx-auto">
                    Curated collection of premium products delivered right to your door
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <NuxtLink v-for="product in products" :key="product.id" :to="`/product/${product.slug}`"
                    class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                    <div class="relative h-48 bg-slate-900 overflow-hidden">
                        <img :src="product.image" :alt="product.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                ₨{{ product.price.toLocaleString() }}
                            </span>
                        </div>

                        <NuxtLink :to="`/product/${product.slug}`"
                            class="w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform group-hover:scale-105 block text-center">
                            View
                        </NuxtLink>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <footer class="border-t border-slate-800 mt-20 py-12">
            <div class="max-w-7xl mx-auto px-6 text-center text-slate-400">
                <p>© 2024 StoreHub. Built for Pakistan with ❤️</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
    {
        id: 1,
        slug: "premium-wireless-headphones",
        name: "Premium Wireless Headphones",
        price: 8999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
        phone: "923001234567"
    },
    {
        id: 2,
        slug: "smart-watch-pro",
        name: "Smart Watch Pro",
        price: 10999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop",
        phone: "923002234567"
    },
    {
        id: 3,
        slug: "4k-usb-camera",
        name: "4K USB Camera",
        price: 5999,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=400&fit=crop",
        phone: "923003234567"
    },
    {
        id: 4,
        slug: "portable-ssd-1tb",
        name: "Portable SSD 1TB",
        price: 7999,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=400&fit=crop",
        phone: "923004234567"
    },
    {
        id: 5,
        slug: "mechanical-keyboard-rgb",
        name: "Mechanical Keyboard RGB",
        price: 6999,
        image: "https://images.unsplash.com/photo-1587829191301-e8055a6e5f7b?w=500&h=400&fit=crop",
        phone: "923005234567"
    },
    {
        id: 6,
        slug: "led-ring-light-pro",
        name: "LED Ring Light Pro",
        price: 3999,
        image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop",
        phone: "923006234567"
    },
    {
        id: 7,
        slug: "usb-c-hub-adapter",
        name: "USB-C Hub Adapter",
        price: 2999,
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=400&fit=crop",
        phone: "923007234567"
    },
    {
        id: 8,
        slug: "premium-phone-stand",
        name: "Premium Phone Stand",
        price: 1799,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c3ff86e89?w=500&h=400&fit=crop",
        phone: "923008234567"
    }
]);
</script>