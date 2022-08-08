function introduction(name) {
    console.log(`Hi, my name is ${name}.`);
}

introduction("Aki");
introduction("Samip")

function introductionWithLanguage(name,language) {
    console.log(`Hi,my name is ${name} and I am learning to program in ${language}.`)
}
introductionWithLanguage("Aki","Ember.js")
introductionWithLanguage("Samip","React")

function introductionWithLanguageOptional(name , language="javascript"){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introductionWithLanguageOptional("Gracie");

function introductionWithLanguageOptional(name,language="python") {
    console.log(`Hi,my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguageOptional("Gracie");
