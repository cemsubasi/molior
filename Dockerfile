FROM node:14-slim
WORKDIR /opt/molior-client/
COPY . .
RUN npm install
CMD npm start
