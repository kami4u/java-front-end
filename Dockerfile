FROM nginx
COPY public/bundle.js /usr/share/nginx/html/
COPY public/index.html /usr/share/nginx/html/