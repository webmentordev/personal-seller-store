<template>
    <footer class="border-t border-slate-800 mt-20 py-12">
        <div class="max-w-7xl mx-auto px-6 text-center text-slate-400">
            <p>© 2024 {{ store }}. Built for Multan, Pakistan 🇵🇰 with ❤️</p>
        </div>
    </footer>
</template>
<script setup>
const config = useRuntimeConfig();
const store = config.public.store;
</script>