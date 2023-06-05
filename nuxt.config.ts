// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
        typedPages: true,
    },
    typescript: {
        typeCheck: "build",
    },
    modules: [
        "nuxt-vitest"
    ],
    devtools: {
        enabled: true,
    }
})
