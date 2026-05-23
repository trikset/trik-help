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
- `static/admin/` — Decap CMS для редактирования через веб-интерфейс.
- `migration/` — служебные материалы миграции и карта старых URL.

## URL

Docusaurus настроен так, чтобы публичные пути совпадали со старой справкой, например:

- `/studio/about/`
- `/trik/menu/`
- `/ev3/about/`

Путь `/admin/` зарезервирован для Decap CMS и защищён basic auth.

## Редактирование через Decap CMS

Админка preview-сайта: https://help-new.trikset.com/admin/

Decap CMS пишет изменения в ветку `trik-help-doc` репозитория `trikset/trik-help`.
