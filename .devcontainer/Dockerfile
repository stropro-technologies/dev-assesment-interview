FROM mcr.microsoft.com/devcontainers/dotnet:8.0-bookworm

# Install Node JS
RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install 18 && nvm use 18 && npm install -g typescript" 2>&1
