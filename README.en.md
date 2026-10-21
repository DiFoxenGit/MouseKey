<div align="center">

<img src="docs/banner.png" alt="MouseKey — remote access to your own computers" width="100%">

<br>

**Another computer's screen, mouse and keyboard — with a short code and a password.**

MouseKey connects two PCs directly: one shares its screen, the other controls it. No accounts, no subscriptions,
a light app built with Rust and Tauri 2.

<br>

[![Download](https://img.shields.io/github/v/release/DiFoxenGit/MouseKey?label=download&color=C94B00)](https://github.com/DiFoxenGit/MouseKey/releases/latest)
![Platform](https://img.shields.io/badge/Windows-10%20%7C%2011%20x64-0078D6?logo=windows&logoColor=white)
![Connection](https://img.shields.io/badge/connection-P2P%20WebRTC-E8672E)
![Languages](https://img.shields.io/badge/languages-English%20%7C%20русский-7F6554)
![License](https://img.shields.io/badge/license-proprietary-241611)

[**⬇️ Download**](#️-download) ·
[**🖼 Screenshots**](#-screenshots) ·
[**🚀 Install**](#-install) ·
[**🛡 Privacy and security**](#-privacy-and-security) ·
[**Русский**](README.md)

</div>

---

## 📑 Contents

- [What it is](#-what-it-is)
- [Screenshots](#-screenshots)
- [How it works](#️-how-it-works)
- [System requirements](#-system-requirements)
- [Download](#️-download)
- [Install](#-install)
- [Privacy and security](#-privacy-and-security)
- [FAQ](#-faq)
- [License](#-license)

---

## 🎯 What it is

MouseKey is remote access to your own computers and a way to help family and friends — like AnyDesk or RustDesk, but
small and our own. One person presses **Share screen** and reads out a code and a password; the other enters them and
sees the first person's screen.

| | |
|---|---|
| 🔑 **Code and password** | The six-digit code lives for 10 minutes and works once; the password is four digits |
| ⚡ **Direct P2P** | Video and input go straight between the computers (WebRTC); if the network blocks that, through a relay |
| 🖱 **Mouse and keyboard** | Control the other PC as if you sat at it; Esc releases the capture |
| 📋 **Clipboard and files** | A shared clipboard in both directions and file transfer during a session |
| 🖥 **Change screen** | Pick a screen or a window; Fit, 1:1, Stretch and full screen |
| 🎚 **Quality** | Sharp, Smooth and Lite profiles, quality and 30 or 60 frames per second |
| ⏸ **Pause remote control** | The partner still sees the screen, but their mouse and keyboard do not reach it; held keys are released |
| 🦊 **Tray** | Session state, End session, Pause remote control; the tray never opens access without asking |
| 🔌 **ESP32 board** | Optional: mouse and keyboard input through a board that acts as a regular USB device |
| 🧩 **Scenarios (Windows)** | ESP keys/clicks, window focus, precise image comparisons, template search and click, OCR text variables, loops and variables, timing ranges, curved paths, connected visual blocks, saved layouts and clock scheduling; [guide](docs/scenarios.md) |
| 🗔 **Multiple instances** | Launch the app again for separate settings, scenarios and ESP connections in each instance |
| 🎨 **Fox Brand** | Toffee, Cocoa and Forest palettes, light and dark themes; English and Russian |
| 🔄 **Auto-update** | Updates are signed with the project key and checked before they install |

## 🖼 Screenshots

The new look is the shared DiFoxen brand, **Fox Brand**: the app mark is the fox with a mouse, Toffee palette.

<table>
<tr>
<td width="50%"><img src="docs/screenshots/home-light-en.png" alt="MouseKey home screen in the light theme: Share screen and Connect to a PC"></td>
<td width="50%"><img src="docs/screenshots/home-dark-en.png" alt="MouseKey home screen in the dark theme"></td>
</tr>
<tr>
<td align="center"><b>Home</b><br><sub>light theme</sub></td>
<td align="center"><b>Home</b><br><sub>dark theme</sub></td>
</tr>
<tr>
<td width="50%"><img src="docs/screenshots/connect-light-en.png" alt="Connect to a computer with the partner's code and password, light theme"></td>
<td width="50%"><img src="docs/screenshots/connect-dark-en.png" alt="Connect to a computer with the partner's code and password, dark theme"></td>
</tr>
<tr>
<td align="center"><b>Connect with a code and password</b><br><sub>light theme</sub></td>
<td align="center"><b>Connect with a code and password</b><br><sub>dark theme</sub></td>
</tr>
<tr>
<td width="50%"><img src="docs/screenshots/settings-light-en.png" alt="Settings: profile, quality, frame rate, priority, palette and theme, light theme"></td>
<td width="50%"><img src="docs/screenshots/settings-dark-en.png" alt="Settings in the dark theme"></td>
</tr>
<tr>
<td align="center"><b>Settings</b><br><sub>light theme</sub></td>
<td align="center"><b>Settings</b><br><sub>dark theme</sub></td>
</tr>
</table>

![Visual scenarios with connections and saved layouts](docs/screenshots/scenario-canvas.png)

## ⚙️ How it works

```mermaid
sequenceDiagram
    participant H as 🖥 Your PC (shares the screen)
    participant S as 📡 Connection server
    participant C as 💻 Partner's PC (controls)
    H->>S: Share screen → code and password
    Note over H: you read out the code and password
    C->>S: code + password
    S-->>C: connection offer
    C->>S: answer
    S-->>H: answer
    H-)C: screen and sound — direct, encrypted (WebRTC)
    C-)H: mouse, keyboard, clipboard, files
```

- **The server only introduces the computers.** It passes the offer and the answer for a code and never sees the
  screen, the input or the files.
- **Then it is direct.** The computers connect to each other; if the network does not allow a direct connection, the
  stream goes through a relay and stays encrypted.
- **Input is part of the app.** A Rust component types the mouse and keyboard input on the controlled PC; when the
  session ends or something fails, every held key is released.

## 💻 System requirements

| | |
|---|---|
| **System** | Windows 10 or 11, 64-bit |
| **Component** | Microsoft Edge WebView2 — already in Windows 11; on Windows 10 the installer sets it up |
| **Network** | Internet on both PCs: the connection server finds the partner by code |
| **ESP32 board** | Not needed — only for input through a board |

For Linux (X11), use [release 0.3.2](https://github.com/DiFoxenGit/MouseKey/releases/tag/v0.3.2). The 0.6.0 scenarios execute on Windows.

## ⬇️ Download

The latest version is on the [**Releases**](https://github.com/DiFoxenGit/MouseKey/releases/latest) page.

| File | What for |
|---|---|
| `MouseKey_<version>_x64-setup.exe` | **The installer for most people** — installs for the current user and updates itself |
| `MouseKey_<version>_x64_en-US.msi` | MSI installer — for deployment in organisations |
| `*.sig`, `latest.json` | Signatures and the update feed — the app reads them itself |
| `SHA256SUMS.txt` | Checksums of every file in the release |

<details>
<summary><b>How to check a downloaded file</b></summary>

<br>

In PowerShell:

```powershell
Get-FileHash .\MouseKey_0.3.2_x64-setup.exe -Algorithm SHA256
```

The hash must match the file's line in `SHA256SUMS.txt` of the same release.

</details>

## 🚀 Install

1. Download `MouseKey_<version>_x64-setup.exe` from the [releases](https://github.com/DiFoxenGit/MouseKey/releases/latest) page.
2. Run the installer and follow the steps.
3. On the PC that will be controlled, press **Share screen**, pick a screen and read out the code and password.
4. On the other PC, press **Connect to a PC**, enter the code and password, then **Connect**.

> [!NOTE]
> The installer is not yet signed with a certificate authority certificate, so Windows SmartScreen shows a warning:
> More info → Run anyway. Updates are signed with the project key: the app checks the signature and will not install
> a file it did not sign.

> [!IMPORTANT]
> **If you have MouseKey 0.3.0**, update to 0.3.1 once by hand: download the installer and run it over the installed
> copy. 0.3.0 had a private update address; from 0.3.1 updates come from here and install on their own.

## 🛡 Privacy and security

- **No accounts.** MouseKey does not ask for an email, a phone number or a sign-up.
- **Only you give access.** The screen is shared only after Share screen and picking a screen in the Windows dialog.
  The tray never opens access: Accept connections… first asks “Give access to this computer?”.
- **One-time code.** The code lives for 10 minutes and works once; the password allows at most five attempts.
- **The connection server does not see the session.** It only passes the offer and the answer and does not store
  them; the screen, sound, input, clipboard and files go between the computers directly or through a relay — either
  way inside WebRTC encryption (DTLS-SRTP).
- **Pause and end take effect at once.** Pause remote control stops the partner's input, End session closes the
  connection; if the app crashes, the session closes too and held keys are released.
- **Crash details without extras.** Copy details on the crash screen removes the user name from paths and the
  parameters from addresses; nothing is sent anywhere automatically.
- **Signed updates.** The app installs an update only with the project key's signature.

Found a vulnerability? Report it privately — see [SECURITY.md](SECURITY.md).

## ❓ FAQ

<details>
<summary><b>Is the source code here?</b></summary>

<br>

No. This is a showcase: releases with installers, the changelog and feedback. MouseKey's code is closed.

</details>

<details>
<summary><b>The connection does not start</b></summary>

<br>

Check that the code has not expired (10 minutes), that the password is typed correctly and that both PCs are online.
If the code has expired, press Back and Share screen on the sharing PC to get a new one.

</details>

<details>
<summary><b>Can I control a PC when nobody is at it?</b></summary>

<br>

Not yet: every session starts with Share screen on the controlled PC. That is on purpose — without a person at the
screen, access does not open.

</details>

## 📝 Changes

What is new in each version — [CHANGELOG.md](CHANGELOG.md) and the [release](https://github.com/DiFoxenGit/MouseKey/releases) notes.

## 📄 License

MouseKey is proprietary freeware, all rights reserved: you may download and use it, but not redistribute it modified
or take it apart — see [LICENSE](LICENSE). Open-source components inside the app and their licenses —
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

<div align="center"><br><sub>© 2026 DiFoxen · MouseKey — your own remote access · <a href="README.md">Русский</a></sub></div>

### MouseKey 0.13.1

Saved blocks below the canvas; auxiliary controls stay collapsed.

![MouseKey 0.13.1](docs/screenshots/preset-library-bottom.png)

### MouseKey 0.14.0

Collapse blocks to icons while keeping their connections and expanded dimensions.

![MouseKey 0.14.0](docs/screenshots/compact-blocks.png)

### MouseKey 0.15.0

Collapse all and Expand all control the entire diagram. Resize handles no longer cover connection ports.

![MouseKey 0.15.0](docs/screenshots/bulk-collapse.png)

### MouseKey 0.15.1

Arrange uses visible block dimensions and packs collapsed icon squares closer together.

![MouseKey 0.15.1](docs/screenshots/compact-arrange.png)
