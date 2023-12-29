import { ANIME } from '../providers';

/**
 * List of providers
 *
 * add new providers here (order does not matter)
 */
export const PROVIDERS_LIST = {
  ANIME: [
    new ANIME.NineAnime(),
    new ANIME.AnimeFox(),
    new ANIME.AnimePahe(),
    new ANIME.Bilibili(),
    new ANIME.Crunchyroll(),
    new ANIME.Anify(),
    new ANIME.Gogoanime(),
    new ANIME.Zoro(),
    new ANIME.Marin(),
  ],
};
