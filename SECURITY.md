# Безопасность / Security

MouseKey открывает доступ к экрану, мыши и клавиатуре компьютера, поэтому сообщения об уязвимостях важнее всего
остального.

## Как сообщить

Откройте приватный отчёт: [Security → Report a vulnerability](https://github.com/DiFoxenGit/MouseKey/security/advisories/new).
Его видит только автор. Публичные issue для уязвимостей не используйте.

Опишите, что происходит и как это повторить (версия MouseKey, версия Windows), и чего удалось добиться. Ответ — в
течение недели; об исправлении сообщим в том же отчёте и в заметках к выпуску.

## Что считается уязвимостью

- Доступ к экрану или ввод на компьютер без «Поделиться экраном» на нём или в обход кода и пароля.
- Ввод партнёра, который доходит до компьютера после «Приостановить управление» или конца сеанса.
- Открытие доступа из трея без подтверждения.
- Установка обновления без подписи ключа проекта или с чужой подписью.

## Что уязвимостью не считается

- Предупреждение SmartScreen: установщик пока не подписан сертификатом удостоверяющего центра.
- Доступ у того, кому вы сами продиктовали код и пароль, пока сеанс открыт.

## Версии

Исправления выходят в последней версии; обновляйтесь, когда приложение предлагает.

---

## Reporting

Open a private report: [Security → Report a vulnerability](https://github.com/DiFoxenGit/MouseKey/security/advisories/new).
Only the author sees it. Please do not use public issues for vulnerabilities. Describe what happens, how to reproduce
it (MouseKey and Windows versions) and what you achieved. You will get an answer within a week.

In scope: access to the screen or input without Share screen on that computer or bypassing the code and password;
partner input that still reaches the computer after Pause remote control or the end of a session; opening access from
the tray without confirmation; installing an update without the project key's signature. Out of scope: the SmartScreen
warning, and access by someone you gave the code and password to while the session is open. Fixes ship in the latest
version.
