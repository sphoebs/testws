FROM nginx
COPY html /usr/share/nginx/html
COPY data/certs/nginx-selfsigned.crt /etc/ssl/certs/
COPY data/certs/nginx-selfsigned.key /etc/ssl/private/
COPY default-ssl.conf /etc/nginx/conf.d/default-ssl.conf
EXPOSE 80
EXPOSE 443