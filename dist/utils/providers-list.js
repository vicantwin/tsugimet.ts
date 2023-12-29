"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROVIDERS_LIST = void 0;
const providers_1 = require("../providers");
/**
 * List of providers
 *
 * add new providers here (order does not matter)
 */
exports.PROVIDERS_LIST = {
    ANIME: [
        new providers_1.NineAnime(),
        new providers_1.AnimeFox(),
        new providers_1.AnimePahe(),
        new providers_1.Bilibili(),
        new providers_1.Crunchyroll(),
        new providers_1.Anify(),
        new providers_1.Gogoanime(),
        new providers_1.Zoro(),
        new providers_1.Marin(),
    ],
};
//# sourceMappingURL=providers-list.js.map