#!/bin/bash

set -e

npm i

npm run sutando migrate:run

# sleep infinity

npm run start:dev