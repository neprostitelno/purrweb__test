# Тестовое задание Purrweb

## О заданиях

### 1. Верстка
Основные задания:

1. Верстка должна быть адаптивной и корректно отображаться в актуальных версиях Google Chrome и Firefox;
2. Верстка должна быть валидной (https://validator.w3.org/);
3. Использование семантических тегов;
4. БЭМ;
5. Валидация формы в модальном окне, обязательные поля помечены звездочкой (проверка полей только на пустоту);
6. Реализовать все состояния на компонентах из ui-kit, кроме загрузочных.

Дополнительные задания:

1. Реализация резиновой верстки;
2. Использование современных форматов шрифтов (woff2, woff);
3. Использование тега picture для поддержки webp и retina дисплеев;
4. Добавление маски в поле ввода телефона (код города/оператора и флаг только Российский [+7]).
5. Поле номера телефона дополнительно валидируется на код города/оператора и длину.
6. Блок с соглашением об использовании cookies всплывает снизу экрана и при взаимодействии с ним просто закрывается, без сохранений данных.
7. (Блок с айфоном) Сделать цикличную анимацию (проезжающие слева-направо/справа-налево/слева-направо) надписей "How Budss Works".

### 2. Javascript

Нужно сделать слайдер на чистом js (без jquery).

Требования:

1. Слайдер должен работать на любом количестве изображений от 1 до 10.
2. При клике на правый контрол (стрелочку) слайдера, когда слайдер доходит до последнего изображения, первое изображение должно также выезжать справа. Неправильный вариант: слайдер прокручивается налево до первого изображения.
3. Делать анимацию на javascript и не использовать css transitions. setInterval (http://javascript.ru/setinterval) - функция которая понадобится, чтобы сделать анимацию.
4. Если кликать много раз на слайдер во время анимации слайды не должны переключаться до тех пор, пока анимация не закончится. Например: Если я кликаю 20 раз на контрол (стрелку) слайдера во время анимации - ничего не происходит. Когда анимация закончилась и я кликнул 21 раз - слайд переключился на следующий.
5. При клике на точку внизу слайдера, я должен перейти на соотв. слайд. Если текущий слайд и есть тот на который я кликнул - ничего не должно происходить.
6. Точка текущего слайда должна как-то выделяться.
7. Перетаскивание слайдов мышкой (как в примере) делать не нужно.
8. Управление с клавиатуры (как в примере) делать не нужно.
9. Должен работать корректно в последней версии Firefox и Chrome.

## Используемые технологии
1. html
2. js
3. css


Решение первой задачи находится в папке "first"
Решение второй задачи находится в папке "slider"