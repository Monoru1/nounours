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
  birthdayMessage: `Lawal,\n\nIl y a des gens qu’on rencontre. Et puis il y a ceux qui finissent par faire partie de la maison, même quand ils n’ont jamais eu les clés.\n\nDepuis plus de huit ans, tu as vu passer mes idées trop grandes, mes projets commencés à des heures impossibles, mes colères, mes doutes et ces moments où je ne savais pas très bien quoi faire de tout ce qui tournait dans ma tête. Tu aurais pu prendre tes distances. Tu aurais pu répondre au bruit par encore plus de bruit.\n\nMais tu as fait mieux : tu es resté.\n\nParfois avec une blague. Parfois avec une discussion qui remettait les choses à leur place. Parfois sans rien dire, juste assez présent pour que la journée pèse moins lourd. C’est rare, ça. Les gens qui ne cherchent pas à gagner la conversation, mais à garder le lien.\n\nTu es drôle sans avoir besoin de jouer un rôle. Mature sans jamais devenir ennuyeux. Tu sais être sérieux quand il le faut et absurde exactement au bon moment. Tu connais mes défauts, mes rêves un peu trop ambitieux et mes tempêtes — et tu n’as jamais réduit notre amitié à ça.\n\nLe Casino, le King, le Doc, le Mafieux, le Barman… tout ça a commencé comme nos délires. Mais au milieu de toutes ces histoires, l’Inspecteur Nounours a toujours été le personnage le plus vrai. Parce qu’au fond, il te ressemble : il observe, il comprend, il rassure, il protège discrètement ce qui compte.\n\nCette année, je ne voulais pas seulement t’envoyer “joyeux anniversaire”. Je voulais te laisser un endroit qui raconte ce que tu représentes pour moi. Un endroit où tu peux revenir, comme on revient à une table qu’on n’a jamais vraiment quittée.\n\nTu n’es pas seulement mon meilleur ami, Lawal.\nTu es un frère que j’ai eu la chance de choisir.\n\nJoyeux anniversaire.\nMerci d’être l’Inspecteur de mes tempêtes.`,
};
export type GiftConfig = typeof giftConfig;
