# Project Title
DA217A - Lab1: A simple 2FA password generator.

## Description
A simple 2FA password generator where the password is refreshed every 12 seconds, or upon manual refresh of the webpage.

### Dependencies
* nodemon: v2.0.15
* axios: v0.25.0
* moment: v2.29.1
* randomstring: v1.2.2

### Installing
* Clone from github https://github.com/sam-hur/DA217A-backend-lab1 or download as zip.
* Ensure `npm` is configured on the system
* If required to install dependencies manually:
	> npm i nodemon --save-dev;
	> npm i moment axios randomstring -S;

### Executing program
* Step 1: Open a UNIX terminal e.g., GitBash
* Step 2: Navigate to project directory, if not already done so
* Step 3: 
			Run as user: 
			``` 
				npm start
			``` 
			or Run as dev using nodemon:
			```
				npm run dev
			```
* Step 4: Open a web browser of your choosing. Tested on Firefox, Chrome and Microsoft Edge.
* Step 5: Enter the following into the adress bar:
			```
				localhost:8888
			```
* Step 6: Enjoy!

## Authors
Sam Hurenkamp

## Version History
* 1.0.0
    * Initial Release

## License
ISC
