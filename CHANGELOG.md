# Изменения / Changelog

Версии — [SemVer](https://semver.org/lang/ru/). Изменения до 0.2.7 включительно описаны в выпусках на GitHub.

## Не выпущено / Unreleased

## 0.8.0 — 2026-10-20

- Клик по центру найденного изображения: один левый клик после наведения, только при совпадении.
- OCR сохраняет полный текст в именованную переменную перед ветвлением. Пустой результат очищает прежнее значение.
- Текстовые переменные, присваивание/копирование и условия «равно», «не равно», «содержит», «не содержит»; числовая арифметика сохранена.
- Click the center of a found image after positioning, only on a match.
- Save full OCR text to a named variable before branching, including empty results.
- Text assignment/copying and equality/contains conditions; numeric arithmetic remains available.
- Обновите оба ПК до 0.8.0, прошивка ESP прежняя. / Update both PCs to 0.8.0; ESP firmware is unchanged.

## 0.7.0 — 2026-10-20

- Выделение линий и блоков, удаление через Delete с отменой. Поля ввода защищены от случайного удаления блока; панель параметров шире, соединения сворачиваются.
- Блоки «Цикл», «Переменная» и «Если»: числовые переменные с русскими именами, присваивание, арифметика, удаление и сравнения. Значения видны после действий.
- «Найти изображение»: поиск образца в области основного экрана, отдельные ветки результата, необязательное движение к центру найденного элемента. Образец можно вырезать с экрана или загрузить из PNG/JPEG/WebP.
- «Распознать текст»: локальный OCR Windows на русском/английском, проверка наличия строки, тестовое чтение и просмотр результата. Прежнее сравнение пикселей сохранено.
- Select connections or cards and delete with Delete/undo; editable fields are protected, the inspector is wider and connections collapse.
- Loop, Variable and If blocks: numeric variables, assignments, arithmetic, removal and comparisons, with runtime values shown.
- Find Image searches a primary-display region for an original-scale template, with result branches and optional pointer movement. Capture a template or crop one from a PNG/JPEG/WebP file.
- Read Text uses local Windows OCR with Russian/English language selection, text checks, preview and result display. Existing pixel comparisons are unchanged.
- Новые блоки требуют 0.7.0 на обоих ПК. OCR требует доступного языка Windows. Прошивка ESP не меняется. / New blocks require 0.7.0 on both PCs. OCR needs an available Windows recognition language. ESP firmware is unchanged.

## 0.6.1 — 2026-10-19

- Незавершённую связь можно отменить повторным нажатием на тот же выход, кликом по свободному полотну или Esc независимо от фокуса. Созданные связи сохраняются.
- Cancel a pending connection by activating the same output again, clicking empty canvas, or pressing Escape regardless of focus. Existing connections are preserved.

## 0.6.0 — 2026-10-19

- Визуальная рабочая поверхность: перетаскивайте блоки из палитры и соединяйте их линиями, включая ветки сравнения изображения. Масштаб, перемещение полотна, автоматическая раскладка и отмена правок.
- Библиотека именованных сценариев с автосохранением, кнопкой сохранения, копированием и импортом/экспортом. Сохраняются позиции, связи и эталоны; прежний сценарий переносится автоматически.
- Несколько экземпляров Windows-приложения одновременно: отдельные настройки, сценарии и подключения ESP. Номер виден в заголовке, первый экземпляр сохраняет прежние данные.
- Visual canvas with draggable action cards, connected image-condition branches, zoom, pan, automatic layout and undo.
- Named scenario library with autosave, explicit save, duplication and import/export. Positions, connections and image references are retained; legacy scenarios migrate automatically.
- Multiple simultaneous Windows app instances with separate settings, scenarios and ESP connections. The title shows the instance number; the first instance retains existing data.
- Прошивка ESP не меняется. Новый JSON конструктора требует 0.6.0; старые JSON импортируются. / ESP firmware is unchanged. New canvas JSON requires 0.6.0; legacy JSON can still be imported.

## 0.5.0 — 2026-10-19

- Исправлено ложное отключение ESP после закрытия настроек: фоновый heartbeat и автоматическое повторное обнаружение выбранной платы. Прерванные сценарии не возобновляются автоматически.
- Fixed ESP appearing disconnected after closing settings: background heartbeats and automatic rediscovery of the selected board. Interrupted scenarios are not resumed automatically.

- Диапазон паузы перед каждым блоком и длительности клавиш, кликов, движения и ожидания; случайная точка в прямоугольнике, плавные изогнутые траектории мыши.
- Перетаскивание блоков внутри списка и между ветками условий, перенос с клавиатуры и отмена.
- Выделение области изображения до 128×128 с масштабом и точными координатами; порог 0,01%, пробное сравнение и подсветка несовпавших пикселей.
- Per-block pause ranges, variable action durations, random target rectangles and smooth curved pointer paths.
- Drag blocks within lists or across condition branches, with keyboard relocation and cancellation.
- Select image regions up to 128×128 with zoom and exact coordinates; 0.01% thresholds, test captures and pixel difference previews.
- Для новых настроек обновите оба ПК. Прошивка ESP не меняется. / Update both PCs for the new settings; ESP firmware is unchanged.

## 0.4.0 — 2026-10-19

### ✨ Новое
- Конструктор сценариев: клавиши, клики и плавное движение через выбранную ESP32, повторы, импорт и экспорт JSON.
- Выбор клавиши физическим нажатием; выбор точки и кнопки мыши по снимку, живые координаты курсора целевого ПК.
- Фиксированные и случайные паузы, ожидание времени по часам целевого ПК.
- Сравнение области экрана с эталоном и отдельные действия при совпадении и несовпадении.
- Шаг «Фокус окна»: выбор открытого окна по заголовку и классу, проверка активации перед продолжением.
- Локальное и удалённое исполнение; удалённые сценарии и снимки требуют разрешения владельца целевого ПК.

### 🛠 Исправления
- Удалена неиспользуемая обработка ZIP-обновлений с уязвимыми зависимостями. Подписанные EXE-обновления сохранены.

### ⚠️ Важно при обновлении
- Прошивка ESP не меняется. Для удалённых сценариев обновите MouseKey на обоих компьютерах.
- Исполнение и снимки поддерживаются на Windows, координаты — основной монитор. F12 останавливает сценарий.
- Обрыв связи и ошибки захвата/фокуса останавливают исполнение. Проверка на реальной ESP и в ArcheAge не проведена.

### ✨ Added
- Scenario editor: keys, clicks, smooth ESP32 pointer movement, repeats and JSON import/export.
- Physical key capture, target-screen point/button selection and live cursor coordinates.
- Fixed/random delays, target-local clock scheduling and pixel-reference match/non-match branches.
- Focus-window step selects an open window by exact title/class and verifies activation before continuing.
- Local/remote execution; remote scenarios and screenshots require explicit host permission.

### 🛠 Fixes
- Removed unused legacy ZIP update extraction and its vulnerable dependency; signed EXE updates remain supported.

### ⚠️ Updating
- ESP firmware is unchanged. Update both PCs for remote scenarios. Execution/capture require Windows and use the primary monitor.
- F12, connection loss and capture/focus errors stop execution. Real ESP hardware and ArcheAge have not been tested.


## 0.3.2 — 2026-10-16

### 🐞 Исправления
- Панель трея на Windows не закрывается от «Приостановить управление» и «Завершить сеанс»: галочка и строка
  состояния («Управление приостановлено», «Нет сеанса») меняются прямо в открытой панели, а фокус остаётся на том же
  месте. Закрывают панель только пункты, которые уводят в другое место: «Принимать подключения…» (окно с
  подтверждением), «Открыть MouseKey», «Настройки…» и «Выйти из MouseKey», а ещё Esc и щелчок мимо (Fox Brand 0.4.3).
- Обновлена библиотека TLS `rustls` (0.23.46) — исправления уязвимостей RUSTSEC-2026-0346…0349.

### 🐞 Fixes
- The Windows tray panel no longer closes on "Pause remote control" and "End session": the check mark and the status
  line ("Remote control paused", "No session") change right in the open panel, and the focus stays in place. Only items
  that take you elsewhere close the panel: "Accept connections…" (the confirmation window), "Open MouseKey",
  "Settings…" and "Quit MouseKey", as do Esc and a click outside (Fox Brand 0.4.3).
- The `rustls` TLS library is updated (0.23.46) — fixes for RUSTSEC-2026-0346…0349.

## 0.3.1 — 2026-10-11

### ⚠️ Важно при обновлении
- Обновления теперь приходят из открытой витрины MouseKey —
  [github.com/DiFoxenGit/MouseKey](https://github.com/DiFoxenGit/MouseKey): там установщики, подписи обновлений и
  список изменений. Прежний адрес обновлений был закрыт, и MouseKey 0.3.0 не мог проверить обновление.
- Если у вас 0.3.0, обновитесь один раз вручную: скачайте установщик 0.3.1 из «Выпусков» витрины и запустите его
  поверх установленного. Дальше обновления придут сами.

### ⚠️ Upgrade notes
- Updates now come from the public MouseKey showcase,
  [github.com/DiFoxenGit/MouseKey](https://github.com/DiFoxenGit/MouseKey): installers, update signatures and the
  changelog live there. The previous update address was not public, so MouseKey 0.3.0 could not check for updates.
- If you have 0.3.0, update once by hand: download the 0.3.1 installer from the showcase Releases and run it over the
  installed copy. Later updates arrive on their own.

## 0.3.0 — 2026-10-11

### ✨ Новое
- MouseKey — на общем бренде DiFoxen (пакет Fox Brand): палитры Toffee, Cocoa и Forest, светлая и тёмная тема,
  шрифт Nunito. Знак приложения — лис с мышью, везде, где приложение показывает лиса: значок приложения и
  установщика, титул-бар, «О программе» (со знаком и версией), шапка панели трея и маскот поиска плат.
- Трей. На Windows правый щелчок по значку открывает панель, на macOS и Linux — системное меню того же состава:
  строка состояния («Нет сеанса», «К этому ПК подключены», «Управление приостановлено», «Вы управляете другим ПК»),
  «Принимать подключения…», «Приостановить управление», «Завершить сеанс», «Настройки…» и «Выйти из MouseKey».
  - Из трея доступ к компьютеру не открывается: «Принимать подключения…» только показывает окно с вопросом «Открыть
    доступ к этому компьютеру?», и показ начинается лишь после «Открыть доступ».
  - Выход во время сеанса — только после подтверждения.
- «Приостановить управление» — в трее и кнопкой на экране доступа: партнёр по-прежнему видит экран, но его мышь и
  клавиатура до компьютера не доходят, а всё, что он держал нажатым, отпускается.
- «Настройки → При закрытии окна»: «Свернуть в трей» (по умолчанию) или «Выйти». При первом сворачивании — одно
  уведомление, где искать значок. Повторный запуск показывает уже открытое окно, а не вторую копию.
- Язык — «Системный», «Русский» или «English».
- Работа, конец которой заранее неизвестен, показана бегущей линией по краю: подключение к партнёру (кнопка
  «Соединение…», потом панель сеанса), начало показа экрана, окно выбора экрана ОС («Выбор экрана…») и поиск плат.
  Быстрая работа линией не мигает.
- Поиск плат ESP32 идёт 5 секунд: пока ищем — лис и «Ищем платы в сети…», потом список плат или «Платы не найдены»
  с подсказкой, что проверить, и кнопкой «Повторить».
- Экран сбоя: если интерфейс упал, окно показывает «Что-то пошло не так», «Перезапустить» и «Скопировать сведения»
  для поддержки — без имени пользователя в путях и без параметров адресов.

### 🔄 Изменения
- Окно открывается сразу в выбранной палитре и теме, без белой вспышки; наименьший размер окна — 360×560.
- Пока доступ открывается (ОС спрашивает экран, сервер выдаёт код), на карточке — линия и «Готовим код…»; пилюля
  «Ожидание подключения» появляется вместе с кодом.
- «Сменить экран» открывает одно окно выбора ОС: повторное нажатие, пока оно открыто, второго не открывает — и после
  короткого разрыва связи тоже.
- В выпуске не работают F5, печать и меню браузера по правому щелчку.
- Кнопки и переключатели читаются в тёмной теме во всех палитрах (Fox Brand 0.4.0): «Подключиться», «Открыть
  доступ», «Перезапустить» и выбранный вариант в настройках и в «Показ» — мягкая подложка с оранжевой рамкой и
  светлой подписью, а не тёмная подпись на светлом оранжевом; «Завершить сеанс» и «Выйти» — так же, в красном.
  Светлая тема не меняется.
- Недоступные кнопки — пунктир и приглушённая подпись, без прозрачности, в обеих темах: «Подключиться» без кода и
  пароля, «Копировать», пока код готовится.
- «Закрыть» в заголовке окна под указателем — насыщенный красный с белым значком, как в Windows, и в тёмной теме.
- Fox Brand 0.4.1: в режиме высокой контрастности Windows кольцо фокуса у выбранного варианта в настройках и в «Показ»
  — системным цветом выделения, а не оранжевым бренда.

### 🐞 Исправления
- Рамка фокуса у кнопок окна («Настройки», «Свернуть», «Развернуть», «Закрыть») — внутри кнопки: край окна её больше
  не обрезает. У полей ввода — рамка фокуса бренда.
- Пока открыты настройки, Tab ходит только по окну настроек: раньше он уходил под затемнение — на кнопки окна и
  карточки главного экрана, где рамку фокуса было почти не видно. При открытии фокус переходит в окно настроек, после
  закрытия возвращается на кнопку «Настройки».
- Сбой посреди сеанса останавливает удалённое управление: сеанс завершается, ввод партнёра больше не доходит до
  компьютера, нажатые клавиши отпускаются, трей показывает «Нет сеанса». Раньше интерфейс пропадал (окно оставалось
  пустым), а партнёр продолжал управлять.
- Сбой или «Назад», пока идёт подключение к партнёру или начинается показ, закрывают и то, что сеть отдаст позже:
  соединение не устанавливается за экраном, окно выбора экрана ОС не открывается.
- Поиск плат больше не висит бесконечно, когда ни одна плата не ответила.
- Экран, выбранный в окне ОС уже после конца сеанса, не попадает в новый сеанс, а его захват отпускается.
- До подключения к партнёру пустая чёрная сцена видео не занимает место на экране.

### ✨ New
- MouseKey now uses the shared DiFoxen brand (Fox Brand): Toffee, Cocoa and Forest palettes, light and dark themes,
  the Nunito font. The app mark is the fox with a mouse wherever the app shows the fox: the app and installer icon,
  the title bar, About (with the mark and version), the tray panel header and the board search mascot.
- Tray. On Windows a right click on the icon opens a panel, macOS and Linux get a native menu with the same items: a
  status line (No session, Someone is connected to this PC, Remote control paused, You are controlling another PC),
  Accept connections…, Pause remote control, End session, Settings… and Quit MouseKey.
  - The tray never opens access to the computer: Accept connections… only shows the window asking “Give access to
    this computer?”, and sharing starts only after Give access.
  - Quitting during a session asks first.
- Pause remote control — in the tray and as a button on the access screen: the partner still sees the screen, but their
  mouse and keyboard no longer reach the computer, and anything they held down is released.
- Settings → When the window is closed: Minimize to tray (default) or Quit. The first time the window goes to the tray,
  one notification shows where the icon is. Launching the app again shows the open window instead of a second copy.
- Language: System, Русский or English.
- Work of unknown length shows the brand's running line along the edge: connecting to the partner (the Connecting…
  button, then the session panel), starting to share the screen, the OS screen picker (Choosing a screen…) and
  the board search. Quick work does not flash the line.
- The ESP32 board search runs for 5 seconds: while searching you see the fox and “Searching for boards…”, then the
  list of boards or “No boards found” with what to check and a Try again button.
- Crash screen: if the interface fails, the window shows “Something went wrong”, Restart and Copy details for
  support — without the user name in paths and without URL parameters.

### 🔄 Changes
- The window opens in the chosen palette and theme right away, without a white flash; the smallest window size is
  360×560.
- While access opens (the OS asks for the screen, the server issues the code), the card shows the line and
  “Preparing code…”; the “Waiting for connection” pill appears together with the code.
- Change screen opens one OS picker: pressing it again while the picker is open does not open a second one, even
  after a short connection drop.
- Release builds ignore F5, printing and the browser context menu.
- Buttons and toggles read clearly in the dark theme in every palette (Fox Brand 0.4.0): Connect, Give access,
  Restart and the selected option in Settings and View get a soft fill with an orange border and a light label
  instead of a dark label on light orange; End session and Quit do the same in red. The light theme is unchanged.
- Disabled buttons show a dashed border and a muted label without transparency, in both themes: Connect without a
  code and password, Copy while the code is being prepared.
- Close in the window title bar turns saturated red with a white icon under the pointer, like Windows, in the dark
  theme too.
- Fox Brand 0.4.1: in Windows high contrast mode the focus ring of the selected option in Settings and View uses the
  system highlight colour instead of the brand orange.

### 🐞 Fixes
- The focus ring of the window buttons (Settings, Minimize, Maximize, Close) stays inside the button, so the window
  edge no longer cuts it off. Input fields use the brand's focus ring.
- While Settings is open, Tab moves only through the Settings window. Before, it went under the dimmed background to
  the window buttons and the home screen cards, where the focus ring was barely visible. Opening Settings moves focus
  into it, and closing returns focus to the Settings button.
- A crash in the middle of a session stops remote control: the session ends, the partner's input no longer reaches
  the computer, held keys are released and the tray shows No session. Before, the interface disappeared, leaving a
  blank window, while the partner kept control.
- A crash or Back while connecting to the partner or while sharing starts also closes what the network returns later:
  the connection is not set up behind the screen, and the OS screen picker does not open.
- The board search no longer hangs forever when no board answers.
- A screen chosen in the OS picker after the session ended no longer goes into a new session, and its capture is
  released.
- Before the partner connects, the empty black video stage no longer takes up space.
