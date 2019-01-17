#!/bin/bash

writefile="../example/emerald_new.json"
CR=$(printf '\r')

> $writefile

all="["

for file in ../icons/*.svg; do
object='{ "name" : "'$(basename ${file%.*})'" , "tags":"" },'$CR
all="$all$object"
done

all="$all]"

// todo remove last , ...

echo $all >> $writefile
