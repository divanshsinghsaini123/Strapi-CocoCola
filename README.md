# This is the url where you can do login and check the deployement of this application 

NEXT_PUBLIC_STRAPI_URL="https://jellyfish-app-4r55c.ondigitalocean.app/"

# Make sure to add changes inside schema 
-- make sure to clone localy and make changes then deploy it on strapi cloud or your server ,
use --- npm run dev 



# for data migration from strapi cloud to your custom host 

pull token ( where to pull the data ) 

1c7b39a2db59108afa1327e2461ee1c20495b4c755b2ca036b981a44ecec80afcacbecdf661c399a699152da99dc90ee1bc9e008ed631f161c41ff42f4799f6062e9331ccc70a81d52c11c4e5d0ba651b4b2d4ae2a10f3ffc221d333cbb2af0b145469f0751eddb9a13aa4360692632c03a90ae14af0caf6ab1883415654ea9b



steps to transfer , 

1. Create a transfer token { jaha se data pull krna h ) , pull type ( copy that ) 


2. now create a transfer token in local( jisme data push krna h )  , push type


3.  run this command in local machine in new terminal 

npx strapi transfer --from https://active-nurture-c4d476a309.strapiapp.com/admin

enter the pull tocken , 

4. press enter 



# for backup the database and restore database 
# enter the values from the env file , 

$env:PGPASSWORD="YOUR_PASSWORD"
$env:PGSSLMODE="require"

& "C:\Program Files\PostgreSQL\18\bin\pg_dump.exe" ` 
# commnet :YOU NEED TO FIND INSTALL LATEST POSTGRES VERSION AND PUT THE    pg_dump.exe path here .
-h DATABASE-HOST`
-p PORT `
-U USER-NAME `
-d DATABASE_NAME `
-F c `
-f "D:\Strapi-CocoCola\backup.dump"



# Restore Database (Method 1: Existing Database)

# ⚠️ Overwrites existing data.

$env:PGPASSWORD="YOUR_PASSWORD"
$env:PGSSLMODE="require"

& "C:\Program Files\PostgreSQL\18\bin\pg_restore.exe" `
-h YOUR_HOST `
-p 25060 `
-U doadmin `
-d YOUR_DATABASE `
--clean `
--if-exists `
"backup.dump"




# Restore Database (Method 2: New Database)
# Create a new database (e.g. restore_test) in DigitalOcean.



$env:PGPASSWORD="YOUR_PASSWORD"
$env:PGSSLMODE="require"

& "C:\Program Files\PostgreSQL\18\bin\pg_restore.exe" `
-h YOUR_HOST `
-p 25060 `
-U doadmin `
-d restore_test `
"backup.dump"




$env:PGPASSWORD="YOUR_PASSWORD"
$env:PGSSLMODE="require"

& "C:\Program Files\PostgreSQL\18\bin\pg_dump.exe" `
-h YOUR_HOST `
-p 25060 `
-U doadmin `
-d restore_test `
-f backup.sql

# This restores the backup into a separate database without affecting production.

# now to dump this file into database 




