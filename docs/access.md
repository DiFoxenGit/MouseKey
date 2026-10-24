# Постоянный доступ / Persistent access

## Использование / Usage

На Windows включите в настройках «Автозапуск» и «Сразу показывать рабочий стол». Только первый экземпляр приложения начинает автоматический показ. Номер и первоначальный пароль сохраняются между запусками; секреты хранятся в Windows Credential Manager отдельно для каждого профиля экземпляра. Выбранная ESP, её стабильный ID, адрес и секрет сохраняются на управляемом компьютере.

С версии 0.19.9 автоматический и ручной показ используют одинаковый браузерный захват и WebRTC. Запрашивается до 3840×2160 и 60 кадров/с; фактические параметры зависят от оборудования и сети, звук — от поддержки источника. Отдельный нативный видеоканал и дополнительная адаптация отключены. После перезапуска первого экземпляра с включённым автопоказом экран выбирается автоматически, в том числе при ручном запуске. Чтобы вернуть диалог выбора, отключите автопоказ и перезапустите приложение. При ошибке сети автоматический показ повторяется через 5–30 секунд; ручное завершение отменяет повтор.

«Подключиться к ПК» → вход или регистрация справа → «Добавить компьютер»: пароль проверяется сервером, после чего появляется карточка. Само добавление не открывает удалённый сеанс. Зелёный индикатор означает доступный свободный хост; красный — отсутствующий или занятый. Подключение запускается отдельной кнопкой. Список синхронизируется между входами в один аккаунт. Пароли компьютеров в аккаунте не сохраняются: хранится разрешение, связанное с версией доступа хоста. Смена номера или пароля администратором отзывает разрешения.

В сеансе «Только экран в окне» оставляет обычное изменяемое окно. Esc возвращает панели. Наведение на изображение сразу включает управление; уход с него или потеря фокуса отпускают ввод. Полосы вокруг изображения не управляют удалённым ПК. Окна притягиваются во время перетаскивания; Shift временно отключает притягивание. Размер можно ввести в настройках в физических пикселях; системный минимальный размер остаётся применимым.

On Windows, enable startup and automatic desktop sharing in Settings. Only instance #1 starts unattended sharing. Host identity and ESP settings persist in the Windows credential vault. Since 0.19.9, automatic and manual sharing use the same browser capture and WebRTC, requesting up to 3840×2160 at 60 fps; actual quality depends on hardware and the network, and audio depends on source support. The separate native video channel and additional adaptation are disabled. Restarting instance #1 with auto sharing enabled activates automatic screen selection for both automatic and manual sharing. Disable auto sharing and restart to restore the picker.

Sign in in the saved computers panel under Connect to PC, then add a computer using its credentials. This validates access and saves a card without opening a session. Connect explicitly from an available card. Accounts sync cards, not computer passwords; administrator changes revoke saved grants. Screen-only mode stays inside a resizable window. Hover activates control, leaving releases input, and Esc restores panels. Window snapping happens during dragging; Shift bypasses it.


## Временный доступ / Temporary access

Администратор может выдать дополнительный ключ для конкретного ПК на срок от минуты до 30 дней. Ключ показывается один раз. Его можно использовать вместо пароля; отзыв или истечение срока отключает соответствующий сеанс и сохранённое разрешение, не меняя основной пароль. Создание нового временного ключа заменяет предыдущий.

Автотрансляция снова ожидает подключения после ухода клиента. Поверх трансляции отображается локальный курсор. При выбранной ESP абсолютное движение удалённого курсора выполняет Windows; кнопки и клавиши отправляются через ESP. Режим разворачивания сохраняет шапку приложения, Esc восстанавливает окно. Всплывающей панели над трансляцией нет.

Administrators can issue one additional per-PC key lasting from one minute to 30 days. It is displayed once and can replace the password. Revocation or expiry ends the associated session and saved grant without changing the primary password. Issuing another temporary key replaces the previous one.

Automatic sharing becomes available again after a controller disconnects and displays a local cursor overlay. With ESP selected, Windows positions the desktop pointer while buttons and keys still go through ESP. Maximization preserves the app header; Escape restores the window, with no hover toolbar over the stream.
