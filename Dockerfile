FROM node:18.17-slim

WORKDIR /app

ENV NODE_ENV=production

COPY . ./
COPY .yarn ./.yarn

# Install dependencies
RUN yarn workspaces focus @sample/server

# Build application
RUN yarn workspace @sample/server build

CMD ["yarn", "workspace", "@sample/server", "start"]
