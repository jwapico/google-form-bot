#! /bin/bash
for i in {1..4}
do
   echo "running $i"
   node src/index.js &
done