# REAL-TIME-COLLABORATION-TOOL

COMPANY : CODTECH IT SOLUTIONS

NAME : SAGI JOSHUVA SRIKAR VARMA

INTERN ID : CT04DF1831

DOMAIN : SOFTWARE DEVELOPMENT

DURATION : 4 WEEKS

MENTOR : NEELA SANTOSH

##This project is a real-time collaborative note-taking tool built using Node.js, Express, and WebSocket. It allows multiple users to work together in a single shared text editor, where any changes made by one user are instantly reflected for all other users connected to the platform. The primary goal of this project was to create a simplified version of tools like Google Docs that enables real-time editing without the need for a database or page refreshes.
The frontend is developed using HTML, CSS, and JavaScript, and contains a single textarea element that acts as the shared editor. The backend uses Node.js and the WebSocket library ws to handle live connections and message broadcasting. When a user types into the textarea, the text is sent via WebSocket to the server, which then broadcasts it to all other connected clients. On the receiving end, each client updates the content of their editor to stay synchronized in real time.
A key aspect of the implementation is using a small logic flag to prevent endless update loops when changes are received and set programmatically. The project does not include user authentication, document saving, or multiple rooms — it’s a lightweight, single-room collaboration tool purely focused on demonstrating real-time synchronization through WebSockets. This tool was developed as part of my internship (Task 3), and it helped me understand how WebSocket communication works in building interactive applications where data needs to be instantly shared across clients. It is especially useful as a base for building larger systems like collaborative code editors or shared whiteboards.
The app runs on http://localhost:3000 and can be tested by opening the site in two or more browser tabs. When one user types, the same content appears in all other connected windows instantly. The project structure is simple, with a client/ folder containing all frontend files (HTML, CSS, JS) and a server/ folder with a single Node.js server file (server.js).
All dependencies are managed through package.json, and setup is easy with just a few npm commands. This project demonstrates not just WebSocket implementation, but also basic understanding of client-server architecture and real-time broadcasting logic. Future improvements could include adding user cursors, usernames, saving edits to a file or database, and supporting multiple documents or chat functionality. This project is a great starting point for anyone looking to explore how real-time systems work and how WebSocket technology can be used in building modern collaborative web applications.##

OUTPUT :

