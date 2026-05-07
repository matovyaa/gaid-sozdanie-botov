export interface Section {
  id: string;
  title: string;
  emoji: string;
  content: React.ReactNode;
}

export const sections: Section[] = [
  {
    id: 'section-1',
    title: 'Зачем вообще читать этот гайд',
    emoji: '🎯',
    content: null // Will be defined in components
  },
  {
    id: 'section-2',
    title: 'Как работает ИИ на Frendi — коротко и понятно',
    emoji: '🤖',
    content: null
  },
  {
    id: 'section-3',
    title: 'Прежде чем начать: определись с концепцией',
    emoji: '💡',
    content: null
  },
  {
    id: 'section-4',
    title: 'Изображение персонажа',
    emoji: '🖼️',
    content: null
  },
  {
    id: 'section-5',
    title: 'Имя персонажа',
    emoji: '✍️',
    content: null
  },
  {
    id: 'section-6',
    title: 'Описание — 500 символов',
    emoji: '📝',
    content: null
  },
  {
    id: 'section-7',
    title: 'Инструкция — 2000 символов',
    emoji: '📋',
    content: null
  },
  {
    id: 'section-8',
    title: 'Тон персонажа — 100 символов',
    emoji: '🎭',
    content: null
  },
  {
    id: 'section-9',
    title: 'Первое сообщение — 150 символов',
    emoji: '💬',
    content: null
  },
  {
    id: 'section-10',
    title: 'Видимость персонажа',
    emoji: '👁️',
    content: null
  },
  {
    id: 'section-11',
    title: 'Как правильно распределить информацию между полями',
    emoji: '⚖️',
    content: null
  },
  {
    id: 'section-12',
    title: 'Система Сюжетов во Frendi',
    emoji: '📖',
    content: null
  },
  {
    id: 'section-13',
    title: 'Язык: на каком писать и почему',
    emoji: '🌍',
    content: null
  },
  {
    id: 'section-14',
    title: 'ОС против фандомного персонажа — в чём разница',
    emoji: '🆚',
    content: null
  },
  {
    id: 'section-15',
    title: 'Что работает, а что нет',
    emoji: '✅',
    content: null
  },
  {
    id: 'section-16',
    title: 'Частые ошибки и как их избежать',
    emoji: '⚠️',
    content: null
  },
  {
    id: 'section-17',
    title: 'Советы для тех, кто хочет глубже',
    emoji: '🚀',
    content: null
  }
];

export const tableOfContentsItems = [
  { id: 'section-1', title: 'Зачем вообще читать этот гайд', number: 1 },
  { id: 'section-2', title: 'Как работает ИИ на Frendi — коротко и понятно', number: 2 },
  { id: 'section-3', title: 'Прежде чем начать: определись с концепцией', number: 3 },
  { id: 'section-4', title: 'Изображение персонажа', number: 4 },
  { id: 'section-5', title: 'Имя персонажа', number: 5 },
  { id: 'section-6', title: 'Описание — 500 символов', number: 6 },
  { id: 'section-7', title: 'Инструкция — 2000 символов', number: 7 },
  { id: 'section-8', title: 'Тон персонажа — 100 символов', number: 8 },
  { id: 'section-9', title: 'Первое сообщение — 150 символов', number: 9 },
  { id: 'section-10', title: 'Видимость персонажа', number: 10 },
  { id: 'section-11', title: 'Как правильно распределить информацию между полями', number: 11 },
  { id: 'section-12', title: 'Система Сюжетов во Frendi', number: 12 },
  { id: 'section-13', title: 'Язык: на каком писать и почему', number: 13 },
  { id: 'section-14', title: 'ОС против фандомного персонажа — в чём разница', number: 14 },
  { id: 'section-15', title: 'Что работает, а что нет', number: 15 },
  { id: 'section-16', title: 'Частые ошибки и как их избежать', number: 16 },
  { id: 'section-17', title: 'Советы для тех, кто хочет глубже', number: 17 }
];
