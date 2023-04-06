const monsters = {
    monsters:
        ["Stoneppo",
            "Condor",
            "White Condor",
            "Alligon",
            "Grougana",
            "Newt",
            "Gripine",
            "Snopine",
            "Lupine",
            "Beetlefly",
            "Fortuphant",
            "Rhino",
            "Wolfspider",
            "Scorab",
            "Warcrab",
            "Vuldo",
            "Grizzly",
            "Snowbear",
            "Leoparbeak",
            "Litiger",
            "Gratoise",
            "Horsedeer",
            "Bosalo",
            "Platyzard",
            "Rockboar",
            "Vulture",
            "Poisonworm",
            "Lichen Bufonidae",
            "Snail",
            "Carnivore Blossom"]
};

const myths = {
    "Children": [
        "Crowned Quetzal",
        "Quetzalcoatlus",
        "Triceratops",
        "Velociraptor",
        "Spinosaur (It's actually a Smobirdgon)",
        "Whitefox"
    ],
    "Young": [
        "Grooveswine",
        "Serpent",
        "Centaurvir",
        "Centaurmina",
        "Centaus",
        "Centaurine",
        "Centaurite",
        "Velociraptor",
        "Jadeite",
        "Macrophaorus Bloom",
        "Walrus",
        "Giant Walrus"
    ],
    "Grand": [
        "Centauron",
        "Carnivorous Bloom",
        "Stappo",
        "Kuntur",
        "Alligon",
        "Grougana",
        "Newt",
        "Flamewolf",
        "Frostwolf",
        "Great Litiger",
        "Frost Deerbull",
        "Spikeback Lizard",
        "Pinchpion",
        "Coracrab",
        "Eleboar",
        "Silkhopper",
        "Roarclops",
        "Smobirdgon",
        "Yellow Lobcray",
        "Batolf",
        "Yellow Batolf",
        "Scale Batolf",
        "Glow Giradeer",
        "Moogiradeer",
        "Water Giradeer",
        "Whitelope",
        "Scatelope",
        "Embergator",
        "Piranha",
        "Hammerhead Shark",
        "Mahi-Mahi",
        "Starefish",
        "Lime Lobcray",
        "Sprinowl",
        "Fantafly",
        "Mallard",
        "Parrot",
        "Mountspider",
        "Haporse",
        "Snowie",
        "Banshee",
        "Spimander",
        "Globonisus",
        "Roarbor",
        "Rush Ray",
        "Turgator",
        "Chimpanimbus",
        "Caeloptera",
        "Hillord",
        "Osterlope",
        "Ferobear",
        "Verypterid",
        "Diceramandra",
        "Crocupine",
        "Specklehorn",
        "Stampdragon",
        "Lusterewt",
        "Piscertus",
        "Jadomimus",
        "Parasaurolophus",
        "Venus Fly Trap",
        "Blushpuff",
        "Azure Light",
        "Inkdrop",
        "Black-Backed Snail",
        "Whitefox",
        "Loggerhead",
        "Centaurdeus",
        "Yungang Dragon",
        "Cassowary",
        "Stegosaurus",
        "Crowned Quetzal",
        "Quetzalcoatlus",
        "Triceratops"
    ],
    "Noble": [
        "Cicada",
        "Frostppo",
        "Flamehorn Rhino",
        "Frosthorn Rhino",
        "Fire Rhino",
        "Fire Bear",
        "Frost Bear",
        "Frost Litiger",
        "Fire Litiger",
        "Fire Bosalo",
        "Bone Dragon",
        "Startlewing",
        "Sparromu",
        "Gos-Sparromu",
        "Stoatle",
        "Nian",
        "Hornbirdgon",
        "Fire Lobcray",
        "Frost Lobcray",
        "Frost Batolf",
        "Fire Batolf",
        "Jadefox",
        "Frost Giradeer",
        "Flametelope",
        "Hagpy",
        "Icegator",
        "Flamegator",
        "Stonebug",
        "Gripperbird",
        "Swordfish",
        "Grouper",
        "Killer Whale",
        "Ancient Piranha",
        "Tiger Shark",
        "Ice Whale",
        "Fantafish",
        "Hermitshell",
        "Squid",
        "Cray",
        "Transparay",
        "Mutafish",
        "Whitefox",
        "Mongpion",
        "Sparrodact",
        "Pixie",
        "Mulberry Lady",
        "Sharprush",
        "Murkrider",
        "Armoxerous",
        "Batnix",
        "Rhinodile",
        "Dinbear",
        "Horned Denglong",
        "Carnivorous Bloom",
        "Floating Mist",
        "Chimera",
        "Jindipelta",
        "Crowned Quetzal",
        "Quetzalcoatlus",
        "Triceratops",
        "Velociraptor",
        "Brontosaur",
        "Spinosaur",
        "Tyrannosaurus Rex",
        "Feathered Steed"
    ],
    "Illustrious": [
        "Stonespine Rhino",
        "Plate Bear",
        "Flamefox",
        "Icefox",
        "Browtelope",
        "Icebug",
        "Flamebug",
        "Greenie",
        "Dragonwhale",
        "Fiendfish",
        "Azure True Bufonidae",
        "Grassfish",
        "Polar Feathered Steed",
        "Stegosaurus",
        "Carnivore Bloom",
        "Macrophaorus Bloom",
        "Vindkaldr",
        "Feiyi"
    ],
    "Super Deobeast": [
        "Magma Beast",
        "Octofish",
        "Miragon"
    ]
};


const legends = {
    "Tier 1": [
        "Maton",
        "Releigh",
        "Dike",
        "Fiero",
        "Aegle",
        "Ayda",
        "Hocca",
        "Ladron",
        "Enara",
        "Danica"
    ],
    "Tier 2": [
        "Fiore",
        "Jengo",
        "Doran",
        "Stav",
        "Ansgar",
        "Athol",
        "Ortzi",
        "Terhi",
        "Cassius",
        "Flann"
    ],
    "Tier 3": [
        "Arida",
        "Kumiho",
        "Murali",
        "Culhwch",
        "Zither",
        "Redrum",
        "Anh",
        "Archer"
    ],
    "Tier 4": [
        "Rossa",
        "Bazanur",
        "Akai",
        "Thistle",
        "Zuriel",
        "Swanhild",
        "Moliti",
        "Mariah",
        "Davie",
        "Wyra"
    ]
};

const pets = {
    "Children": [
        "Crowned Quetzal",
        "Quetzalcoatlus",
        "Triceratops",
        "Velociraptor",
        "Spinosaur (It's actually a Smobirdgon)",
        "Whitefox"
    ],
    "Young": [
        "Grooveswine",
        "Serpent",
        "Centaurvir",
        "Centaurmina",
        "Centaus",
        "Centaurine",
        "Centaurite",
        "Velociraptor",
        "Jadeite",
        "Macrophaorus Bloom",
        "Walrus",
        "Giant Walrus"
    ],
    "Grand": [
        "Centauron",
        "Carnivorous Bloom",
        "Stappo",
        "Kuntur",
        "Alligon",
        "Grougana",
        "Newt",
        "Flamewolf",
        "Frostwolf",
        "Great Litiger",
        "Frost Deerbull",
        "Spikeback Lizard",
        "Pinchpion",
        "Coracrab",
        "Eleboar",
        "Silkhopper",
        "Roarclops",
        "Smobirdgon",
        "Yellow Lobcray",
        "Batolf",
        "Yellow Batolf",
        "Scale Batolf",
        "Glow Giradeer",
        "Moogiradeer",
        "Water Giradeer",
        "Whitelope",
        "Scatelope",
        "Embergator",
        "Piranha",
        "Hammerhead Shark",
        "Mahi-Mahi",
        "Starefish",
        "Lime Lobcray",
        "Sprinowl",
        "Fantafly",
        "Mallard",
        "Parrot",
        "Mountspider",
        "Haporse",
        "Snowie",
        "Banshee",
        "Spimander",
        "Globonisus",
        "Roarbor",
        "Rush Ray",
        "Turgator",
        "Chimpanimbus",
        "Caeloptera",
        "Hillord",
        "Osterlope",
        "Ferobear",
        "Verypterid",
        "Diceramandra",
        "Crocupine",
        "Specklehorn",
        "Stampdragon",
        "Lusterewt",
        "Piscertus",
        "Jadomimus",
        "Parasaurolophus",
        "Venus Fly Trap",
        "Blushpuff",
        "Azure Light",
        "Inkdrop",
        "Black-Backed Snail",
        "Whitefox",
        "Loggerhead",
        "Centaurdeus",
        "Yungang Dragon",
        "Cassowary",
        "Stegosaurus",
        "Crowned Quetzal",
        "Quetzalcoatlus",
        "Triceratops"
    ],
    "Noble": [
        "Cicada",
        "Frostppo",
        "Flamehorn Rhino",
        "Frosthorn Rhino",
        "Fire Rhino",
        "Fire Bear",
        "Frost Bear",
        "Frost Litiger",
        "Fire Litiger",
        "Fire Bosalo",
        "Bone Dragon",
        "Startlewing",
        "Sparromu",
        "Gos-Sparromu",
        "Stoatle",
        "Nian",
        "Hornbirdgon",
        "Fire Lobcray",
        "Frost Lobcray",
        "Frost Batolf",
        "Fire Batolf",
        "Jadefox",
        "Frost Giradeer",
        "Flametelope",
        "Hagpy",
        "Icegator",
        "Flamegator",
        "Stonebug",
        "Gripperbird",
        "Swordfish",
        "Grouper",
        "Killer Whale",
        "Ancient Piranha",
        "Tiger Shark",
        "Ice Whale",
        "Fantafish",
        "Hermitshell",
        "Squid",
        "Cray",
        "Transparay",
        "Mutafish",
        "Whitefox",
        "Mongpion",
        "Sparrodact",
        "Pixie",
        "Mulberry Lady",
        "Sharprush",
        "Murkrider",
        "Armoxerous",
        "Batnix",
        "Rhinodile",
        "Dinbear",
        "Horned Denglong",
        "Carnivorous Bloom",
        "Floating Mist",
        "Chimera",
        "Jindipelta",
        "Crowned Quetzal",
        "Quetzalcoatlus",
        "Triceratops",
        "Velociraptor",
        "Brontosaur",
        "Spinosaur",
        "Tyrannosaurus Rex",
        "Feathered Steed"
    ],
    "Illustrious": [
        "Stonespine Rhino",
        "Plate Bear",
        "Flamefox",
        "Icefox",
        "Browtelope",
        "Icebug",
        "Flamebug",
        "Greenie",
        "Dragonwhale",
        "Fiendfish",
        "Azure True Bufonidae",
        "Grassfish",
        "Polar Feathered Steed",
        "Stegosaurus",
        "Carnivore Bloom",
        "Macrophaorus Bloom",
        "Vindkaldr",
        "Feiyi"
    ],
    "Evolution": [
        "Stagasus",
        "Pinnapup",
        "Minkrat",
        "Dragon Horse",
        "Serpent",
        "Dululululu",
        "Finned Fox",
        "Howlhog",
        "Blazewyrm",
        "Tengu",
        "Artigra",
        "Jinwei",
        "Jade Rabbit",
        "Hydra"
    ]
};

class Attendant {
    constructor(name, village, item, amount) {
        this.name = name;
        this.village = village;
        this.item = item;
        this.amount = amount;
    }

    // Define a getter for index access
    get(key) {
        return this[key];
    }
}

const attendants = [
    new Attendant("Shamintrog", "Ape Village (Eastmount)", "Fruit Sauce", 1000),
    new Attendant("Sesuntrog", "Ape Village (Eastmount)", "Fruit Sauce", 1000),
    new Attendant("Jichotrog", "Ape Village (Eastmount)", "Fruit Sauce", 1000),
    new Attendant("Portotrog", "Ape Village (Eastmount)", "Large Fruit Stew", 200),
    new Attendant("Manistrog", "Ape Village (Eastmount)", "Large Fruit Stew", 200),
    new Attendant("Adaotrog", "Ape Village (Eastmount)", "Large Fruit Stew", 200),
    new Attendant("Buccitrog", "Ape Village (Eastmount)", "Large Fruit Stew", 200),
    new Attendant("Medakat", "Felis Village (Southmount)", "Drunken Fish", 1000),
    new Attendant("Panthakat", "Felis Village (Southmount)", "Drunken Fish", 1000),
    new Attendant("Durakat", "Felis Village (Southmount)", "Drunken Fish", 1000),
    new Attendant("Boakat", "Felis Village (Southmount)", "Grilled Meat Cubes", 200),
    new Attendant("Airikat", "Felis Village (Southmount)", "Grilled Meat Cubes", 200),
    new Attendant("Atenkat", "Felis Village (Southmount)", "Grilled Meat Cubes", 200),
    new Attendant("Prospakat", "Felis Village (Southmount)", "Grilled Meat Cubes", 200),
    new Attendant("Vulaustus", "Hunsel Tribe (Westmount)", "Deep Fried Meat", 1000),
    new Attendant("Vulnator", "Hunsel Tribe (Westmount)", "Deep Fried Meat", 1000),
    new Attendant("Vulchining", "Hunsel Tribe (Westmount)", "Deep Fried Meat", 1000),
    new Attendant("Vuloberg", "Hunsel Tribe (Westmount)", "Grilled Venison", 200),
    new Attendant("Vuloreas", "Hunsel Tribe (Westmount)", "Grilled Venison", 200),
    new Attendant("Vulanin", "Hunsel Tribe (Westmount)", "Grilled Venison", 200),
    new Attendant("Vulendor", "Hunsel Tribe (Westmount)", "Grilled Venison", 200),
    new Attendant("Jeo-aqui", "Winged Ones Village (Westmount)", "Fishball Soup", 1000),
    new Attendant("Cuung-aqui", "Winged Ones Village (Westmount)", "Fishball Soup", 1000),
    new Attendant("AA-aqui", "Winged Ones Village (Westmount)", "Fishball Soup", 1000),
    new Attendant("Fung-aqui", "Winged Ones Village (Westmount)", "Wormy Soup", 200),
    new Attendant("Cin-Aqui", "Winged Ones Village (Westmount)", "Wormy Soup", 200),
    new Attendant("Jeng-Aqui", "Winged Ones Village (Westmount)", "Wormy Soup", 200),
    new Attendant("Saam-Aqui", "Winged Ones Village (Westmount)", "Wormy Soup", 200),
    new Attendant("Dragance", "Scaly Village (Southmount)", "Garlic Steaks", 1000),
    new Attendant("Dratag", "Scaly Village (Southmount)", "Garlic Steaks", 1000),
    new Attendant("Dranor", "Scaly Village (Southmount)", "Garlic Steaks", 1000, 1000),
    new Attendant("Dramore", "Scaly Village (Southmount)", "Braised Meat Cubes", 200, 1000),
    new Attendant("Dralore", "Scaly Village (Southmount)", "Braised Meat Cubes", 200, 1000),
    new Attendant("Draverse", "Scaly Village (Southmount)", "Braised Meat Cubes", 200, 1000),
    new Attendant("Dravolen", "Scaly Village (Southmount)", "Braised Meat Cubes", 200, 1000),
    new Attendant("Furoo", "Furungulate Village (Eastmount Main City)", "Seasonal Fried Veggies w/ Garlic", 1000),
    new Attendant("Findoo", "Furungulate Village (Eastmount Main City)", "Seasonal Fried Veggies w/ Garlic", 1000),
    new Attendant("Patoo", "Furungulate Village (Eastmount Main City)", "Seasonal Fried Veggies w/ Garlic", 1000),
    new Attendant("Waroo", "Furungulate Village (Eastmount Main City)", "Large Fruit Stew", 200),
    new Attendant("Letoo", "Furungulate Village (Eastmount Main City)", "Large Fruit Stew", 200),
    new Attendant("Makoo", "Furungulate Village (Eastmount Main City)", "Large Fruit Stew", 200),
    new Attendant("Bidoo", "Furungulate Village (Eastmount Main City)", "Large Fruit Stew", 200),
    new Attendant("Mantilead", "Kunze Village (Eastmount)", "Spiced Mushrooms", 1000),
    new Attendant("Mantiguard", "Kunze Village (Eastmount)", "Spiced Mushrooms", 1000),
    new Attendant("Mantitrack", "Kunze Village (Eastmount)", "Spiced Mushrooms", 1000),
    new Attendant("Mantistock", "Kunze Village (Eastmount)", "Chargrilled Veggie Kabob", 200),
    new Attendant("Mantitell", "Kunze Village (Eastmount)", "Chargrilled Veggie Kabob", 200),
    new Attendant("Mantitrade", "Kunze Village (Eastmount)", "Chargrilled Veggie Kabob", 200),
    new Attendant("Mantieat", "Kunze Village (Eastmount)", "Chargrilled Veggie Kabob", 200),
    new Attendant("Kumiho", "Any Village", "200 Spirituality Fruit"),
    new Attendant("Lil Bel", "Mount Ockwei", "20 Dragon Fruit"),
    new Attendant("Pol", "Any Village", "Moonlight Feast Plate"),
    new Attendant("Draros", "Home", "Buddha's Temptation", 50000)
]

    async function loadListData() {

    const data = {
        monsters, myths, legends, pets, attendants
    };
    return data;
}