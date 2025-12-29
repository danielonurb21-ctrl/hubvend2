import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"86f88cb3-1e85-4481-802e-f8faa51f5e47","homePageId":"7530a951-3f2f-490f-8021-6250156ca66f","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"pt","default":true}],"background":{},"workflows":[],"pages":[{"id":"7530a951-3f2f-490f-8021-6250156ca66f","linkId":"7530a951-3f2f-490f-8021-6250156ca66f","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"6dbca6d7-8ddc-4b99-98f5-c913488ece9c","sectionTitle":"Main Container","linkId":"a6d0aa3a-120f-44db-976d-504432fd3ba7"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"25890333-c5fd-4a48-9b6e-42f51a4d25fb","linkId":"25890333-c5fd-4a48-9b6e-42f51a4d25fb","name":"Criar conta","folder":null,"paths":{"pt":"login-copy","default":"login-copy"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"60e60dba-faae-459b-bb9f-de4473389b87","sectionTitle":"Authentication Container","linkId":"07f6f7af-7c19-4065-bd00-45a0113fd69b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1db0471d-496d-4b34-a732-0059deff06d5","linkId":"1db0471d-496d-4b34-a732-0059deff06d5","name":"Login","folder":null,"paths":{"pt":"login","default":"login"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"dd4df124-f8bd-4eeb-b6db-c85f35d0ebd9","sectionTitle":"Authentication Container","linkId":"cf6eff0f-391a-4e81-9907-5726a1625df9"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d82750f0-a877-4be6-8b4e-d219321dab2d","linkId":"d82750f0-a877-4be6-8b4e-d219321dab2d","name":"new dashoboard","folder":null,"paths":{"pt":"new-dashoboard","default":"new-dashoboard"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"78d05dee-9ede-48db-a35f-36e2ba3daf09","sectionTitle":"Section","linkId":"7b0f8ff7-a207-470e-b6b9-d481f1966df1"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9a47b488-64ef-4c91-b6a6-6714d37e934c","linkId":"9a47b488-64ef-4c91-b6a6-6714d37e934c","name":"CRM3","folder":null,"paths":{"pt":"new-dashoboard-copy","default":"new-dashoboard-copy"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"db984703-f20c-476c-9b37-3bed4152f1b6","sectionTitle":"Bottom Nav","linkId":"af24dcb4-90fd-481f-9655-784c2dbac34e"},{"uid":"1e8c6242-56db-4857-9fdb-100f9fda5e59","sectionTitle":"Section","linkId":"e7824548-c131-4a1e-b38e-3440f4f99a76"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"822cb17a-8849-41f2-854f-8d40c2617515","linkId":"822cb17a-8849-41f2-854f-8d40c2617515","name":"Disparador","folder":null,"paths":{"pt":"disparador","default":"disparador"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"cfa19131-8e2a-4295-bbb0-db7d776a9c83","sectionTitle":"AI Sales Dispatcher Main","linkId":"30f3e41d-14ab-4f78-a09c-dc4b92859764"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 4;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
