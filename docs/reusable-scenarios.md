# Повторное использование / Reusable scenarios

Актуально для **0.27.0**. [Руководство](scenarios.md) · [English guide](scenarios.en.md).

## Связанный сценарий

Перетащите карточку исходного сценария **сверху на полотно другого сценария** либо используйте «На схему». Подключите вход и «Далее». Изменения отдельного исходника используются во всех связанных вызовах. Повторы конкретного вызова можно переопределить независимо от исходника.

Поиск мест использования помогает перейти к вызывающей схеме. Проверьте их перед удалением исходника. Прямые и косвенные ссылки сценария на самого себя не поддерживаются.

«Сохранить» отправляет текущий документ и необходимые исходники в доступный аккаунт. На другом ПК загрузите согласованную копию с зависимостями. Это явное сохранение/загрузка: правки на одном ПК не подменяют открытый документ на другом без выбора пользователя.

## Независимая заготовка

Для независимой копии выберите **«Сценарий → блок»** под полотном, задайте имя и добавьте её из «Сохранённых блоков → Сценарии». Снимок содержит действия, маршруты, повторы и эталоны. Последующие изменения исходника его не меняют. Справа доступны содержимое и открытие отдельной копии для редактирования.

Обычный настроенный блок тоже можно именовать и сохранить в нижнюю библиотеку вместе с эталонами. Заготовки хранятся локально; библиотека аккаунта позволяет явно сохранить/загрузить их. При неудачной отправке локальная заготовка остаётся.

| Способ | Назначение |
|---|---|
| Перетащить сценарий сверху | Правки общего исходника должны применяться к его использованию |
| «Сценарий → блок» снизу | Самостоятельная версия, не меняющаяся вслед за исходником |
| Ctrl+C / Ctrl+V | Копия выделенных блоков с внутренними связями |
| JSON | Переносимый документ: связанные вызовы превращаются в снимки |

## Выполнение

Вызов возвращается через «Далее» после внутренних действий и повторов. Переменные общие с внешней схемой; входные/выходные параметры пока не поддерживаются. Отмена и бюджет операций общие. До 100 действий с вложенными вызовами, глубина до 3. Обновите редактор и исполнитель; прошивка ESP остаётся прежней.

Заготовка целого сценария требует пригодной к выполнению схемы. Обычный незавершённый документ можно сохранять как черновик. Сохранения, история и ограничение больших JSON-файлов описаны в [руководстве](scenarios.md).

## English

Drag a top-shelf scenario card onto another canvas, or choose Add to canvas, for a **linked call**. Source edits apply to linked uses; each call can override repeats. Find usages before deleting a source. Direct/indirect self-references are not supported. Save uploads the document with required sources; downloads are explicit and do not silently replace another PC's open draft.

For an **independent snapshot**, choose Scenario → block below the canvas, name it and insert it from Saved blocks → Scenarios. It preserves actions, routes, repeats and references without following later source edits. Individual actions can also be named/saved. Local presets survive upload failures; account backup/load is explicit.

Ctrl+C/Ctrl+V copies selected blocks with internal links. JSON exports portable snapshots rather than live cross-PC references. Calls share variables, cancellation and execution budgets; input/output parameters are not implemented. Limits include 100 total actions and depth 3. Update both clients; ESP firmware is unchanged. The guide covers recovery and the known large-JSON reimport limitation.
