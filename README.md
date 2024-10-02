### Start

- `npm install` -- Install all local packages
- `gulp start`  -- Start development
- `gulp build`  -- Build production version (all compress, no watcher)
- `gulp component --name <component_name>` -- Create component via console menu


## Structure
```
root/
├── build/                          # Эта папка будет генерироваться Gulp
├── gulp/                           # Галп таски и конфиги
│   ├── plugins/                    # Плагины
│   │   ├── plugins-css.js          # Подключения стилей плагинов
│   │   └── plugins-js.js           # Подключения скриптов плагинов
│   └── tasks/                      # Таски
│       ├── clean.js
│       ├── component.js
│       ├── fonts.js
│       ├── html.js
│       ├── images.js
│       ├── sass.js
│       ├── scripts.js
│       ├── scripts.js
│       ├── serve.js
│       └── watch.js
├── src/
│   ├── fonts/                      # Шрифты
│   ├── img/                        # Графика
│   │   ├── icons/                  # Иконки для svg спрайта
│   ├── style/                      # Базовые стили
│   │   ├── base                    # Компоненты (кнопки, инпуты, итд)
│   │   ├── config                  # Конфиги и миксины
│   │   └── style.scss              # Точка подключения всех стилей (кроме плагинов)
│   ├── js/                         # Скрипты
│   │   └── main.js                 # Пример JS файла
│   └── template/                   # HTML
│       ├── components/             # Копмоненты\модули
│       │   └── header/             # Копмонент header
│       │       ├── header.html     # html файл
│       │       └── header.scss     # scss файл
│       └── pages/                  # Корневые страницы
│           └── index.html          # Главная страница
│
├── gulpfile.js                     # Галп
├── .gitignore.js                   # Игнор лист
└── package.json                    # Зависимости для node.js