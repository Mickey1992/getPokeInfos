const TYPE_INDEX = {
	"Normal": {
		"strong": [],
		"weak": [
			"Rock",
			"Steel",
			"Ghost"
		]
	},
	"Fire": {
		"strong": [
			"Grass",
			"Ice",
			"Bug",
			"Steel"
		],
		"weak": [
			"Fire",
			"Water",
			"Rock",
			"Dragon"
		]
	},
	"Water": {
		"strong": [
			"Fire",
			"Ground",
			"Rock"
		],
		"weak": [
			"Water",
			"Grass",
			"Dragon"
		]
	},
	"Electric": {
		"strong": [
			"Water",
			"Flying"
		],
		"weak": [
			"Electric",
			"Grass",
			"Dragon",
			"Ground"
		]
	},
	"Grass": {
		"strong": [
			"Water",
			"Ground",
			"Rock"
		],
		"weak": [
			"Fire",
			"Grass",
			"Poison",
			"Flying",
			"Bug",
			"Dragon",
			"Steel"
		]
	},
	"Ice": {
		"strong": [
			"Grass",
			"Ground",
			"Flying",
			"Dragon"
		],
		"weak": [
			"Fire",
			"Water",
			"Ice",
			"Steel"
		]
	},
	"Fighting": {
		"strong": [
			"Normal",
			"Ice",
			"Rock",
			"Dark",
			"Steel"
		],
		"weak": [
			"Poison",
			"Flying",
			"Psychic",
			"Bug",
			"Fairy",
			"Ghost"
		]
	},
	"Poison": {
		"strong": [
			"Grass",
			"Fairy"
		],
		"weak": [
			"Poison",
			"Ground",
			"Rock",
			"Ghost",
			"Steel"
		]
	},
	"Ground": {
		"strong": [
			"Fire",
			"Electric",
			"Poison",
			"Rock",
			"Steel"
		],
		"weak": [
			"Grass",
			"Bug",
			"Flying"
		]
	},
	"Flying": {
		"strong": [
			"Grass",
			"Fighting",
			"Bug"
		],
		"weak": [
			"Electric",
			"Rock",
			"Steel"
		]
	},
	"Psychic": {
		"strong": [
			"Fighting",
			"Poison"
		],
		"weak": [
			"Psychic",
			"Steel",
			"Dark"
		]
	},
	"Bug": {
		"strong": [
			"Grass",
			"Psychic",
			"Dark"
		],
		"weak": [
			"Fire",
			"Fighting",
			"Poison",
			"Flying",
			"Ghost",
			"Steel",
			"Fairy"
		]
	},
	"Rock": {
		"strong": [
			"Fire",
			"Ice",
			"Flying",
			"Bug"
		],
		"weak": [
			"Fighting",
			"Ground",
			"Steel"
		]
	},
	"Ghost": {
		"strong": [
			"Psychic",
			"Ghost"
		],
		"weak": [
			"Dark",
			"Normal"
		]
	},
	"Dragon": {
		"strong": [
			"Dragon"
		],
		"weak": [
			"Steel",
			"Fairy"
		]
	},
	"Dark": {
		"strong": [
			"Psychic",
			"Ghost"
		],
		"weak": [
			"Fighting",
			"Dark",
			"Fairy"
		]
	},
	"Steel": {
		"strong": [
			"Ice",
			"Rock",
			"Fairy"
		],
		"weak": [
			"Fire",
			"Water",
			"Electric",
			"Steel"
		]
	},
	"Fairy": {
		"strong": [
			"Fighting",
			"Dragon",
			"Dark"
		],
		"weak": [
			"Fire",
			"Poison",
			"Steel"
		]
	}
}