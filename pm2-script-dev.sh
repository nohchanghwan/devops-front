#!/bin/bash
cd ~/kcms-admin-fe
pwd
git checkout dev
git pull
pm2 restart kcms-admin-fe