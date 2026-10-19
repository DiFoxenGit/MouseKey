# Сценарии MouseKey 0.4.0 / Scenarios

![Фокус окна в конструкторе](screenshots/scenarios.png)

## Русский

1. Обновите MouseKey на целевом ПК; для удалённого управления — на обоих ПК. Прошивку ESP менять не нужно.
2. В настройках целевого ПК подключите и выберите ESP, вставленную по USB в этот ПК. Откройте раздел «Сценарии».
3. Для удалённого исполнения установите соединение и разрешите партнёру сценарии и снимки экрана на целевом ПК.
4. Добавьте шаги: фокус окна, перемещение, клик, клавиша, фиксированная или случайная пауза, ожидание времени, сравнение изображения.
5. Клавиша выбирается нажатием в поле. Кнопка мыши — кликом по полю; точка — кликом по снимку целевого экрана. Живые X/Y показываются отдельно.
6. «Фокус окна»: обновите список и выберите открытое окно. Точно сопоставляются заголовок и класс; при изменении заголовка обновите выбор. Повторяйте этот шаг между действиями для перехода между окнами. Если окно не найдено, неоднозначно или Windows не дала фокус, сценарий останавливается.
7. Для сравнения задайте область до 64×64, снимите эталон, задайте допуск RGB и процент совпавших пикселей; заполните обе ветки.
8. «Дождаться времени» использует местные часы целевого ПК. Прошедшее время означает завтра; допустим один такой шаг и один повтор. Точность ограничена планировщиком ОС и задержкой связи.
9. Запустите сценарий. F12 на целевом ПК или кнопка остановки отменяет его. Экспорт/импорт JSON переносит шаги и эталоны.

**Ограничения:** Windows, основной монитор, экранные физические координаты. При смене разрешения обновите точки и эталоны. Защищённые/полноэкранные приложения могут не отдавать изображение; захват курсора может мешать позиционированию. Не тестировалось на реальной ESP и в ArcheAge, совместимость с игрой не гарантирована. Плата получает UDP-команды без подтверждения каждого HID-события; при обрыве связи отпускание клавиши нельзя гарантировать. При залипании переподключите USB платы.

## English

Update MouseKey on the target PC and, for remote scenarios, on both PCs. ESP firmware is unchanged. Select the USB-connected ESP in target settings, then open Scenarios. Remote scenarios and screenshots require the host's explicit permission.

Add focus-window, movement, click, key, fixed/random wait, clock-wait or image-comparison steps. Click the key field and press a key; pick a mouse button directly or choose a point/button on a target-screen snapshot. Live cursor coordinates are displayed separately.

Focus window refreshes the target window list and selects an exact title/class match. Repeat it between actions to switch windows. Missing or ambiguous windows and denied activation stop the scenario. It restores minimized windows but does not launch programs; coordinates stay screen-relative.

Image comparisons use a reference region up to 64×64, RGB tolerance and a matching-pixel percentage, with separate match/non-match branches. Clock waits use target-local time; past times mean tomorrow, with one clock step and one repetition. F12 on the target or Stop cancels the run. JSON export/import includes reference pixels.

**Limits:** Windows, primary monitor, physical screen coordinates. Re-select points/references after resolution changes. Protected/full-screen applications may not capture; cursor locking may prevent positioning. Real ESP hardware and ArcheAge have not been tested. UDP commands have no per-HID acknowledgement; release cannot be guaranteed after connection loss. Reconnect the board's USB if input stays held.
