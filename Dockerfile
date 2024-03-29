# This image is based on the fat node 11 image.
# We require fat images as neither alpine, or slim, include git binaries.
FROM node:11

# Port 8100 for ionic dev server.
EXPOSE 8100

# Port 35729 is the live-reload server.
EXPOSE 35729

# Port 53703 is the Chrome dev logger port.
EXPOSE 53703

# CCS24Mobile uses Cordova, Ionic, and Gulp.
RUN npm install -g cordova ionic gulp && rm -rf /root/.npm

WORKDIR /app

COPY . /app

# The setup script will handle npm installation, cordova setup, and gulp setup.
RUN npm run setup && rm -rf /root/.npm

# Provide a Healthcheck command for easier use in CI.
HEALTHCHECK --interval=10s --timeout=3s --start-period=30s CMD curl -f http://localhost:8100 || exit 1

CMD ["ionic", "serve", "-b"]
