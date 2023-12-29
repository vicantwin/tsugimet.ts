import {
  NineAnime,
  AnimeFox,
  AnimePahe,
  Bilibili,
  Crunchyroll,
  Anify,
  Gogoanime,
  Zoro,
  Marin,
} from '../providers';

/**
 * List of providers
 *
 * add new providers here (order does not matter)
 */
export const PROVIDERS_LIST = {
  ANIME: [
    new NineAnime(),
    new AnimeFox(),
    new AnimePahe(),
    new Bilibili(),
    new Crunchyroll(),
    new Anify(),
    new Gogoanime(),
    new Zoro(),
    new Marin(),
  ],
};
