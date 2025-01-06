#!/bin/bash

# PostgreSQLのDockerコンテナをデタッチモードで起動
docker run -d \
  --name postgres-container \
  -p 5432:5432 \
  --env-file docker/db/.env.db \
  encrypted-postgres

echo "PostgreSQL container started successfully."
