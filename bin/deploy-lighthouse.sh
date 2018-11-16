#!/bin/bash

JSON="build/lighthouse.report.json"
TMP=$(mktemp)

SCORE=$(cat $JSON | jq ".score")
SCORE_0=$(cat $JSON | jq ".reportCategories[0] .score")
SCORE_1=$(cat $JSON | jq ".reportCategories[1] .score")
SCORE_2=$(cat $JSON | jq ".reportCategories[2] .score")
SCORE_3=$(cat $JSON | jq ".reportCategories[3] .score")
SCORE_4=$(cat $JSON | jq ".reportCategories[4] .score")

{
jq ".score = $(printf "%.0f\n" $SCORE)" | \
jq ".reportCategories[0] .score = $(printf "%.0f\n" $SCORE_0)" | \
jq ".reportCategories[1] .score = $(printf "%.0f\n" $SCORE_1)" | \
jq ".reportCategories[2] .score = $(printf "%.0f\n" $SCORE_2)" | \
jq ".reportCategories[3] .score = $(printf "%.0f\n" $SCORE_3)" | \
jq ".reportCategories[4] .score = $(printf "%.0f\n" $SCORE_4)"
} < $JSON > "$TMP" && mv "$TMP" $JSON

. ./bin/deploy.sh lighthouse.report.html
. ./bin/deploy.sh lighthouse.report.json
