# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Install the required dependencies
RUN apt-get update && apt-get install -y \
    libjpeg62-turbo \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Command to run your application
CMD ["python", "app.py"]
