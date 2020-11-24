$(document).ready(function () {
    var australianAnimals = ["bandicoot", "crocodile", "dingo", "echidna",
        "frilled-dragon", "kangaroo", "koala", "ostrich", "platypus",
        "striped-possum", "tasmanian-devil", "wombat"];
    var chineseFood = ["bao", "chow-mein", "dumplings", "egg-rolls",
        "fortune-cookies", "fried-rice", "gyoza", "lo-mein", "mapo-tofu",
        "ramen", "shumai", "wonton-soup"];
    var dinosaurs = ["ankylosaurus", "brachiosaurus", "dilophosaurus",
        "pachycelphalosaurus", "pterodactyl", "stegosaurus",
        "styracosaurus", "triceratops", "tyrannosaurus-rex",
        "velociraptor"];
    var solarSystem = ["earth", "jupiter", "luna", "mars", "mercury",
        "neptune", "saturn", "sol", "uranus", "venus"];

    $("#imageSet").change(showAllImages);
    $("#huntButton").click(arrayHunt);

    showAllImages();

    function showAllImages() {
        // What image set was selected? This is the directory name
        var directoryName = $("#imageSet").val();
        // Based on the selection, use the correct array
        var arrayOfImagesNames = getSelectedArray();

        // Empty out any children from the div
        var imageDiv = $("#originalArray").empty();

        // Make two rows of images, half in each row
        var half = arrayOfImagesNames.length / 2;
        // How many images are in the current row?
        var count = 0;
        // The current <div class="row">
        var row;

        for (var fileName of arrayOfImagesNames) {
            // Time to make a new row?
            if (count === 0 || count >= half) {
                row = $("<div>").addClass("row");
                imageDiv.append(row);
                count = 0;
            }
            // append a <figure> with the image and its caption
            row.append(createImage(directoryName, fileName));
            count++;
        }

    }

    function createImage(directory, fileName) {
        // Create a div with a Bootstrap class
        var col = $("<div>").addClass("col");
        // Create a figure (can have a caption)
        var figure = $("<figure>").addClass("figure");
        col.append(figure);

        // Create the image itself
        var img = $("<img>");
        img.attr("src", `${directory}/${fileName}.png`);
        img.attr("alt", fileName);

        // Add the image to the figure
        figure.append(img);

        // Create a caption
        var caption = $(`<figcaption>${fileName}</figcaption>`)
            .addClass("figure-caption text-center");
        figure.append(caption);

        return col;
    }

    function getSelectedArray() {
        // Which image set was selected?
        var selection = $("#imageSet").val();

        // Return the array that corresponds to
        // the selected string
        if (selection === "chinese")
            return chineseFood;
        else if (selection === "solar")
            return solarSystem;
        else if (selection === "dinos")
            return dinosaurs;
        else if (selection === "aussie")
            return australianAnimals;
    }

    function arrayHunt() {
        var myArray = getSelectedArray();

        /*
        Find the first and last string in the array.
        Output them to td#firstLast
         */
        var firstElement = myArray[0]
        var lastElement = myArray[myArray.length-1]
        $("td#firstLast").text(firstElement + ", " + lastElement)

        /*
        Find the first string that contains an 'n'.
        Output it to td#firstEnn
         */
        var i
        var o = 0
        var firstN
        for(i=0; i<myArray.length; i++){
            if(myArray[i].includes("n") && o===0){
                firstN = myArray[i]
                o++
            }
        }
        $("td#firstEnn").text(firstN)
        /*
        Find all of the strings with less than 6 characters.
        Output them to td#lessThanSix
         */
        var e
        var sixChars = []
        for(e=0; e<myArray.length; e++){
            if(myArray[e].length < 6){
                sixChars.push(myArray[e])
            }
        }
        $("td#lessThanSix").text(sixChars.toString())
        /*
        Find the longest string in the array.
        Output it to td#longName
         */
        var a
        var longest = ""
        for(a=0; a<myArray.length; a++){
            if(myArray[a].length > longest.length){
                longest = myArray[a]
            }
        }
        $("td#longName").text(longest)
        /*
        Find all of the strings that do not contain the letter 's'.
        Output them to td#noEss
         */
        var noSAllowed = []
        var u
        for(u=0; u<myArray.length; u++){
            if(!myArray[u].includes("s")){
                noSAllowed.push(myArray[u])
            }
        }
        $("td#noEss").text(noSAllowed.toString())

        /*
        Output all of the strings, but with all of their vowels
        in uppercase, to td#upperVowels
         */
        //So completing this objective was easy. Looking at the result was hard.
        var t
        var s
        var vowelsUpper = []
        var stringUpper = ""
        for(t=0; t<myArray.length; t++){
            for(s=0; s<myArray[t].length; s++){
                if(myArray[t].charAt(s) === "a" || myArray[t].charAt(s) === "e" || myArray[t].charAt(s) === "i" || myArray[t].charAt(s) === "o" || myArray[t].charAt(s) === "u"){
                    stringUpper = stringUpper + myArray[t].charAt(s).toUpperCase()
                }
                else{
                    stringUpper = stringUpper + myArray[t].charAt(s)
                }
            }
            vowelsUpper.push(stringUpper)
            stringUpper = ""
        }
        $("td#upperVowels").text(vowelsUpper)
        /*
        Output all of the strings in reverse order and separated by
        ' - ' to td#reverseDash
         */
        var r
        var reverseOrder = []
        reverseOrder.toString = function() {
            return this.join(' - ');
        };
        for(r=0; r<myArray.length; r++){
            reverseOrder.push(myArray[myArray.length - r-1])
        }
        $("td#reverseDash").text(reverseOrder.toString())
    }

});