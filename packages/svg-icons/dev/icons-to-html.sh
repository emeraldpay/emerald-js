#!/bin/bash

writefile="../example/all.html"
> $writefile

for file in ../icons/*.svg; do


	svg="<figure>"$(<$file)"<figcaption>"$(basename ${file%.*})"</figcaption></figure>"


	all="$all $svg"
done

echo $all >> $writefile
