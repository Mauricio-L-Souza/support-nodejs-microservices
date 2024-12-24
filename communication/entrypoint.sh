#!/bin/bash

set -e

npm i

npm run sutando migrate:run

npm run start:dev

# sleep infinity