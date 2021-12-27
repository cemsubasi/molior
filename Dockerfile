FROM node:14-slim
WORKDIR /opt/molior/client/
COPY . .
RUN npm install
RUN npm i -g serve
RUN npm run build
CMD serve -s -l 3000 build/
