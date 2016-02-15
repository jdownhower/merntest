@echo off
REM API Tests

REM test GET on /api/bugs: returns array of bugs
curl localhost:3000/api/bugs
echo.

REM same test with a if-none-match that matches a previous etag.  
REM This will return a 304
REM curl -v --header 'If-None-Match: W/"b5-F1b7cwQ6h9O04csif+Wqkw"' localhost:3000/api/bugs

REM Test POST to create a new bug and return it
REM Won't work if type is not set to */* in bodyParser
curl ^
--data "{\"priority\":\"P3\",\"owner\":\"Pieta\",\"status\":\"Open\",\"title\":\"bug added via api\"}" ^
http://localhost:3000/api/bugs
  
curl ^
--header "Content-Type: application/json" ^
--data "{\"priority\":\"P3\",\"owner\":\"Pieta\",\"status\":\"Open\",\"title\":\"bug added via api\"}" ^
http://localhost:3000/api/bugs


curl --header "Content-Type: application/json" --data "[{\"status\": \"Open\"}]" http://localhost:3000/api/bugs

