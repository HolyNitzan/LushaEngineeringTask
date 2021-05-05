echo Addding Users to DB
for i in `seq 1 123`;do
  pass=$(date  +%s000)
  curl localhost:4000/api/v1/users/create -H "content-type: application/json" \
     -d "{ \"email\": \"user${i}@gmail.com\", \"password\": \"${pass}\", \"firstName\": \"person${i}\", \"lastName\": \"lastname{i}\", \"description\": \"auto tests\" }"
  
done
