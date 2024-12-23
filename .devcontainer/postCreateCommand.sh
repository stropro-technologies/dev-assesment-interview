#!/bin/bash

# Install .Net Tools
dotnet tool install --global dotnet-ef --version 8.*

# Generating net core development certificates
dotnet dev-certs https
