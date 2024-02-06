#! /bin/bash
for i in {1..10}
do
   echo "running $i"
   node src/index.js &
done