# Постоянный доступ / Persistent access

## Использование / Usage

На Windows включите в настройках «Автозапуск» и «Сразу показывать рабочий стол». Только первый экземпляр приложения начинает автоматический показ. Номер и первоначальный пароль сохраняются между запусками; секреты хранятся в Windows Credential Manager отдельно для каждого профиля экземпляра. Выбранная ESP, её стабильный ID, адрес и секрет сохраняются на управляемом компьютере.

С версии 0.19.9 автоматический и ручной показ используют одинаковый браузерный захват и WebRTC. Запрашивается до 3840×2160 и 60 кадров/с; фактические параметры зависят от оборудования и сети, звук — от поддержки источника. Отдельный нативный видеоканал и дополнительная адаптация отключены. После перезапуска первого экземпляра с включённым автопоказом экран выбирается автоматически, в том числе при ручном запуске. Чтобы вернуть диалог выбора, отключите автопоказ и перезапустите приложение. При ошибке сети автоматический показ повторяется через 5–30 секунд; ручное завершение отменяет повтор.

«Подключиться к ПК» → вход или регистрация справа → «Добавить компьютер»: пароль проверяется сервером, после чего появляется карточка. Само добавление не открывает удалённый сеанс. Зелёный индикатор означает доступный свободный хост; красный — отсутствующий или занятый. Подключение запускается отдельной кнопкой. Список синхронизируется между входами в один аккаунт. Пароли компьютеров в аккаунте не сохраняются: хранится разрешение, связанное с версией доступа хоста. Смена номера или пароля администратором отзывает разрешения.

В сеансе «Только экран в окне» оставляет обычное изменяемое окно. С версии 0.19.10 управление включается кликом по изображению. Ctrl+Space освобождает мышь и клавиатуру. Во время управления Esc в Windows-приложении передаётся удалённому ПК; после освобождения ввода Esc возвращает панели. Потеря фокуса также отпускает все нажатия. Окна притягиваются во время перетаскивания; Shift временно отключает притягивание. Размер можно ввести в настройках в физических пикселях; системный минимальный размер остаётся применимым.

On Windows, enable startup and automatic desktop sharing in Settings. Only instance #1 starts unattended sharing. Host identity and ESP settings persist in the Windows credential vault. Since 0.19.9, automatic and manual sharing use the same browser capture and WebRTC, requesting up to 3840×2160 at 60 fps; actual quality depends on hardware and the network, and audio depends on source support. The separate native video channel and additional adaptation are disabled. Restarting instance #1 with auto sharing enabled activates automatic screen selection for both automatic and manual sharing. Disable auto sharing and restart to restore the picker.

Sign in in the saved computers panel under Connect to PC, then add a computer using its credentials. This validates access and saves a card without opening a session. Connect explicitly from an available card. Accounts sync cards, not computer passwords; administrator changes revoke saved grants. Screen-only mode stays inside a resizable window. Since 0.19.10, click the image to control the PC and press Ctrl+Space to release input. While controlling, the Windows app forwards Escape to the remote PC. After releasing input, Escape restores panels. Losing focus also releases all held input. Window snapping happens during dragging; Shift bypasses it.


## Временный доступ / Temporary access

Администратор может выдать дополнительный ключ для конкретного ПК на срок от минуты до 30 дней. Ключ показывается один раз. Его можно использовать вместо пароля; отзыв или истечение срока отключает соответствующий сеанс и сохранённое разрешение, не меняя основной пароль. Создание нового временного ключа заменяет предыдущий.

Автотрансляция снова ожидает подключения после ухода клиента. При выбранной ESP относительные движения, кнопки и клавиши отправляются через ESP. Перепрошивка платы и ручная настройка мыши Windows не нужны. Всплывающей панели над трансляцией нет.

Administrators can issue one additional per-PC key lasting from one minute to 30 days. It is displayed once and can replace the password. Revocation or expiry ends the associated session and saved grant without changing the primary password. Issuing another temporary key replaces the previous one.

Automatic sharing becomes available again after a controller disconnects. With ESP selected, relative motion, buttons and keys all go through ESP. No firmware update or manual Windows mouse settings changes are required.
