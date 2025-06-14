
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CommonWarningModal': typeof import("../components/common/warningModal.vue")['default']
    'LayoutsFooter': typeof import("../components/layouts/footer.vue")['default']
    'LayoutsHeader': typeof import("../components/layouts/header.vue")['default']
    'PagesContract': typeof import("../components/pages/contract.vue")['default']
    'PagesInfo': typeof import("../components/pages/info.vue")['default']
    'PagesProduct': typeof import("../components/pages/product.vue")['default']
    'PagesReview': typeof import("../components/pages/review.vue")['default']
    'PagesZone': typeof import("../components/pages/zone.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCommonWarningModal': LazyComponent<typeof import("../components/common/warningModal.vue")['default']>
    'LazyLayoutsFooter': LazyComponent<typeof import("../components/layouts/footer.vue")['default']>
    'LazyLayoutsHeader': LazyComponent<typeof import("../components/layouts/header.vue")['default']>
    'LazyPagesContract': LazyComponent<typeof import("../components/pages/contract.vue")['default']>
    'LazyPagesInfo': LazyComponent<typeof import("../components/pages/info.vue")['default']>
    'LazyPagesProduct': LazyComponent<typeof import("../components/pages/product.vue")['default']>
    'LazyPagesReview': LazyComponent<typeof import("../components/pages/review.vue")['default']>
    'LazyPagesZone': LazyComponent<typeof import("../components/pages/zone.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CommonWarningModal: typeof import("../components/common/warningModal.vue")['default']
export const LayoutsFooter: typeof import("../components/layouts/footer.vue")['default']
export const LayoutsHeader: typeof import("../components/layouts/header.vue")['default']
export const PagesContract: typeof import("../components/pages/contract.vue")['default']
export const PagesInfo: typeof import("../components/pages/info.vue")['default']
export const PagesProduct: typeof import("../components/pages/product.vue")['default']
export const PagesReview: typeof import("../components/pages/review.vue")['default']
export const PagesZone: typeof import("../components/pages/zone.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCommonWarningModal: LazyComponent<typeof import("../components/common/warningModal.vue")['default']>
export const LazyLayoutsFooter: LazyComponent<typeof import("../components/layouts/footer.vue")['default']>
export const LazyLayoutsHeader: LazyComponent<typeof import("../components/layouts/header.vue")['default']>
export const LazyPagesContract: LazyComponent<typeof import("../components/pages/contract.vue")['default']>
export const LazyPagesInfo: LazyComponent<typeof import("../components/pages/info.vue")['default']>
export const LazyPagesProduct: LazyComponent<typeof import("../components/pages/product.vue")['default']>
export const LazyPagesReview: LazyComponent<typeof import("../components/pages/review.vue")['default']>
export const LazyPagesZone: LazyComponent<typeof import("../components/pages/zone.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.4_@parcel+watcher@2.5.1_@types+node@22.15.21_db0@0.3.2_ioredis@5.6.1_lightningcss@1_3yb5plev6orbwxx63burgakjou/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
