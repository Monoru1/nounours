export type Memory = { year: string; title: string; memory: string; private?: boolean };
export const giftConfig = {
  recipient: 'Lawal', creator: 'Ryad', friendshipYears: 8,
  characterName: 'L’Inspecteur Nounours',
  caseTitle: 'L’Affaire des Souvenirs Disparus',
  memories: [
    { year: '2018', title: 'Le début de l’enquête', memory: 'À compléter avec votre premier vrai souvenir partagé.' },
    { year: '2019', title: 'Dossier classé… presque', memory: 'Un détail, une blague ou une référence que vous seuls comprendrez.' },
    { year: '2020', title: 'La piste continue', memory: 'À compléter avec un moment qui mérite d’être gardé.' },
    { year: '2021', title: 'Archives sensibles', memory: 'À compléter avec une aventure ou un délire commun.' },
    { year: '2022', title: 'Témoin fiable', memory: 'À compléter avec ce qui a rendu cette année unique.' },
    { year: '2023', title: 'Une année de plus', memory: 'À compléter avec une anecdote, même minuscule.' },
    { year: '2024', title: 'Le fil rouge', memory: 'À compléter avec un projet, un départ ou un retour.' },
    { year: '2025', title: 'L’enquête continue', memory: 'À compléter avec le prochain souvenir à protéger.' },
  ] satisfies Memory[],
  birthdayMessage: `Huit années, des milliers de messages, des délires, des projets et probablement quelques enquêtes jamais résolues.\n\nTon pseudo aurait pu n’être qu’un nom. Il est devenu un personnage. Et aujourd’hui, ce personnage méritait son propre monde.\n\nJoyeux anniversaire Lawal.\nL’enquête continue.`,
};
export type GiftConfig = typeof giftConfig;
