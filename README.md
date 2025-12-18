# 🎨 ColorCraft AI

> **Turn Imagination into Art.** > A futuristic, AI-powered web application that generates personalized coloring books for children using Google Gemini Vision technology.

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Tech Stack](https://img.shields.io/badge/Built%20With-TypeScript%20|%20Vite%20|%20Gemini-blueviolet)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📖 Overview

[cite_start]**ColorCraft AI** is a serverless, single-page application designed to empower parents to create unique, custom coloring pages for their children[cite: 3]. [cite_start]By leveraging the multimodal capabilities of the **Google Gemini API**, the app can analyze uploaded photos to create cartoonized line-art characters or generate scenes from text prompts[cite: 5, 25].

[cite_start]The project features a "Cyberpunk/SaaS" aesthetic with a modern Glassmorphism UI[cite: 11, 13], fully optimized for performance and privacy.

## ✨ Key Features

* **🤖 AI-Powered Generation:** Utilizes Google Gemini to create intricate coloring outlines based on custom themes.
* [cite_start]**📸 Photo-to-Coloring Page:** Upload a child's photo to generate a personalized character in a coloring-friendly vector style[cite: 32].
* [cite_start]**🌍 Multilingual Support:** Fully localized interface supporting **English, Turkish, Hindi, Spanish, and Chinese**[cite: 20].
* [cite_start]**🎯 Age-Adaptive Complexity:** Smart prompting adjusts the complexity of the drawing based on age groups (3, 5, 7, 10+ years)[cite: 22].
* **🔒 Privacy-First Architecture:** Operates on a "Bring Your Own Key" (BYOK) model. [cite_start]API keys and images are processed locally in the browser and never stored on a server[cite: 16, 54].
* [cite_start]**📄 PDF Export:** Download generated collections as a print-ready PDF[cite: 35].

## 🛠️ Tech Stack

* [cite_start]**Core:** HTML5, TypeScript (Strict Mode) [cite: 7]
* [cite_start]**Styling:** Modern CSS3 (Variables, Flexbox/Grid, Glassmorphism) [cite: 7, 41]
* [cite_start]**AI Integration:** Google Gemini API (Multimodal/Vision) [cite: 9]
* [cite_start]**Build Tool:** Vite [cite: 9]
* [cite_start]**PDF Generation:** jsPDF / html2pdf [cite: 10]

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
* Node.js (v16 or higher)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/WillByers/colorcraft-ai.git](https://github.com/WillByers/colorcraft-ai.git)
    cd colorcraft-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## 🎮 Usage

1.  **Enter API Key:** Upon loading, provide your Google Gemini API Key. (Don't worry, it's stored safely in your browser's LocalStorage) [cite_start][cite: 16].
2.  [cite_start]**Select Settings:** Choose the target age group, language, and page count[cite: 21].
3.  **Upload or Describe:**
    * *Option A:* Upload a photo of your child for a personalized character.
    * [cite_start]*Option B:* Type a creative theme (e.g., "Astronaut cat playing soccer")[cite: 23].
4.  **Generate:** Click "Generate" and watch the AI craft your pages.
5.  **Download:** Export your coloring book as a PDF.

## 📸 Screenshots

*(You can add screenshots of your UI here later)*

## 🛡️ Privacy Note

ColorCraft AI is designed with user privacy as a priority. The application runs entirely on the client side. [cite_start]Your personal API keys and uploaded photos are **never** sent to our servers; they are sent directly to Google's Gemini API for processing and are not retained[cite: 16, 54].

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Created by [Mert Batu] - 2025*
