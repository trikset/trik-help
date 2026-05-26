# Справочный центр ТРИК

Docusaurus-версия справочного центра ТРИК.

- Preview: https://help-new.trikset.com
- Рабочая ветка миграции: `trik-help-doc`
- Основная ветка текущей GitBook-версии: `main-ru`

## Локальная разработка

```bash
npm ci
npm run start
npm run build
```

## Структура

- `docs/` — страницы справки.
- `sidebars.ts` — левое меню справки.
- `static/gitbook/assets/` — изображения и файлы, перенесённые из GitBook.
- `static/admin/` — промежуточная админка миграции, Decap CMS (`/admin/cms/`) и заготовка нового редактора (`/admin/editor/`).
- `migration/` — служебные материалы миграции и карта старых URL.

## URL

Docusaurus настроен так, чтобы публичные пути совпадали со старой справкой, например:

- `/studio/about/`
- `/trik/menu/`
- `/ev3/about/`

Путь `/admin/` зарезервирован для админки preview-сайта и защищён basic auth. Decap CMS доступен по `/admin/cms/`.

## Редактирование через Decap CMS

Админка preview-сайта: https://help-new.trikset.com/admin/

- `/admin/` — панель действий миграции.
- `/admin/cms/` — текущий Decap CMS.
- `/admin/editor/` — заготовка нового собственного редактора.

Decap CMS пишет изменения в ветку `trik-help-doc` репозитория `trikset/trik-help`.

## Импорт из основной ветки

Кнопка «Забрать из основной ветки и конвертировать» ведёт на workflow `Import main-ru and convert`. Он берёт GitBook-ветку `main-ru`, запускает `migration/convert-full.mjs`, проверяет `npm run build` и коммитит результат в `trik-help-doc`. Локально тот же сценарий можно запустить так:

```bash
SOURCE_BRANCH=main-ru TARGET_BRANCH=trik-help-doc ./scripts/import_main_ru_and_convert.sh
```
