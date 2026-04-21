<template>
    <div class="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
        <Header />

        <main class="flex-1">
            <div class="max-w-4xl mx-auto px-6 py-20">
                <div class="mb-16">
                    <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        About <span
                            class="bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">{{ store
                            }}</span>
                    </h1>
                    <div class="h-1 w-24 bg-linear-to-r from-orange-400 to-orange-500 rounded"></div>
                </div>

                <div class="space-y-8 text-lg text-slate-300 leading-relaxed">
                    <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                        <h2 class="text-3xl font-bold text-white mb-4">Hello, I'm Ahmer</h2>
                        <p>
                            Welcome to my personal store! This is where I sell old and new quality products directly to
                            you. It’s
                            like OLX, but more personal — a small collection of items I trust, with care and attention
                            from a small business owner.
                        </p>
                    </div>

                    <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                        <h2 class="text-3xl font-bold text-white mb-4">What I Do</h2>
                        <p>
                            I carefully select and list items that meet quality standards. Whether you're looking for
                            electronics, gadgets, or other products, you'll find them here with honest descriptions and
                            fair prices.
                        </p>
                    </div>

                    <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                        <h2 class="text-3xl font-bold text-white mb-4">Want to Sell Your Items?</h2>
                        <p>
                            I can list your items on {{ store }} too! If you have products you'd like to sell but need
                            help
                            with listings and management, I'm happy to assist. Just reach out to me on WhatsApp and I
                            can discuss the details.
                        </p>
                    </div>

                    <div class="bg-green-600/10 border border-green-600 rounded-xl p-8">
                        <h2 class="text-3xl font-bold text-white mb-4">Service Area</h2>
                        <p class="text-green-400 font-semibold text-xl mb-2">
                            📍 Multan City Only
                        </p>
                        <p>
                            Currently, {{ store }} operates exclusively in <span
                                class="text-green-500 font-semibold">Multan</span>. I
                            focus on providing excellent service
                            within our city. For local delivery and support, you're in the right place!
                        </p>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <NuxtLink to="/"
                        class="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-semibold">
                        <span>←</span>
                        <span>Back to Shop</span>
                    </NuxtLink>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const store = config.public.store;
</script>