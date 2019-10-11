# Pokemons
Displaying pokemons with Angular
Introduction to the fundamental principles of Typescript with Angular

## Home page

This is the main page of the web application

![alt text](http://image.noelshack.com/fichiers/2019/41/3/1570613507-pokemons-home-page.png)

## Details

We can get the details on a pokemon by a simple click on its label

![alt text](http://image.noelshack.com/fichiers/2019/41/3/1570613511-pokemon-details.png)

## 404

If the desired page is unknown, we are taken back to the home page

![alt text](http://image.noelshack.com/fichiers/2019/41/3/1570613514-pokemon-404.png)


## Using the API with MongoDB

1- Install MongoDB

2- Install python on your machine. Make sure that the program is added to the environment variable during installation

3- On the command line, go to the pokemonservice folder

3- Type the following commands: 
- pip install flask
- pip install flask_cors
- pip install json_utils
- pip install pymongo

4- Type the commands: 
- $env:FLASK_APP="app.py"
- .\venv\Scripts\activate
- python -m flask run
The application starts on port 5000

5- Insert the pokemons into your database.
In the "app.py" file, insert the pokemon in the method pokemons_bulk_add(). Register and restart the server with 
the command "python -m flask run".
You can, using POSTMAN, make requests on the localhost:5000/bulkAdd service to add. 
PS: It's a little annoying to do for each pokemon. You can add the whole list at once with an insert_many