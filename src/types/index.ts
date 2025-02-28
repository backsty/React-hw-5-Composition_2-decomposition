// Типы для новостного блока
export interface INewsCategory {
  id: number;
  name: string; // "Сейчас в СМИ" | "в Германии" | "Рекомендуем"
  active: boolean;
  date: string; // "31 июля, среда 02:32"
}

export interface INewsItem {
  id: number;
  title: string;
  link: string;
  source: {
    icon: string;
    name: string;
  };
}

// Типы для валют и котировок
export interface ICurrencyRate {
  id: string;
  name: string; // "USD", "EUR", "НЕФТЬ"
  value: number;
  change: string; // "+0.09", "+0.14", "+1.63%"
  source: string; // "MOEX"
}

// Тип для популярной статьи
export interface IFeaturedArticle {
  id: number;
  title: string; // "Работа над ошибками"
  subtitle: string; // "Смотрите на Яндексе и запоминайте"
  image: string; // URL изображения
  link: string;
}

// Типы для поисковых категорий
export interface ISearchCategory {
  id: number;
  name: string; // "Видео", "Картинки", "Новости" и т.д.
  link: string;
}

// Тип для поисковой строки
export interface ISearchBar {
  logo: {
    icon: string;
    link: string;
  };
  input: {
    placeholder: string;
    value: string;
  };
  keyboard: {
    icon: string;
    isVisible: boolean;
  };
  button: {
    text: string;
    type: 'submit';
  };
}

// Тип для поискового примера
export interface ISearchExample {
  text: string; // "фаза луны сегодня"
  description: string; // "Найдётся всё. Например, "
}

// Тип для рекламного баннера
export interface IBanner {
  id: number;
  title: string;
  image: string;
  link: string;
}

// Тип для погоды
export interface IWeather {
  current: string; // "+17°"
  morning: string; // "Утром +17"
  afternoon: string; // "днём +20"
  icon: string;
}

// Тип для посещаемых разделов
export interface IVisitedTopic {
  id: number;
  category: string; // "Недвижимость", "Маркет", "Авто.ру"
  title: string; // "о сталинках", "люстры и светильники"
  link: string;
}

// Тип для геолокации
export interface ILocation {
  id: number;
  title: string; // "Карта Германии"
  link: string;
}

// Тип для ТВ программы
export interface ITVProgram {
  id: number;
  time: string; // "02:00"
  title: string; // "ТНТ.best"
  channel: string; // "ТНТ International"
  icon: string;
}

// Тип для эфира
export interface IBroadcast {
  id: number;
  title: string; // "Управление как искусство"
  channel: string; // "Успех"
  icon?: string;
}
