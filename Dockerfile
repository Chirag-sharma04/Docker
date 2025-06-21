FROM node

# Set environment variables
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty

# Create app directory
RUN mkdir -p /testapp

# Copy all files to container
COPY . /testapp

# Run the app
CMD ["node", "/testapp/server.js"]
