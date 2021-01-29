FROM node:alpine as build

COPY . .

RUN npm install 
RUN npm run build

FROM node:12-alpine

COPY --from=build package.json package.json
COPY --from=build package-lock.json package-lock.json
COPY --from=build .next .next

RUN npm install --production

EXPOSE 3000

CMD npm start