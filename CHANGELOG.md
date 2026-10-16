# Изменения / Changelog

Все заметные изменения MouseKey. Версии — [SemVer](https://semver.org/lang/ru/). Установщики каждой версии — в
[«Выпусках»](https://github.com/DiFoxenGit/MouseKey/releases).

All notable changes to MouseKey. Versions follow [SemVer](https://semver.org/). Installers for each version are on the
[Releases](https://github.com/DiFoxenGit/MouseKey/releases) page.

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

## 0.2.0 – 0.2.7 — 2026-09-25

- 0.2.7: ввод через плату ESP32 (Настройки → «Ввод»): поиск плат в сети, состояние, выбор платы.
- 0.2.6: режимы показа «Вписать», «1:1», «Растянуть», полноэкранный режим, профили «Чётко», «Плавно», «Экономно»,
  приоритет «Чёткость» или «Плавность», захват до 4K; окно помнит размер и положение.
- 0.2.5: связь между разными сетями через ретранслятор, когда прямое соединение невозможно.
- 0.2.4: подключение по короткому коду (6 цифр) и паролю (4 цифры) вместо обмена длинными кодами; значок с лисом.
- 0.2.3: понятный порядок подключения с пронумерованными шагами.
- 0.2.2: при сбое подключения видна настоящая причина.
- 0.2.1: «Подключиться» снова запускает подключение.
- 0.2.0: звук удалённого ПК, общий буфер обмена, передача файлов, смена экрана, качество и кадры/с, автообновление.

- 0.2.7: input through an ESP32 board (Settings → Input): board search on the network, status, board choice.
- 0.2.6: Fit, 1:1 and Stretch view modes, full screen, Sharp, Smooth and Lite profiles, Sharpness or Smoothness
  priority, capture up to 4K; the window remembers its size and position.
- 0.2.5: connections between different networks through a relay when a direct connection is impossible.
- 0.2.4: connect with a short code (6 digits) and a password (4 digits) instead of exchanging long codes; fox icon.
- 0.2.3: a clear connection order with numbered steps.
- 0.2.2: a failed connection shows the real reason.
- 0.2.1: Connect starts the connection again.
- 0.2.0: remote PC sound, shared clipboard, file transfer, screen switching, quality and frame rate, auto-update.

## 0.1.0 — 2026-09-25

- Первая сборка: показ экрана и управление мышью и клавиатурой между двумя ПК, прямое соединение WebRTC.
- First build: screen sharing and mouse and keyboard control between two PCs over a direct WebRTC connection.
