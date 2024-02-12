npm init 

npm i express dotenv cors(install the packets express dotenv and cors)

npm i -D nodemon(for dev dependencies)

Create a file named index.js
			.env(environmental variables)
	Write the code for the api

	Run the script using
		node index.js

	How to make node.js as the start script
		In package.json
			"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },


	Then npm run start



Create a folder named .gitignore
	Place nodemodules inside the folder to avoid the git hub  is not overloaded with all the dependencies

nodemon
"scripts": {
    "dev": "nodemon -r dotenv/config index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

npm run dev
