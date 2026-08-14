# 🌱🐼 Pixel Panda-doro Timer🐼🌱

A cute, lightweight desktop Pomodoro timer built with **Electron**, designed to boost your productivity and keep you focused while studying or working alongside an adorable pixel-art panda companion!

<img width="1472" height="902" alt="image" src="https://github.com/user-attachments/assets/0977fab5-3493-4ecf-a0ef-16e31fd0ea90" />

<img width="208" height="301" alt="image" src="https://github.com/user-attachments/assets/c68309f3-8c16-4812-bc93-11ecd40a9234"  /> 
<img width="200" height="306" alt="image" src="https://github.com/user-attachments/assets/2ce1039c-a9d0-4f7e-af6b-eecb7cedd2b7" />





##  Features

* **Adorable Pixel Aesthetics:** Custom pixel art UI featuring a sleeping panda when the timer is running.
* **Compact Desktop Overlay:** Small footprint designed to stay on your desktop without cluttering your workspace.
* **Translucent/Custom Styling:** Custom borderless widget look with easy controls.
* **Simple Timer Controls:** Start, pause, reset, and easily adjust focus time with dedicated `+` and `-` buttons.
* **Frameless & Draggable:** Easily drag the window anywhere on your screen.



##  Built With

* **[Electron](https://www.electronjs.org/)** – Cross-platform desktop application framework
* **HTML5** – Markup structure
* **CSS3** – Pixel styling, layout, and custom typography
* **JavaScript (ES6+)** – Timer logic and state management

---

## Getting Started

Follow these steps to get a local copy up and running on your machine.

### Prerequisites

You need **Node.js** and **npm** installed on your system.
* [Download Node.js](https://nodejs.org/)



### 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pixel-panda-pomodoro.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd pixel-panda-pomodoro
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```



##  How to Use

1. **Run the application:**
   ```bash
   npm start
   ```

2. **Timer Controls:**
   * **Adjust Time:** Click the **`+`** or **`-`** buttons alongside the timer display to change your session length.
   * **Start:** Click the **`START`** / ▶️ button to begin your focus session.
   * **Pause:** Click the **`⏸`** button to temporarily pause your countdown.
   * **Reset:** Click the **`🔄`** button to set the timer back to its initial state.
   * **Move App:** Click and drag anywhere on the main app background to position it on your desktop.
   * **Window Controls:** Use the top-right **`-`** and **`X`** buttons to minimize or close the application.

---

## 📂 Project Structure

```text
├── assets/
│   ├── Ithaca_Font/        # Custom typography
│   ├── FUNDO-PRINCIPAL.png # Background texture
│   └── ...                 # Pixel art assets (Panda, buttons, icons)
├── index.html              # Main HTML markup
├── main.js                 # Electron main process (Window management)
├── renderer.js             # Timer logic and UI events
├── styles.css              # Custom styling and layout
├── package.json            # Dependencies and scripts
└── README.md
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
