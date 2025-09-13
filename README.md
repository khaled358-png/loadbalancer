# loadbalancer
# Load Balancer Project

This project contains **two simple APIs** and a **Nginx container** for load balancing and caching.
All three containers run together using **Docker Compose**.

---

## Project Description

- **api1**: returns `"Hello from API 1"`
- **api2**: returns `"Hello from API 2"`
- **nginx**: load balances requests between api1 and api2, with caching enabled

All services are defined in a **single Docker Compose file**.

---

## How to Run

1. Go to the project folder:

```bash
cd loadbalancer
docker compose up -d
and test with open URL
http://localhost:8080

