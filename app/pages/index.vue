<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <!-- Header -->
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
                    <button class="relative group">
                        <span class="text-slate-300 group-hover:text-white transition-colors">Cart</span>
                        <span
                            class="absolute -top-2 -right-3 w-5 h-5 bg-orange-500 rounded-full text-xs text-white flex items-center justify-center font-bold">0</span>
                    </button>
                </nav>
            </div>
        </header>

        <!-- Hero Section -->
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

            <!-- Products Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <nuxt-link v-for="product in products" :key="product.id" :to='product.url'
                    class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                    <!-- Product Image -->
                    <div class="relative h-48 bg-slate-900 overflow-hidden">
                        <img :src="product.image" :alt="product.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div
                            class="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {{ product.discount }}% OFF
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <h3
                            class="text-white font-semibold text-lg mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                            {{ product.name }}
                        </h3>

                        <div class="flex items-center gap-2 mb-4">
                            <span class="text-orange-400 font-bold text-xl">
                                ₨{{ product.discountedPrice.toLocaleString() }}
                            </span>
                            <span class="text-slate-500 line-through text-sm">
                                ₨{{ product.originalPrice.toLocaleString() }}
                            </span>
                        </div>

                        <div class="flex items-center gap-1 mb-4">
                            <span v-for="i in 5" :key="i" class="text-yellow-400 text-sm">
                                {{ i <= product.rating ? '★' : '☆' }} </span>
                                    <span class="text-slate-400 text-xs ml-2">({{ product.reviews }})</span>
                        </div>

                        <button
                            class="w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform group-hover:scale-105">
                            Add to Cart
                        </button>
                    </div>
                </nuxt-link>
            </div>
        </section>

        <!-- Footer -->
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
        name: "Premium Wireless Headphones",
        originalPrice: 12999,
        discountedPrice: 8999,
        discount: 31,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
        url: "/product/premium-wireless-headphones",
        rating: 5,
        reviews: 248
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        originalPrice: 15999,
        discountedPrice: 10999,
        discount: 31,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop",
        url: "/product/premium-wireless-headphones",
        rating: 4,
        reviews: 156
    },
    {
        id: 3,
        name: "4K USB Camera",
        originalPrice: 8999,
        discountedPrice: 5999,
        discount: 33,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=400&fit=crop",
        url: "/product/premium-wireless-headphones",
        rating: 5,
        reviews: 312
    },
    {
        id: 4,
        name: "Portable SSD 1TB",
        originalPrice: 11999,
        discountedPrice: 7999,
        discount: 33,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=400&fit=crop",
        url: "/product/premium-wireless-headphones",
        rating: 5,
        reviews: 489
    },
    {
        id: 5,
        name: "Mechanical Keyboard RGB",
        originalPrice: 9999,
        discountedPrice: 6999,
        discount: 30,
        image: "https://images.unsplash.com/photo-1587829191301-e8055a6e5f7b?w=500&h=400&fit=crop",
        url: "/product/premium-wireless-headphones",
        rating: 4,
        reviews: 201
    },
    {
        id: 6,
        name: "LED Ring Light Pro",
        originalPrice: 5999,
        discountedPrice: 3999,
        discount: 33,
        image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop",
        url: "/product/premium-wireless-headphones",
        rating: 5,
        reviews: 567
    },
    {
        id: 7,
        name: "USB-C Hub Adapter",
        originalPrice: 4999,
        discountedPrice: 2999,
        discount: 40,
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=400&fit=crop",
        url: "/product/premium-wireless-headphones",
        rating: 4,
        reviews: 123
    },
    {
        id: 8,
        name: "Premium Phone Stand",
        originalPrice: 2999,
        discountedPrice: 1799,
        discount: 40,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c3ff86e89?w=500&h=400&fit=crop",
        url: "/product/premium-wireless-headphones",
        rating: 5,
        reviews: 789
    }
]);
</script>