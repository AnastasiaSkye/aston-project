# Plants Gallery

[![CI/CD](https://github.com/AnastasiaSkye/aston-project/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/AnastasiaSkye/aston-project/actions/workflows/ci-cd.yml)


- Проект представляет собой галерею растений
- Использованное API: [Plant API](https://perenual.com/docs/api)

---

## Основной функционал

- Регистрация и авторизация пользователей
- Избранные растения: пользователь может добавлять или удалять из списка избранных
- Поиск по названию растения, выпадающее меню из растений
- История поиска: сохранение даты и названия растений, возможность перейти на страницу поиска после нажатия на название растения или дату

---

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

- [ ] Реализованы Требования к функциональности
- [ ] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем LocalStorage

#### React

- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми
- [x] Есть разделение на умные и глупые компоненты: [Умный](src/features/search/ui/ui.tsx), [Глупый](src/shared/ui/image/ui.tsx)
- [x] Есть рендеринг списков: [CardList](src/widgets/card-list/ui.tsx)
- [x] Реализована хотя бы одна форма: [AuthForm](src/features/auth/auth/ui.tsx)
- [ ] Есть применение Контекст API: 
- [x] Есть применение предохранителя: [ErrorBoundary](src/pages/main/ui/index.tsx)
- [x] Есть хотя бы один кастомный хук: [useAuth](src/entities/user/use-auth.ts)
- [x] Хотя бы несколько компонентов используют PropTypes: [Link](src/shared/ui/link/ui.tsx), [Button](src/shared/ui/button/ui.tsx), [Form](src/shared/ui/form/ui.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (debounce): [useDebounce](src/shared/lib/use-debounce.tsx), [SearchForm](src/features/search/ui/ui.tsx)
- [x] Есть применение lazy + Suspense: [AppRouter](src/app/router/app-router.tsx), [RouterProvider](src/app/providers/router-provider.tsx)

#### Redux

- [x] Используем Modern Redux with Redux Toolkit: [store](src/app/store/store.ts)
- [x] Используем слайсы: [userSlice](src/entities/user/slice.ts)
- [x] Есть хотя бы одна кастомная мидлвара или `createListenerMiddleware`: 
- [x] Используется RTK Query: [plantApi](src/shared/api/plants.ts)
- [x] Используется Transforming Responses: [plantApi](src/shared/api/plants.ts), [transformPlants](src/shared/lib/transform-plants.ts), [transformPlantDetails](src/shared/lib/transform-plants.ts)

---

### 2 уровень (необязательный)

- [x] Используется TypeScript
- [x] Использвуется Firebase: [firebaseApi](src/shared/api/firebase.ts)
- [x] настроен CI/CD
- [x] Связь UI и бизнес-логики построена не через команды, а через события: [Logout](src/features/auth/logout/ui.tsx) [useAuth](src/entities/user/use-auth.ts)