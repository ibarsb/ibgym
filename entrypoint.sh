#!/bin/sh
# Start the Node.js API in background
node /app/api/server.js &
# Then start nginx in foreground
nginx -g 'daemon off;'