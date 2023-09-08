#!/bin/bash

set -eu

SERVICE_NAME=$1
SERVICES=$(aws apprunner list-services --region ap-northeast-1)
SERVICE_ARN=$(echo $SERVICES | jq --arg SERVICE_NAME "$1" --raw-output '.ServiceSummaryList[] | select(.ServiceName == $SERVICE_NAME) | .ServiceArn')

echo $SERVICE_ARN
