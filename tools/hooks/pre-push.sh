#!/bin/bash

npm run affected:test -- --parallel || exit
# npm run affected:e2e -- --prod --headless --parallel || exit
