#!/bin/bash

export MIX_ENV=prod
export PORT=4802
export NODEBIN='pwd'/assets/node_modules/.bin
export PATH="$PATH:$NODEBIN`"

_build/prod/rel/multi_bull/bin/multi_bull start
