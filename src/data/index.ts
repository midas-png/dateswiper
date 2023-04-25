interface ISections {
    id: number;
    name: string;
    dates: [number, number];
    events: [
        {
            date: number;
            description: string;
        }
    ];
}

export const SECTIONS = [
    {
        id: 1,
        name: "Наука",
        dates: [2000, 2019],
        events: [
            {
                date: 2003,
                description: "Toyota представила гибридный автомобиль.",
            },
            {
                date: 2007,
                description: "Изобретением 2007 года считается iPhone от Apple",
            },
            {
                date: 2012,
                description:
                    "Об открытии бозона Хиггса было сообщено 4 июля 2012 года на семинаре в ЦЕРНе",
            },
            {
                date: 2019,
                description: "Илон Маск анонсировал Tesla Cybertruck",
            },
        ],
    },
    {
        id: 2,
        name: "Литература",
        dates: [1857, 1870],
        events: [
            {
                date: 1857,
                description:
                    "Александр Островский закончил комедию «Доходное место».",
            },
            {
                date: 1859,
                description:
                    "В Москве в Малом театре состоялась премьера пьесы Александра Островского «Гроза».",
            },
            {
                date: 1870,
                description:
                    "В Пюи в возрасте 68 лет скончался французский писатель Александр Дюма",
            },
        ],
    },
    {
        id: 3,
        name: "Музыка",
        dates: [1774, 1830],
        events: [
            {
                date: 1774,
                description: "Опера снова становится театром",
            },
            {
                date: 1781,
                description:
                    "Моцарт становится первым компо­зи­тором, не состоящим на служ­бе",
            },
            {
                date: 1830,
                description: "Появление музыки с литературным содержанием",
            },
        ],
    },
    {
        id: 4,
        name: "Культура",
        dates: [1802, 1832],
        events: [
            {
                date: 1802,
                description: "Создано Министерство народного просвещения",
            },
            {
                date: 1811,
                description: "Открытие Царскосельского лицея",
            },
            {
                date: 1818,
                description:
                    "Сооружение в Москве памятника Минину и Пожарскому",
            },
            {
                date: 1825,
                description: "Построено здание Большого театра в Москве",
            },
            {
                date: 1832,
                description: "Открытие в Петербурге Александринского театра",
            },
        ],
    },
    {
        id: 5,
        name: "Астрономия",
        dates: [2014, 2016],
        events: [
            {
                date: 2014,
                description: "Открытие Ланиакеи, сверхскопления галактик",
            },
            {
                date: 2016,
                description:
                    "Открытие гравитационных волн, начало гравитационно-волновой астрономии",
            },
        ],
    },
    {
        id: 6,
        name: "Технологии",
        dates: [2002, 2010],
        events: [
            {
                date: 2017,
                description: "Произошло что-то крутое",
            },
            {
                date: 2017,
                description: "Произошло что-то крутое",
            },
        ],
    },
];