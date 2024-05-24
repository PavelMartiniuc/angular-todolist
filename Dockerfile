FROM node:6.9.1 
RUN mkdir -p /usr/src/sportsstore 
COPY dist /usr/src/sportsstore/app 
COPY src/app/auth/authMiddleware.js /usr/src/sportsstore/ 
COPY src/app/dataSource/jsonServerData.json /usr/src/sportsstore/ 
COPY deploy-server.js /usr/src/sportsstore/server.js 
COPY deploy-package.json /usr/src/sportsstore/package.json 
COPY node_modules /usr/src/sportsstore/ 
WORKDIR /usr/src/sportsstore 
RUN npm install 
EXPOSE 3000 
EXPOSE 3500 
CMD ["npm", "start"]