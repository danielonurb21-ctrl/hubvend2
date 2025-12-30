import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"index":{"outputDir":"./","lang":"pt","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/"}]},"en/login-copy":{"outputDir":"./en/login-copy","lang":"en","title":"","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/login-copy/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/login-copy/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/login-copy/"}]},"login-copy":{"outputDir":"./login-copy","lang":"pt","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/login-copy/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/login-copy/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/login-copy/"}]},"en/qr-code":{"outputDir":"./en/qr-code","lang":"en","title":"","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/qr-code/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/qr-code/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/qr-code/"}]},"qr-code":{"outputDir":"./qr-code","lang":"pt","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/qr-code/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/qr-code/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/qr-code/"}]},"en/login":{"outputDir":"./en/login","lang":"en","title":"","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/login/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/login/"}]},"login":{"outputDir":"./login","lang":"pt","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/login/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/login/"}]},"en/new-dashoboard":{"outputDir":"./en/new-dashoboard","lang":"en","title":"","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/new-dashoboard/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/new-dashoboard/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/new-dashoboard/"}]},"new-dashoboard":{"outputDir":"./new-dashoboard","lang":"pt","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/new-dashoboard/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/new-dashoboard/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/new-dashoboard/"}]},"en/new-dashoboard-copy":{"outputDir":"./en/new-dashoboard-copy","lang":"en","title":"","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/new-dashoboard-copy/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/new-dashoboard-copy/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/new-dashoboard-copy/"}]},"new-dashoboard-copy":{"outputDir":"./new-dashoboard-copy","lang":"pt","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/new-dashoboard-copy/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/new-dashoboard-copy/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/new-dashoboard-copy/"}]},"en/disparador":{"outputDir":"./en/disparador","lang":"en","title":"","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/disparador/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/disparador/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/disparador/"}]},"disparador":{"outputDir":"./disparador","lang":"pt","cacheVersion":7,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/disparador/"},{"rel":"alternate","hreflang":"en","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/en/disparador/"},{"rel":"alternate","hreflang":"pt","href":"https://86f88cb3-1e85-4481-802e-f8faa51f5e47.weweb-preview.io/disparador/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        structuredData: pageConfig.structuredData || null,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
