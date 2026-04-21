<template>
    <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <NuxtLink to="/" class="flex items-center gap-2">
                <div
                    class="w-8 h-8 bg-linear-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-lg">◆</span>
                </div>
                <h1 class="text-2xl font-bold text-white tracking-tight">{{ store }}</h1>
            </NuxtLink>
            <nav class="flex items-center gap-6">
                <NuxtLink to="/" class="text-slate-300 hover:text-white transition-colors">Shop</NuxtLink>
                <NuxtLink to="/about" class="text-slate-300 hover:text-white transition-colors">About</NuxtLink>
            </nav>
        </div>
    </header>
</template>
<script setup>
const config = useRuntimeConfig();
const store = config.public.store;
</script>