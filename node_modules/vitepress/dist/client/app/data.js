import { shallowRef, readonly, computed, inject } from 'vue';
import serializedSiteData from '@siteData';
import { resolveSiteDataByRoute } from '../shared';
import { withBase } from './utils';
export const dataSymbol = Symbol();
export const siteDataRef = shallowRef(parse(serializedSiteData));
function parse(data) {
    const parsed = JSON.parse(data);
    return (import.meta.env.DEV ? readonly(parsed) : parsed);
}
// hmr
if (import.meta.hot) {
    import.meta.hot.accept('/@siteData', (m) => {
        siteDataRef.value = parse(m.default);
    });
}
// per-app data
export function initData(route) {
    const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.path));
    return {
        site,
        theme: computed(() => site.value.themeConfig),
        page: computed(() => route.data),
        frontmatter: computed(() => route.data.frontmatter),
        lang: computed(() => site.value.lang),
        localePath: computed(() => {
            const { langs, lang } = site.value;
            const path = Object.keys(langs).find((langPath) => langs[langPath].lang === lang);
            return withBase(path || '/');
        }),
        title: computed(() => {
            return route.data.title
                ? route.data.title + ' | ' + site.value.title
                : site.value.title;
        }),
        description: computed(() => {
            return route.data.description || site.value.description;
        })
    };
}
export function useData() {
    const data = inject(dataSymbol);
    if (!data) {
        throw new Error('vitepress data not properly injected in app');
    }
    return data;
}
