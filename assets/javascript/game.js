var characterFullStats = [{
    name: "HanSolo",
    health: 150,
    attack: 9,
    imageUrl: "assets/images/han solo.png",
    counterAttack: 14

}, {
    name: "KyloRen",
    health: 140,
    attack: 10,
    imageUrl: "assets/images/kylo ren.png",
    counterAttack: 18
}, {
    name: "Chewbacca",
    health: 130,
    attack: 8,
    imageUrl: "assets/images/chewbacca.png",
    counterAttack: 10
}, {
    name: "DarthVader",
    health: 155,
    attack: 15,
    imageUrl: "assets/images/darth vader.png",
    counterAttack: 15
}, {
    name: "BobaFett",
    health: 120,
    attack: 7,
    imageUrl: "assets/images/boba fett.png",
    counterAttack: 8
}, {
    name: "DarthSidious",
    health: 100,
    attack: 13,
    imageUrl: "assets/images/darth sidious.png",
    counterAttack: 11
}, {
    name: "JarJarBinks",
    health: 50,
    attack: 3,
    imageUrl: "assets/images/jar jar binks.png",
    counterAttack: 4
}, {
    name: "LukeSkywalker",
    health: 175,
    attack: 11,
    imageUrl: "assets/images/luke skywalker.png",
    counterAttack: 12
}, {
    name: "Rey",
    health: 160,
    attack: 11,
    imageUrl: "assets/images/rey.png",
    counterAttack: 11
}, {
    name: "Yoda",
    health: 145,
    attack: 15,
    imageUrl: "assets/images/yoda.png",
    counterAttack: 10
}, {
    name: "Stormtrooper",
    health: 90,
    attack: 7,
    imageUrl: "assets/images/stormtrooper.png",
    counterAttack: 5
}, {
    name: "DarthMaul",
    health: 130,
    attack: 15,
    imageUrl: "assets/images/darth maul.png",
    counterAttack: 17
}, {
    name: "PrincessLeia",
    health: 125,
    attack: 8,
    imageUrl: "assets/images/princess leia.png",
    counterAttack: 9
}, ];

// Number of players that you want to generate.
var numberOfPlayers = 4;

// Total number of players you have in your characters array.
var totalAvailableCharacters = 13;

// Variable to hold the randomly selected characters.
var selectedCharactersArray = [];

// Loop that will continuouly loop until we have the right length
// that we want based on the numberOfPlayers variable.
while (selectedCharactersArray.length < numberOfPlayers) {

    // Here you generate a random number.
    var randomnumber = Math.floor((Math.random() * totalAvailableCharacters));

    // What this if/continue part is doing is checking that the randomNumber isn't 
    // already in the selectedCharactersArray.
    // If the number is already in the array, skip this iteration and do the loop again.
    if (selectedCharactersArray.indexOf(randomnumber) > -1) continue;

    // If the number is not already in the array, add it to the selectedCharactersArray.
    selectedCharactersArray.push(randomnumber);

}
console.log(selectedCharactersArray);

// Debug purposes: check selectedCharactersArray has unique numbers

for (i = 0; i < 4; i++) {
    var img = $('<img class="characters">');
    img.attr("src", characterFullStats[selectedCharactersArray[i]].imageUrl);
    img.attr("id", characterFullStats[selectedCharactersArray[i]].name);
    img.appendTo(".characters-section");
}
console.log(characterFullStats[selectedCharactersArray[0]].name);
console.log(characterFullStats[selectedCharactersArray[1]].name);
console.log(characterFullStats[selectedCharactersArray[2]].name);
console.log(characterFullStats[selectedCharactersArray[3]].name);

var attakPower = 0;
var newAttackPower = 0;
var defenderCounter = 0;



$(document).ready(function() {
    $("#" + characterFullStats[selectedCharactersArray[0]].name).click(function() {
        $("#" + characterFullStats[selectedCharactersArray[0]].name).appendTo(".yourcharacter");
        $(".yourHealth").text("Health: " + characterFullStats[selectedCharactersArray[0]].health);
        $("#" + characterFullStats[selectedCharactersArray[1]].name).appendTo(".enemies");
        $("#" + characterFullStats[selectedCharactersArray[2]].name).appendTo(".enemies");
        $("#" + characterFullStats[selectedCharactersArray[3]].name).appendTo(".enemies");
        $(".attack").click(function() {
            attackPower = characterFullStats[selectedCharactersArray[0]].attack;
            newAttackPower = attackPower + characterFullStats[selectedCharactersArray[0]].attack;
        });
        $("#" + characterFullStats[selectedCharactersArray[3]].name).click(function() {
            $("#" + characterFullStats[selectedCharactersArray[3]].name).appendTo(".defender");
            $(".defenderHealth").text("Health: " + characterFullStats[selectedCharactersArray[3]].health);
        });

        $("#" + characterFullStats[selectedCharactersArray[2]].name).click(function() {
            $("#" + characterFullStats[selectedCharactersArray[2]].name).appendTo(".defender");
            $(".defenderHealth").text("Health: " + characterFullStats[selectedCharactersArray[2]].health);
        });

        $("#" + characterFullStats[selectedCharactersArray[1]].name).click(function() {
            $("#" + characterFullStats[selectedCharactersArray[1]].name).appendTo(".defender");
            $(".defenderHealth").text("Health: " + characterFullStats[selectedCharactersArray[1]].health);
        });


    });

});
