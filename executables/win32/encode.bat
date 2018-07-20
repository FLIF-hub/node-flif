:: You can drag/drop an image onto this file to have it encode to flif
SET a=%~1
SET b=.flif
SET c=%a%%b%
flif.exe -e %a% %c%
