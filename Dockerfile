FROM "node:18"
COPY . ./
RUN yarn
RUN yarn build
ENTRYPOINT ["yarn", "preview"]