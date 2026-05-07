<script setup lang="ts">
import type { PaginatedData, PaginationLink } from "@/types/pagination";
import { router } from "@inertiajs/vue3";

defineProps<{
    data: PaginatedData
}>()

const updatedPageNumber = (link: PaginationLink) => {
    if (!link.url) return
    
    router.visit(link.url, {
        preserveState: true,
        preserveScroll: true,
    })
}
</script>

<template>
    <div class="mx-auto max-w-7xl py-6">
        <div class="mx-auto max-w-none">
            <div class="overflow-hidden bg-white shadow sm:rounded-lg">
                <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div class="flex flex-1 justify-between sm:hidden" />
                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing
                                <!-- space -->
                                <span class="font-medium">
                                    {{ data.meta.from }}
                                </span>
                                <!-- space -->
                                to
                                <!-- space -->
                                <span class="font-medium">
                                    {{ data.meta.to }}
                                </span>
                                <!-- space -->
                                of
                                <!-- space -->
                                <span class="font-medium">
                                    {{ data.meta.total }}
                                </span>
                                <!-- space -->
                                results
                            </p>
                        </div>
                        <div>
                            <nav class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <button
                                    @click.prevent="updatedPageNumber(link)"
                                    v-for="(link, index) in data.meta.links"
                                    :key="index"
                                    :disabled="link.active || !link.url"
                                    class="relative inline-flex items-center border px-4 py-2 text-sm font-medium"
                                    :class="{
                                        'z-10 border-indigo-500 bg-indigo-50 text-indigo-600': link.active,
                                        'border-gray-300 bg-white text-gray-500 hover:bg-gray-50': !link.active,
                                    }"
                                >
                                    <span v-html="link.label"></span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
