const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') { // Handle the homepage request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Our Clothing Store!</title>
        <link rel="stylesheet" href="styles.css"> </head>
      <body>
        <h1>Welcome to Our Clothing Store!</h1>
		<marquee> Hello guys </marquee>
        <p>We offer a wide variety of clothing for men, women, and children.</p>
        <section class="clothing-categories">
          <h2>Clothing Categories</h2>
          <ul>
            <li><a href="/clothing/men">Men's Clothing</a></li>
            <li><a href="/clothing/women">Women's Clothing</a></li>
            <li><a href="/clothing/children">Children's Clothing</a></li>
          </ul>
        </section>
        <script src="/scripts.js"></script> </body>
      </html>
    `);
  } else if (req.url.startsWith('/clothing')) { // Handle category pages (e.g., /clothing/men)
    const category = req.url.split('/')[2]; // Extract category name from URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${category} Clothing</title>
        <link rel="stylesheet" href="/styles.css"> </head>
      <body>
        <h1>${category} Clothing</h1>
        <p>Browse our selection of ${category} clothing.</p>
        <script src="/scripts.js"></script> </body>
      </html>
    `);
  } else { // Handle other requests (404 Not Found)
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});