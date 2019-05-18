// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import { NgModule } from '@angular/core';
import { AddonModVPlayerComponentsModule } from './components/components.module';
import { AddonModVPlayerModuleHandler } from './providers/module-handler';
import { AddonModVPlayerProvider } from './providers/vplayer';
import { AddonModVPlayerPrefetchHandler } from './providers/prefetch-handler';
import { AddonModVPlayerLinkHandler } from './providers/link-handler';
import { AddonModVPlayerListLinkHandler } from './providers/list-link-handler';
import { AddonModVPlayerPluginFileHandler } from './providers/pluginfile-handler';
import { AddonModVPlayerHelperProvider } from './providers/helper';
import { CoreContentLinksDelegate } from '@core/contentlinks/providers/delegate';
import { CoreCourseModuleDelegate } from '@core/course/providers/module-delegate';
import { CoreCourseModulePrefetchDelegate } from '@core/course/providers/module-prefetch-delegate';
import { CorePluginFileDelegate } from '@providers/plugin-file-delegate';

// List of providers (without handlers).
export const ADDON_MOD_PAGE_PROVIDERS: any[] = [
    AddonModVPlayerProvider,
    AddonModVPlayerHelperProvider
];

@NgModule({
    declarations: [
    ],
    imports: [
        AddonModVPlayerComponentsModule
    ],
    providers: [
        AddonModVPlayerProvider,
        AddonModVPlayerHelperProvider,
        AddonModVPlayerModuleHandler,
        AddonModVPlayerPrefetchHandler,
        AddonModVPlayerLinkHandler,
        AddonModVPlayerListLinkHandler,
        AddonModVPlayerPluginFileHandler
    ]
})
export class AddonModVPlayerModule {
    constructor(moduleDelegate: CoreCourseModuleDelegate, moduleHandler: AddonModVPlayerModuleHandler,
            prefetchDelegate: CoreCourseModulePrefetchDelegate, prefetchHandler: AddonModVPlayerPrefetchHandler,
            contentLinksDelegate: CoreContentLinksDelegate, linkHandler: AddonModVPlayerLinkHandler,
            pluginfileDelegate: CorePluginFileDelegate, pluginfileHandler: AddonModVPlayerPluginFileHandler,
            listLinkHandler: AddonModVPlayerListLinkHandler) {

        moduleDelegate.registerHandler(moduleHandler);
        prefetchDelegate.registerHandler(prefetchHandler);
        contentLinksDelegate.registerHandler(linkHandler);
        contentLinksDelegate.registerHandler(listLinkHandler);
        pluginfileDelegate.registerHandler(pluginfileHandler);
    }
}
