FROM node:14-slim
WORKDIR /opt/molior-client/
COPY . .
RUN npm install
RUN npm i -g live-server
RUN npm run build
CMD live-server --port=3000 build/
