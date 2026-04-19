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
                    <NuxtLink to="/" class="text-slate-300 hover:text-white transition-colors">Shop</NuxtLink>
                    <button class="text-slate-300 hover:text-white transition-colors">About</button>
                </nav>
            </div>
        </header>

        <div class="max-w-7xl mx-auto px-6 py-12">
            <NuxtLink to="/"
                class="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-8">
                <span>←</span>
                <span>Back to Shop</span>
            </NuxtLink>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div
                    class="flex items-center justify-center bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden aspect-square">
                    <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
                </div>

                <div class="flex flex-col justify-between">
                    <div>
                        <div class="mb-4">
                            <span
                                class="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Available
                            </span>
                            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ product.name }}</h1>

                            <div class="flex items-center gap-4 mb-8">
                                <span class="text-4xl font-bold text-orange-400">
                                    ₨{{ product.price.toLocaleString() }}
                                </span>
                            </div>

                            <p class="text-slate-300 text-lg leading-relaxed mb-8">
                                {{ product.description }}
                            </p>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <button @click="showContact = !showContact"
                            class="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                            <span class="text-2xl">📱</span>
                            <span>Contact on WhatsApp</span>
                        </button>
                        <div v-if="showContact"
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
                                <span>Availability:</span>
                                <span class="text-white font-semibold">Ships in 2-3 days</span>
                            </li>
                            <li class="flex justify-between text-slate-300">
                                <span>Return Policy:</span>
                                <span class="text-white font-semibold">30 days</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-4">Features</h3>
                        <ul class="space-y-2">
                            <li v-for="(feature, idx) in product.features" :key="idx"
                                class="flex items-start gap-3 text-slate-300">
                                <span class="text-orange-400 font-bold mt-0.5">✓</span>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="border-t border-slate-800 pt-12">
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
                                <span class="text-orange-400 font-bold">₨{{ related.price.toLocaleString() }}</span>
                            </div>
                            <NuxtLink :to="`/product/${related.slug}`"
                                class="w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg text-sm transition-all duration-300 transform group-hover:scale-105 block text-center">
                                View
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="border-t border-slate-800 mt-20 py-12">
            <div class="max-w-7xl mx-auto px-6 text-center text-slate-400">
                <p>© 2024 StoreHub. Built for Pakistan with ❤️</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showContact = ref(false)

const formatPhone = (phone) => {
    if (!phone) return ''
    const phoneStr = phone.toString()
    if (phoneStr.startsWith('92')) {
        return '+92 ' + phoneStr.slice(2, 5) + ' ' + phoneStr.slice(5, 8) + ' ' + phoneStr.slice(8)
    }
    return phone
}

const allProducts = [
    {
        id: 1,
        slug: 'premium-wireless-headphones',
        name: "Premium Wireless Headphones",
        price: 8999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
        phone: "923001234567",
        brand: "AudioPro",
        warranty: "2 Years",
        description: "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort design for all-day wear.",
        features: [
            "Active Noise Cancellation (ANC)",
            "30-hour battery life",
            "Bluetooth 5.0 connectivity",
            "Premium memory foam padding",
            "Built-in microphone for calls",
            "Foldable design with carrying case"
        ]
    },
    {
        id: 2,
        slug: 'smart-watch-pro',
        name: "Smart Watch Pro",
        price: 10999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
        phone: "923002234567",
        brand: "TechWear",
        warranty: "1 Year",
        description: "Stay connected with our advanced smartwatch. Monitor your health, track fitness activities, and manage notifications all from your wrist with our intuitive interface.",
        features: [
            "Heart rate monitoring",
            "Sleep tracking",
            "GPS tracking",
            "Water resistant (50m)",
            "7-day battery life",
            "Multiple watch faces"
        ]
    },
    {
        id: 3,
        slug: '4k-usb-camera',
        name: "4K USB Camera",
        price: 5999,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=800&fit=crop",
        phone: "923003234567",
        brand: "VisualTech",
        warranty: "1 Year",
        description: "Perfect for content creators and professionals. Capture stunning 4K video with automatic focus and low-light performance. Plug-and-play USB connection makes setup effortless.",
        features: [
            "4K video recording at 30fps",
            "1080p at 60fps",
            "Autofocus technology",
            "Low-light performance",
            "USB plug-and-play",
            "Compatible with all platforms"
        ]
    },
    {
        id: 4,
        slug: 'portable-ssd-1tb',
        name: "Portable SSD 1TB",
        price: 7999,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=800&fit=crop",
        phone: "923004234567",
        brand: "StorageMax",
        warranty: "3 Years",
        description: "Ultra-fast external storage with 1TB capacity. Perfect for backing up photos, videos, and documents. Its rugged design protects your data wherever you go.",
        features: [
            "1TB storage capacity",
            "USB-C 3.1 Gen 2",
            "550MB/s read speed",
            "Rugged & shockproof design",
            "Compact form factor",
            "Works with Mac & Windows"
        ]
    },
    {
        id: 5,
        slug: 'mechanical-keyboard-rgb',
        name: "Mechanical Keyboard RGB",
        price: 6999,
        image: "https://images.unsplash.com/photo-1587829191301-e8055a6e5f7b?w=800&h=800&fit=crop",
        phone: "923005234567",
        brand: "KeyMaster",
        warranty: "2 Years",
        description: "Mechanical keyboard with RGB lighting for gaming and productivity. Features responsive switches and customizable backlighting to suit your style.",
        features: [
            "Mechanical blue switches",
            "RGB backlit keys",
            "Customizable macros",
            "Wired USB connection",
            "Aluminum frame",
            "N-key rollover"
        ]
    },
    {
        id: 6,
        slug: 'led-ring-light-pro',
        name: "LED Ring Light Pro",
        price: 3999,
        image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=800&fit=crop",
        phone: "923006234567",
        brand: "LightStudio",
        warranty: "1 Year",
        description: "Professional LED ring light for photography and streaming. Adjustable brightness and color temperature for perfect lighting in any situation.",
        features: [
            "10-inch diameter ring",
            "3-color temperature modes",
            "Adjustable brightness (1-100%)",
            "Phone holder included",
            "USB powered",
            "360° rotation stand"
        ]
    },
    {
        id: 7,
        slug: 'usb-c-hub-adapter',
        name: "USB-C Hub Adapter",
        price: 2999,
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&h=800&fit=crop",
        phone: "923007234567",
        brand: "ConnectHub",
        warranty: "1 Year",
        description: "Expand your USB-C port with multiple connections. Supports HDMI, USB 3.0, and power delivery for comprehensive connectivity.",
        features: [
            "7-in-1 adapter",
            "HDMI 4K output",
            "USB 3.0 ports",
            "100W power delivery",
            "SD card reader",
            "Compact design"
        ]
    },
    {
        id: 8,
        slug: 'premium-phone-stand',
        name: "Premium Phone Stand",
        price: 1799,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c3ff86e89?w=800&h=800&fit=crop",
        phone: "923008234567",
        brand: "HoldTech",
        warranty: "1 Year",
        description: "Adjustable phone stand for desk and bed. Perfect for video calls, streaming, and watching content with hands-free convenience.",
        features: [
            "Adjustable angles (0-180°)",
            "Non-slip rubber pads",
            "Universal phone compatibility",
            "Aluminum construction",
            "Portable & lightweight",
            "Stable base design"
        ]
    }
]

const product = computed(() => {
    return allProducts.find(p => p.slug === route.params.slug) || allProducts[0]
})

const relatedProducts = computed(() => {
    return allProducts.filter(p => p.id !== product.value.id).slice(0, 4)
})
</script>