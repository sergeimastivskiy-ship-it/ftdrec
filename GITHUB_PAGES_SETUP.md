# Инструкция по настройке GitHub Pages

## Проблема
Если вы видите ошибку: `Get Pages site failed. Please verify that the repository has Pages enabled`

## Решение

### Шаг 1: Включите GitHub Pages в настройках репозитория

1. Перейдите в ваш репозиторий на GitHub: https://github.com/sergeimastivskiy-ship-it/ftdrec
2. Нажмите на вкладку **Settings** (вверху репозитория)
3. В левом меню найдите раздел **Pages**
4. В разделе **Source** выберите:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` → папка `/ (root)`
5. Нажмите **Save**

### Шаг 2: Проверьте workflow

После включения Pages, workflow должен автоматически запуститься при следующем push.

### Шаг 3: Проверьте статус

- Перейдите в **Actions** → проверьте, что workflow выполнился успешно
- После успешного деплоя ваш сайт будет доступен по адресу:
  ```
  https://sergeimastivskiy-ship-it.github.io/ftdrec/
  ```

## Альтернатива: Использовать Vercel

Если GitHub Pages не работает, используйте Vercel (рекомендуется):

1. Зайдите на https://vercel.com
2. Импортируйте репозиторий
3. Нажмите Deploy
4. Сайт будет доступен сразу

---

**Примечание:** После включения Pages в настройках, workflow должен работать автоматически.
