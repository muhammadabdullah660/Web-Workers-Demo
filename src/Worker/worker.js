onmessage = function (e) {
  const data = e.data;
  const sortedData = data.sort((a, b) => a - b);
  postMessage(sortedData);
};
