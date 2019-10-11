from flask import Flask
from flask import jsonify
from flask import request
from pymongo import MongoClient
from flask_cors import CORS
from bson.json_util import dumps
import json
import datetime

app = Flask(__name__)
CORS(app)

client = MongoClient('localhost:27017')
db = client.pokemondb

@app.route('/pokemons/bulkAdd', methods=['GET'])
def pokemons_bulk_add():
	try:
		db.pokemons.insert_one({
			"id": 12,
			"name": "Groupix",
			"hp": 17,
			"cp": 8,
			"picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
			"types": ["Feu"],
			"created": datetime.datetime.now()
		})
		return dumps({'message':'ok'})
	except Exception as e:
		return dumps({'status':'500', 'message':str(e)})

@app.route('/getPokemonsListe', methods=['GET'])
def get_liste_pokemons():
	output = []
	for p in db.pokemons.find():
		output.append({
			"id": p['id'], 
			"name": p['name'],
			"hp": p['hp'],
			"cp": p['cp'],
			"picture": p['picture'],
			"types": p['types'],
			"created": p['created']
		})
	return jsonify(output)

@app.route('/findPokemon/<search>', methods=['GET'])
def find_pokemon(search):
	search = str(search)
	output = []
	for p in db.pokemons.find({"name" : {"$regex" : ".*"+search+".*"}}):
		output.append({
			"id": p['id'], 
			"name": p['name'],
			"hp": p['hp'],
			"cp": p['cp'],
			"picture": p['picture'],
			"types": p['types'],
			"created": p['created']
		})
	return jsonify(output)



@app.route('/getPokemon/<id>', methods=['GET'])
def get_pokemon(id):
	p = db.pokemons.find_one({'id': int(id)})
	output = {"id": p['id'], "name": p['name'],"hp": p['hp'],"cp":p['cp'],"picture": p['picture'],"types": p['types'],"created": p['created']}
	return jsonify(output)

@app.route('/deletePokemon/<id>', methods=['GET'])
def delete_pokemon(id):
	try:
		db.pokemons.delete_one({'id': int(id)})
		return dumps({'status': 200, 'message': 'success'})
	except Exception as e:
		return dumps({'status': 500, 'error': str(e)})