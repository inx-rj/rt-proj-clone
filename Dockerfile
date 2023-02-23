FROM node:18.13.0-buster-slim as builder
RUN mkdir rails-frontend && chown -R node:node rails-frontend
WORKDIR /rails-frontend
ADD . /rails-frontend

RUN npm install

#RUN npm install react-languages-select --force
#RUN npm install react-use-websocket --force

ARG BUILD=build
ARG VITE_APP_FRONTEND_URL="https://dev.railstext.com"
ARG VITE_BACKEND_API_URL="https://dev-api.railstext.com"

ENV VITE_BACKEND_API_URL=$VITE_BACKEND_API_URL
ENV VITE_APP_FRONTEND_URL=$VITE_APP_FRONTEND_URL


ENV ENVIRONMENT_NAME=$BUILD
RUN echo "$ENVIRONMENT_NAME $VITE_BACKEND_API_URL $VITE_APP_FRONTEND_URL"

RUN npm run $ENVIRONMENT_NAME --output-path=build

FROM nginx:alpine

COPY nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /rails-frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
