#!/bin/bash

JSON="build/lighthouse.report.json"
TMP=$(mktemp)

SCORE_0=$(cat $JSON | jq ".categories .performance .score")
SCORE_1=$(cat $JSON | jq ".categories .pwa .score")
SCORE_2=$(cat $JSON | jq ".categories .accessibility .score")
SCORE_3=$(cat $JSON | jq '.categories ."best-practices" .score')
SCORE_4=$(cat $JSON | jq ".categories .seo .score")

{
jq ".reportCategories[0] .score = $(printf $SCORE_0*100)" | \
jq ".reportCategories[1] .score = $(printf $SCORE_1*100)" | \
jq ".reportCategories[2] .score = $(printf $SCORE_2*100)" | \
jq ".reportCategories[3] .score = $(printf $SCORE_3*100)" | \
jq ".reportCategories[4] .score = $(printf $SCORE_4*100)"
} < $JSON > "$TMP" && mv "$TMP" $JSON

. ./bin/deploy.sh lighthouse.report.html
. ./bin/deploy.sh lighthouse.report.json
