FROM nginx
COPY bundle.js /usr/share/nginx/html/
COPY index.html /usr/share/nginx/html/