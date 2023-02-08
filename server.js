const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

require('http')
    .createServer((req, res) => {
        if (req.url === '/a') {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(`
                <!DOCTYPE html>
                <head>
                    <link rel="shortcut icon" href="#" />
                </head>
                <body>
                    <script>
                        setTimeout(() => {
                            window.location.pathname = '/b';
                        }, 1000);
                    </script>
                </body>
            `);
        } else if (req.url === '/b') {
            sleep(1000).then(() => {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.end(`
                    <!DOCTYPE html>
                    <head>
                        <link rel="shortcut icon" href="#" />
                    </head>
                    <body></body>
                `);
            });
        } else res.destroy();
    })
    .listen(3000, () => console.log('http://localhost:3000'));
