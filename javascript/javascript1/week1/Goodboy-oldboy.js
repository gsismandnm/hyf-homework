var dogYearOfBirth = 2020;
var dogYearFuture = 2045;
var shouldShowResultInDogYears = dogYearFuture - dogYearOfBirth;
var shouldShowResultInHumanYears = shouldShowResultInDogYears * 7;
if (shouldShowResultInDogYears=true) {
    console.log("Your dog will be " + shouldShowResultInDogYears + " dog years old in " + dogYearFuture + ".")
} 
else {
    console.log("Your dog will be " + shouldShowResultInHumanYears + " human years old in " + dogYearFuture + ".")
}