# Постоянный доступ / Persistent access

## Использование / Usage

На Windows включите в настройках «Автозапуск» и «Сразу показывать рабочий стол». Только первый экземпляр приложения начинает автоматический показ. Номер и первоначальный пароль сохраняются между запусками; секреты хранятся в Windows Credential Manager отдельно для каждого профиля экземпляра. Выбранная ESP, её стабильный ID, адрес и секрет сохраняются на управляемом компьютере.

Автоматический показ снимает основной монитор, до 1280×720 и 12 кадров/с, без звука. Частота зависит от нагрузки и фоновых ограничений WebView. Ручной показ по-прежнему использует системный выбор экрана и звук. При ошибке сети автоматический показ повторяется через 5–30 секунд; ручное завершение отменяет повтор.

«Мои компьютеры» → регистрация/вход → «Добавить компьютер»: пароль проверяется сервером, после чего появляется карточка. Само добавление не открывает удалённый сеанс. Зелёный индикатор означает доступный свободный хост; красный — отсутствующий или занятый. Подключение запускается отдельной кнопкой. Список синхронизируется между входами в один аккаунт. Пароли компьютеров в аккаунте не сохраняются: хранится разрешение, связанное с версией доступа хоста. Смена номера или пароля администратором отзывает разрешения.

В сеансе «Только экран в окне» оставляет обычное изменяемое окно. Esc возвращает панели. Наведение на изображение сразу включает управление; уход с него или потеря фокуса отпускают ввод. Полосы вокруг изображения не управляют удалённым ПК. Окна притягиваются во время перетаскивания; Shift временно отключает притягивание. Размер можно ввести в настройках в физических пикселях; системный минимальный размер остаётся применимым.

On Windows, enable startup and automatic desktop sharing in Settings. Only instance #1 starts unattended sharing. Host identity and ESP settings persist in the Windows credential vault. Automatic capture shares the primary monitor at up to 720p/12 fps without audio; actual rate depends on background WebView scheduling. Manual sharing retains the system picker and audio.

Sign in under My computers, then add a computer using its credentials. This validates access and saves a card without opening a session. Connect explicitly from an available card. Accounts sync cards, not computer passwords; administrator changes revoke saved grants. Screen-only mode stays inside a resizable window. Hover activates control, leaving releases input, and Esc restores panels. Window snapping happens during dragging; Shift bypasses it.

