#!/bin/bash

export MIX_ENV=prod
export PORT=4802

CFGD=$(readlink -f ~/.config/multi_bull)

if [ ! -e "$CFGD/base" ]; then
    echo "run deploy first"
    exit 1
fi

SECRET_KEY_BASE=$(cat "$CFGD/base")
export SECRET_KEY_BASE

_build/prod/rel/multi_bull/bin/multi_bull start
