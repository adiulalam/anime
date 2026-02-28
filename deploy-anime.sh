#!/bin/bash

cd anime/ && echo 'Inside anime Directory'

git reset --hard HEAD && git pull origin main && echo 'pulled master main'

docker compose up -d --build --force-recreate && echo 'Container up and Running'