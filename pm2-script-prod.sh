#!/bin/bash
cd ~/kcms-admin-fe
pwd
git checkout main
git pull
pm2 restart kcms-admin-fe