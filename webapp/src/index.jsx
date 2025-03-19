import manifest from '@/manifest';

import Root from './root';

class Plugin {
    async initialize(registry) {
        registry.registerRootComponent(Root);
    }
}

window.registerPlugin(manifest.id, new Plugin());
