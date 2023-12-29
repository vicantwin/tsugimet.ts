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
        new providers_1.ANIME.NineAnime(),
        new providers_1.ANIME.AnimeFox(),
        new providers_1.ANIME.AnimePahe(),
        new providers_1.ANIME.Bilibili(),
        new providers_1.ANIME.Crunchyroll(),
        new providers_1.ANIME.Anify(),
        new providers_1.ANIME.Gogoanime(),
        new providers_1.ANIME.Zoro(),
        new providers_1.ANIME.Marin(),
    ],
};
//# sourceMappingURL=providers-list.js.map