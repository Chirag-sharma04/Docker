FROM node

# Set environment variables
ENV MONGO_DB_USERNAME=<USERNAME> \
    MONGO_DB_PWD=<PASSWORD>

# Create app directory
RUN mkdir -p /testapp

# Copy all files to container
COPY . /testapp

# Run the app
CMD ["node", "/testapp/server.js"]
