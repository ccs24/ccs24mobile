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

import { Injectable } from '@angular/core';
import { CoreContentLinksModuleListHandler } from '@core/contentlinks/classes/module-list-handler';
import { CoreContentLinksHelperProvider } from '@core/contentlinks/providers/helper';
import { TranslateService } from '@ngx-translate/core';
import { AddonModVPlayerProvider } from './vplayer';

/**
 * Handler to treat links to page list page.
 */
@Injectable()
export class AddonModVPlayerListLinkHandler extends CoreContentLinksModuleListHandler {
    name = 'AddonModVPlayerListLinkHandler';

    constructor(linkHelper: CoreContentLinksHelperProvider, translate: TranslateService,
            protected pageProvider: AddonModVPlayerProvider) {
        super(linkHelper, translate, 'AddonModVPlayer', 'vplayer');
    }

    /**
     * Check if the handler is enabled on a site level.
     *
     * @return {boolean|Promise<boolean>} Whether or not the handler is enabled on a site level.
     */
    isEnabled(): boolean | Promise<boolean> {
        return this.pageProvider.isPluginEnabled();
    }
}
