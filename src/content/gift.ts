export type Memory = { year: string; title: string; memory: string };
export const giftConfig = {
  recipient: 'Lawal', creator: 'Ryad', friendshipYears: 8,
  characterName: 'L’Inspecteur Nounours',
  title: 'Le Gardien des Tempêtes', caseTitle: 'Dossier n° 0808 — L’Affaire des Souvenirs Disparus',
  memories: [
    {year:'01',title:'Les débuts',memory:'Le premier fil du dossier. À compléter avec ce qui a lancé l’histoire.'},
    {year:'02',title:'Les délires',memory:'Les détails absurdes qui finissent par compter plus qu’on ne le croit.'},
    {year:'03',title:'La confiance',memory:'Ce qui reste quand le reste commence à faire du bruit.'},
    {year:'04',title:'Les disputes',memory:'Pas des ruptures : des chemins pour mieux se retrouver.'},
    {year:'05',title:'Les projets',memory:'Même les idées impossibles ont besoin de quelqu’un qui écoute.'},
    {year:'06',title:'Les silences',memory:'Savoir rester là, sans forcément avoir à remplir la pièce.'},
    {year:'07',title:'Les retours',memory:'Le lien qui revient toujours à la surface.'},
    {year:'08',title:'La suite',memory:'Une porte ouverte sur toutes les aventures qui restent.'},
  ] satisfies Memory[],
  birthdayMessage: `Tu as connu mes colères, mes idées impossibles, mes moments de fatigue, mes changements d’humeur et beaucoup trop de projets commencés en même temps.\n\nTu aurais pu te lasser. Tu aurais pu répondre à mes tempêtes par d’autres tempêtes. Mais tu savais me laisser parler, me calmer, me faire rire ou simplement rester là.\n\nTu es drôle sans avoir besoin de forcer. Mature sans être ennuyeux. Sympa sans jouer un rôle.\n\nDepuis plus de huit ans, tu es bien plus qu’un pseudo dans mes messages. Tu es mon meilleur ami.\n\nAlors cette année, je ne voulais pas seulement t’envoyer un message d’anniversaire. Je voulais donner un monde au personnage que tu portes depuis toutes ces années.\n\nJoyeux anniversaire, Lawal.\nMerci d’avoir été l’Inspecteur de mes tempêtes.`,
};
export type GiftConfig = typeof giftConfig;
