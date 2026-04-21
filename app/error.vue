<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
    <div class="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
        <Header />

        <div class="flex-1 flex items-center justify-center px-6 py-20">
            <div class="text-center max-w-2xl">
                <div class="mb-8">
                    <div
                        class="text-9xl font-bold bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4">
                        404
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                        Oops! Page Not Found
                    </h2>
                </div>

                <p class="text-xl text-slate-400 mb-4">
                    The product or page you're looking for doesn't exist.
                </p>

                <p class="text-slate-500 mb-12">
                    It might have been removed, or the link might be broken. Let's get you back on track.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <NuxtLink to="/"
                        class="px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                        Back to Home
                    </NuxtLink>
                    <button @click="$router.go(-1)"
                        class="px-8 py-4 border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 font-bold text-lg rounded-lg transition-all duration-300">
                        Go Back
                    </button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>