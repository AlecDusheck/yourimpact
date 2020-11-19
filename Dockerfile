# Builder =================
FROM node:12.2.0 as builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install @angular/cli@10.1.2 -g

COPY . /app
RUN ng build --output-path=dist --prod --subresourceIntegrity=true
RUN node minify-extra.js

# Runner =================
FROM nginx:1.16.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
