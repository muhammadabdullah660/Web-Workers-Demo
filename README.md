# Web Worker Demo

## Project Description

This project is a simple React web application that demonstrates the usage of Web Workers for parallel processing. The application:

Generates a large array of random numbers.
Provides two buttons to sort the array with and without Web Workers.
Showcases UI responsiveness with CSS animations while the Web Worker is processing data.

## Instructions to Run Locally

Clone the Repository:

Bash
git clone https://github.com/your-username/web-worker-demo.git
Use code with caution. Learn more
Install Dependencies:

Bash
cd web-worker-demo
npm install
Use code with caution. Learn more
Start the Development Server:

Bash
npm start
Use code with caution. Learn more
Open the App in Your Browser:

The app will usually open at http://localhost:3000.

## Interact with the Web App:

Sort Without Web Worker: Click this button to sort the array in the main thread.
Sort With Web Worker: Click this button to sort the array using Web Workers.
Apply Animation: Click this button to trigger a CSS animation while the Web Worker is processing data.

## Performance Findings

The project demonstrates the potential performance improvements provided by Web Workers, especially in scenarios involving heavy data processing. The application allows users to compare the processing times of sorting a large array with and without the use of Web Workers.

Summary:

Sorting Without Web Worker: Traditional sorting in the main thread.
Sorting With Web Worker: Parallelized sorting using Web Workers.

## Challenges Faced and Solutions

Worker Initialization

Issue: Initially faced a ReferenceError due to Worker initialization.
Solution: Adjusted the worker initialization code to avoid the error.
Communication Overhead

Issue: Communication overhead between the main thread and Web Worker.
Solution: Optimized data transfer and minimized unnecessary communication.
UI Responsiveness

Issue: Ensuring UI responsiveness during heavy computations.
Solution: Implemented loading indicators and disabled buttons to prevent interference while processing.
Code Organization

Issue: Keeping the code organized and readable.
Solution: Modularized the code, used functions effectively, and followed best practices for maintainability.
