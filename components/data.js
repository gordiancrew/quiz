export const storage = {
  data: {
    quests: [
      {
        name: "Прогулка по центру",
        final: true,
        description:"Приглашаем вас прогуляться по самому центру Минска. Протяжонность пути примерно 6-7 км и расчитано на 2-4 часа, маршрут образует кольцо, так что последняя локация будет недалеко от начала квеста.  Квест начинается от городской ратуши и содержит 9 локаций, в каждой из которых будет по 3 интересных вопроса. Приятного прохождения!! ",
        location: [
          {
            level: "1",
            locationName: "Городская ратуша",
            questions: [
              "  В сквере у ратуши, на одной из скамеек сидят создатели белорусской оперы: Винцент Дунин-Мартинкевич и Станислав Монюшко. На скульптуре есть информация о мастерах, кто создал ее. Во второй строчке этой информации возьми вторую и третью буквы, составь из них слово и запиши его. (Подсказка: это должно быть у тебя с собой).",
              "  В сквере у ратуши есть стеклянный купол холла. Посчитай и запиши количество стекол в нем. (Подсказка:число кратно 5).",
              "  Рядом с ратушей находится скульптура войта с ключем от города, посвещена получению Минском Магдебурского права в 1499 году. Человек держит ключ в правой руке, а в левой королевскую грамоту. В третьей строчке грамоты из первых четырех букв получается слово. Запиши его.(Подсказка: найдя это слово у тебя не должно возникнуть сомнений прав ли ты).",
            ],
            answers: ["ум", "40", "прав"],
            path: require("../assets/locations/loc1.png"),
          },
          {
            level: "2",
            locationName: "Собор Святого Духа",
            questions: [
              "  Недалеко от собора есть музыкальная скамейка, посвященная Михаилу Огинскому. Можешь присесть на нее и послушать хорошую музыку. Только вначале сосчитай количество деревянных деталей в сидении скамьи.(Подсказка: кратно 5)",
              "  Сзади собора есть мемориальная доска в честь двух очень известных людей. Запиши название страны, народ которой подарил Минску эту доску.",
              "  Возле собора есть обзорная площадка на город. Можешь постоять и полюбоваться.  А потом сосчитай количество одинаковых вазаобразных колонн в основании мраморной ограды.(подсказка: кратно 5)",
            ],
            answers: ["30", "Болгария", "65"],

            path: require("../assets/locations/loc2.png"),
          },
          {
            level: "3",
            locationName: "Троицкое предместье",
            questions: [
              '  Скульптура "Беларусам замежжа" посвещена белорусам, находящимся в других странах и представляет собой колесо на котором рушник с национальным орнаментом. Посмотри в самый центр этого колеса и увидешь фразу с восклицательным знаком. Запиши первое слово этой фразы (Возможно тебя так зовут).',
              '   Возле Предместья есть скульптура Язэпа Дроздовича, которого называют "белорусским Леонардо Да Винчи". Найди подпись автора этой скульптуры и запиши год создания композиции.',
              "  В центре Предместья есть филосовская скульптура изображающая девочку на очень символичном для Беларуси растении. Над головой у девочки птица. Напиши название птицы.",
            ],
            answers: ["Слава", "1990", "Сова"],
            path: require("../assets/locations/loc3.png"),
          },
          {
            level: "4",
            locationName: "Театр оперы и балета",
            questions: [
              "  Сколько ступенек нужно пройти чтобы  подняться по центральному сегменту лестницы к театру. (Подсказка: число кратно 3)",
              "  Театр украшен множеством муз, держащих в руках различные атрибуты оперы и балета. Какой музыкальный инструмент держит женщина, расположенная над подъездом номер 9?",
              "  Возле театра есть скульптура, на  которой изображены две балерины, отдыхающие на скамейке. В подписи автора есть 2 цифры. запиши их.",
            ],
            answers: ["21", "Бубен", "09"],
            path: require("../assets/locations/loc4.png"),
          },
          {
            level: "5",
            locationName: "Сквер Янки Купалы",
            questions: [
              "  По левую руку писателя, в 60 шагах Есть композиция скульптора Слободчикова с названием очень важного продукта. Напиши этот продукт.",
              "   В сквере, помимо писателя есть и памятник первопечатника. Найди его.И заодно посмотри в каком году она сделана.",
              "  В сквере есть фантан, где девушки запускают венки по реке в купальскую ночь. А сколько венков присутствует в композиции.",
            ],
            answers: ["хлеб", "1989", "8"],
            path: require("../assets/locations/loc5.png"),
          },
          {
            level: "6",
            locationName: "Площадь победы",
            questions: [
              "  На гранях монумента размещены бронзовые горельефы, раскрывающие идею памятника, созданные разными скульпторами. Как фамилия скульптора, на чьем горельефе присутствует партизан, стреляющий из пистолета?",
              " На площади расположены постаменты с названиями городов героев.  Какой город нанесен на постаменте между Мурманском и Новороссийском.",
              "  Переходе под площадью расположен светящийся венок в честь жертв войны, окруженный шестью колоннами. А сколько ножек приподнимают венок над полом?",
            ],
            answers: ["Глебов", "Тула", "9"],
            path: require("../assets/locations/loc6.png"),
          },
          {
            level: "7",
            locationName: "Цирк",
            questions: [
              "  На одной из скульптур перед зданием есть петух в жилетке. На какую цифру указывает минутная стрелка его часов?",
              "   У входа есть табличка о том что здание цирка сооружено в 1958 году. А как фамилия его архитектора?",
              "  Сколько круглых колонн перед входом?(Считая ту на которой лошадь с девочкой)",
            ],
            answers: ["11", "Жуков", "11"],
            path: require("../assets/locations/loc7.png"),
          },
          {
            level: "8",
            locationName: "Танк",
            questions: [
              "  Возле танка есть дом с двумя мемориальными досками. Одна из них посвящена писателю Новикову. А как фамилия второго уважаеммого человека",
              "  На танке есть трехзначный номер. Найди его и запиши в ответ",
              '  "Мальчик с лебедем" - легендарный фантан минска, находится в александровском сквере, что возле танка. После реконструкции на нем появились лягушки. А сколько их?',
            ],
            answers: ["Ливенцев", "492", "5"],
            path: require("../assets/locations/loc8.png"),
          },
          {
            level: "9",
            locationName: "Дворец профсоюзов",
            questions: [
              '  На октябрьской площади перед дворцом есть скульптура "Нулевой километр", на ней много различной информации, как информационной так и филосовской. Помимо сторон света, цитат на латыни и дорожных схем есть еще и стихи известного белорусского писателя. Напиши название животного из первых букв частей псевдонима автора',
              '  На скульптуре "Нулевой километр" есть помимо всего и гильда про литье, в центре гильды слово "Минск", а что за прилагательное сверху?',
              "  На углах крыши дворца есть скульптуры. Одна из них - Женщина держащая книгу с шестерёнкой на обложке. С какой стороны света угол с этой скульптурой относительно центра дворца",
            ],
            answers: ["як", "Отменное", "Восток"],
            path: require("../assets/locations/loc9.png"),
          },
        ],
      },
      {
        name: "Вокзал рядом",
        final:false,
        description:"Наверняка все мы приезжали в Минск на поезде, домой или в гости. Этот квест начинается со знакомого всем нам минского ж/д вокзала. Маршрут около 5 км и как всегда 9 локаций с тремя вопросами в каждой. Выходим из вагона и погнали!)",
        location: [
          {
            level: "1",
            locationName: "Вокзал",
            questions: [
              "  В сквере у ратуши, на одной из скамеек сидят создатели белорусской оперы: Винцент Дунин-Мартинкевич и Станислав Монюшко. На скульптуре есть информация о мастерах, кто создал ее. Во второй строчке этой информации возьми вторую и третью буквы, составь из них слово и запиши его. (Подсказка: это должно быть у тебя с собой).",
              "  В сквере у ратуши есть стеклянный купол холла. Посчитай и запиши количество стекол в нем. (Подсказка:число кратно 5).",
              "  Рядом с ратушей находится скульптура войта с ключем от города, посвещена получению Минском Магдебурского права в 1499 году. Человек держит ключ в правой руке, а в левой королевскую грамоту. В третьей строчке грамоты из первых четырех букв получается слово. Запиши его.(Подсказка: найдя это слово у тебя не должно возникнуть сомнений прав ли ты).",
            ],
            answers: ["ум", "40", "прав"],
            path: require("../assets/locations/quest2/loc1.png"),
          },
          {
            level: "2",
            locationName: "Ворота города",
            questions: [
              "  Недалеко от собора есть музыкальная скамейка, посвященная Михаилу Огинскому. Можешь присесть на нее и послушать хорошую музыку. Только вначале сосчитай количество деревянных деталей в сидении скамьи.(Подсказка: кратно 5)",
              "  Сзади собора есть мемориальная доска в честь двух очень известных людей. Запиши название страны, народ которой подарил Минску эту доску.",
              "  Возле собора есть обзорная площадка на город. Можешь постоять и полюбоваться.  А потом сосчитай количество одинаковых вазаобразных колонн в основании мраморной ограды.(подсказка: кратно 5)",
            ],
            answers: ["30", "Болгария", "65"],

            path: require("../assets/locations/quest2/loc2.png"),
          },
          {
            level: "3",
            locationName: "Михайловский сквер",
            questions: [
              '  Скульптура "Беларусам замежжа" посвещена белорусам, находящимся в других странах и представляет собой колесо на котором рушник с национальным орнаментом. Посмотри в самый центр этого колеса и увидешь фразу с восклицательным знаком. Запиши первое слово этой фразы (Возможно тебя так зовут).',
              '   Возле Предместья есть скульптура Язэпа Дроздовича, которого называют "белорусским Леонардо Да Винчи". Найди подпись автора этой скульптуры и запиши год создания композиции.',
              "  В центре Предместья есть филосовская скульптура изображающая девочку на очень символичном для Беларуси растении. Над головой у девочки птица. Напиши название птицы.",
            ],
            answers: ["Слава", "1990", "Сова"],
            path: require("../assets/locations/quest2/loc3.png"),
          },
          {
            level: "4",
            locationName: "Стадион Динамо",
            questions: [
              "  Сколько ступенек нужно пройти чтобы  подняться по центральному сегменту лестницы к театру. (Подсказка: число кратно 3)",
              "  Театр украшен множеством муз, держащих в руках различные атрибуты оперы и балета. Какой музыкальный инструмент держит женщина, расположенная над подъездом номер 9?",
              "  Возле театра есть скульптура, на  которой изображены две балерины, отдыхающие на скамейке. В подписи автора есть 2 цифры. запиши их.",
            ],
            answers: ["21", "Бубен", "09"],
            path: require("../assets/locations/quest2/loc4.png"),
          },
          {
            level: "5",
            locationName: "Национальный художественный музей",
            questions: [
              "  По левую руку писателя, в 60 шагах Есть композиция скульптора Слободчикова с названием очень важного продукта. Напиши этот продукт.",
              "   В сквере, помимо писателя есть и памятник первопечатника. Найди его.И заодно посмотри в каком году она сделана.",
              "  В сквере есть фантан, где девушки запускают венки по реке в купальскую ночь. А сколько венков присутствует в композиции.",
            ],
            answers: ["хлеб", "1989", "8"],
            path: require("../assets/locations/quest2/loc5.png"),
          },
          {
            level: "6",
            locationName: "ГУМ",
            questions: [
              "  На гранях монумента размещены бронзовые горельефы, раскрывающие идею памятника, созданные разными скульпторами. Как фамилия скульптора, на чьем горельефе присутствует партизан, стреляющий из пистолета?",
              " На площади расположены постаменты с названиями городов героев.  Какой город нанесен на постаменте между Мурманском и Новороссийском.",
              "  Переходе под площадью расположен светящийся венок в честь жертв войны, окруженный шестью колоннами. А сколько ножек приподнимают венок над полом?",
            ],
            answers: ["Глебов", "Тула", "9"],
            path: require("../assets/locations/quest2/loc6.png"),
          },
          {
            level: "7",
            locationName: "Главпочтампт",
            questions: [
              "  На одной из скульптур перед зданием есть петух в жилетке. На какую цифру указывает минутная стрелка его часов?",
              "   У входа есть табличка о том что здание цирка сооружено в 1958 году. А как фамилия его архитектора?",
              "  Сколько круглых колонн перед входом?(Считая ту на которой лошадь с девочкой)",
            ],
            answers: ["11", "Жуков", "11"],
            path: require("../assets/locations/quest2/loc7.png"),
          },
          {
            level: "8",
            locationName: "Красный костел",
            questions: [
              "  Возле танка есть дом с двумя мемориальными досками. Одна из них посвящена писателю Новикову. А как фамилия второго уважаеммого человека",
              "  На танке есть трехзначный номер. Найди его и запиши в ответ",
              '  "Мальчик с лебедем" - легендарный фантан минска, находится в александровском сквере, что возле танка. После реконструкции на нем появились лягушки. А сколько их?',
            ],
            answers: ["Ливенцев", "492", "5"],
            path: require("../assets/locations/quest2/loc8.png"),
          },
          {
            level: "9",
            locationName: "Педагогический университет",
            questions: [
              '  На октябрьской площади перед дворцом есть скульптура "Нулевой километр", на ней много различной информации, как информационной так и филосовской. Помимо сторон света, цитат на латыни и дорожных схем есть еще и стихи известного белорусского писателя. Напиши название животного из первых букв частей псевдонима автора',
              '  На скульптуре "Нулевой километр" есть помимо всего и гильда про литье, в центре гильды слово "Минск", а что за прилагательное сверху?',
              "  На углах крыши дворца есть скульптуры. Одна из них - Женщина держащая книгу с шестерёнкой на обложке. С какой стороны света угол с этой скульптурой относительно центра дворца",
            ],
            answers: ["як", "Отменное", "Восток"],
            path: require("../assets/locations/quest2/loc9.png"),
          },
        ],
      },
    ],
  },
};
