import "@src/scss/app.scss";
import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "payment";

createInertiaApp({
    title: () => `${appName}`,
    resolve: (name: string) => {
        return resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        );
    },
    setup({ el, App, props }: any) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});
