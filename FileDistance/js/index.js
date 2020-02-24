// index.html includes several text files. 
// those text files instantiate variables prideandprejudice, peterpan, and dracula

/*
 * This function removes punctuation, and extra spaces from the input argument,
 * then forces it into lowercase and tokenizes it into an array of words.
 */
var tokenize = (text) => {
  	text = text.replace(/[.,;@"”’“?‘\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  	text = text.replace(/\s{2,}/g," ");
  	text = text.replace(/[\n\t]/g," ");
	text = text.toLowerCase();
	text = text.split(' ');
	return text;
}

/*
 *
 * This function returns the shortest distance (in numbers of words) between
 *  two search words. This function does the computation, while the above changes the input.
 */
var minDistanceHelper = (words, searchWords) => {
    let minimumDistance = Number.MAX_SAFE_INTEGER
    let currDistance = 0
    let word1Exists = false
    let word2Exists = false
 
    for (let i = 0; i < text.length - Math.max(searchWords[0].length, searchWords[1].length); i++) {
        if(!word1Exists){
            word1Exists = doesWordExistAtIndex(text, searchWords[0], i)
            currDistance = 0;
        }
 
        if (text[i] === " ") {
            currDistance++;
        }
 
        if(!word2Exists && word1Exists){
            word2Exists = doesWordExistAtIndex(text, searchWords[1], i)
            // Gets rid of the current word because the next word is found!
            if(word2Exists) currDistance--;
        }
 
        if(word1Exists && word2Exists){
            // Check to see if it's the minimum and then reset to false
            if (minimumDistance > currDistance) {
                minimumDistance = currDistance
            }
            word1Exists = false
            word2Exists = false
        }
    }
    return minimumDistance
}


/**
 * This function checks to see if a word exists at a given index in an array.
 * @param {Array} text the text to search through
 * @param {string} searchWord  the word to find
 * @param {number} index the index in the text array
 */
var doesWordExistAtIndex = (text, searchWord, index) => {
    let wordMatches = true
    for(let i = 0; i < searchWord.length; i++){
        if(text[index + i] !== searchWord[i]){
            return false
        }
    }
    return wordMatches
}
 



/*
 * This function returns the shortest distance (in terms of number of words) between 
 * the searchWords in the text. The searchWords can be found in the text in either
 * order
 */
var minDistance = (text,searchWords) => {
	words = tokenize(text);
 
    // Get distances from both combination and return the lowest
    let firstCombinationDistance = minDistanceHelper(words, searchWords)
 
    let swappedSearchWords = Array(searchWords[1], searchWords[0])
    let secondCombinationDistance = minDistanceHelper(words, swappedSearchWords)
 
    return Math.min(firstCombinationDistance, secondCombinationDistance)
}


/*
 * This function displays the results on the html page
 */
var displayResults = (m) => {
	t = "The shortest distance between the searchWords in the text is <b>"+m+"</b> words.";
	$('#results').append(t);
}


/*
 * This function handles the control flow of the program
 */
$(document).ready(function(){
	// chose one of the text and searchWords pairs below.

	text = `The itsy bitsy spider climbed up the waterspout. 
			Down came the rain and washed the spider out. 
			Out came the sun and dried up all the rain 
			and the itsy bitsy spider climbed up the spout again.`
	searchWords = ['spider','rain']

	//text = prideandprejudice;
	//searchWords = ['visit','happiness'];

	//text = peterpan;
	//searchWords = ['fairy','hook']

	//text = dracula;
	//searchWords = ['drink','blood']

	m = minDistance(text,searchWords);
	displayResults(m);
});
