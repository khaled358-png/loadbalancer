Load Balancer Project

This project demonstrates a simple load balancing and caching setup using Nginx with two backend APIs.
All services run together using Docker Compose.

📌 Project Description

api1: returns Hello from API 1

api2: returns Hello from API 2

nginx:

Load balances requests between api1 and api2

Has caching enabled to improve performance and reduce backend load

🚀 How to Run

Go to the project folder:

cd loadbalancer


Start the containers:

docker compose up -d


Test the application in your browser:
👉 http://localhost:8080
