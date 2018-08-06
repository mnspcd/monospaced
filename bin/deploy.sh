#!/bin/bash

DEST="~/webapps/static_monospaced";
HOST="monospaced";

rsync --delete --exclude={.well-known} --recursive --rsh=ssh ./build/$1 $HOST:$DEST && echo "Deployed to $HOST:$DEST/$1"
