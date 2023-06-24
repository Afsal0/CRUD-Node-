const requestRouting = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html><body>Hello from</body></html>");
    return res.end();
  } else if (url === "/message") {
    res.setHeader("Content-type", "text/html");
    res.write("<html><body>Hello message</body></html>");
    return res.end();
  }
};
module.exports = requestRouting;
