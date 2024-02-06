import React, { useState, useEffect } from "react";
import "./App.css";

const createWorker = () =>
  new Worker(new URL("./Worker/worker.js", import.meta.url));

function App() {
  const [data, setData] = useState([]);
  const [processingTimeWithoutWorker, setProcessingTimeWithoutWorker] =
    useState(null);
  const [processingTimeWithWorker, setProcessingTimeWithWorker] =
    useState(null);
  const [worker, setWorker] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomData = () => {
    const randomData = Array.from(
      { length: 10000000 },
      () => Math.random() * 1000
    );
    //console.log(randomData);
    setData(randomData);
  };

  const sortDataWithoutWorker = () => {
    generateRandomData();
    setIsLoading(true);
    console.log("data generated");
    const startTime = performance.now();
    const sortedData = [...data].sort((a, b) => a - b);
    console.log("data sorted", sortedData);
    const endTime = performance.now();
    setProcessingTimeWithoutWorker(endTime - startTime);
    setIsLoading(false);
  };

  const sortDataWithWorker = () => {
    generateRandomData();
    setIsLoading(true);
    console.log("data generated");
    const startTime = performance.now();
    const workerInstance = createWorker();

    workerInstance.postMessage(data);

    workerInstance.onmessage = (event) => {
      const sortedData = event.data;
      console.log("data sorted", sortedData);
      const endTime = performance.now();
      setProcessingTimeWithWorker(endTime - startTime);
      setIsLoading(false);
      workerInstance.terminate();
    };

    setWorker(workerInstance);
  };

  const applyAnimation = () => {
    const element = document.getElementById("animated-element");
    if (element) {
      element.classList.add("rotate-animation");
      setTimeout(() => {
        element.classList.remove("rotate-animation");
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (worker) {
        worker.terminate();
      }
    };
  }, [worker]);

  return (
    <div className="App">
      <h1>Web Worker Demo</h1>
      <button onClick={sortDataWithoutWorker} disabled={isLoading}>
        Sort Without Web Worker
      </button>
      <button onClick={sortDataWithWorker} disabled={isLoading}>
        Sort With Web Worker
      </button>
      <button onClick={applyAnimation}>Apply Animation</button>

      {isLoading && <p>Loading...</p>}

      <div id="animated-element" className="animated-box">
        <p>
          Processing Time Without Web Worker: {processingTimeWithoutWorker} ms
        </p>
        <p>Processing Time With Web Worker: {processingTimeWithWorker} ms</p>
      </div>
    </div>
  );
}

export default App;
