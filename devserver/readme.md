Use webpack dev server as proxy server.

While the front server starts at 8000 port, in the meantime the backend servers at another port, you need proxy setting.

All the requests request to the 8000 server, then this server put forward some API requests to the backend.


Running "webpack-dev-server --config dev.config.js" just starts a static server standalone, it would not compile anything.

