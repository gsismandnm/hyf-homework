//Gender is male or female and fullName can be true or false.
      
function getFullname(firstName, surName, gender, formalName){
    if (gender==="male" && formalName==="true"){
        return("Lord " + firstName + " " + surName);
    }

    else if (gender==="male" && formalName==="false"){
        return(firstName+ " "+ surName);
    }

    if (gender==="female" && formalName==="true"){
        return("Madam " + firstName+ " " + surName);
    }

    else if (gender==="female" && formalName==="false")
    {
        return(firstName+ " " +surName);
    }
  }


console.log(getFullname("Benjamin", "Hughes-1", "male", "true"));
console.log(getFullname("Benjamin", "Hughes-2", "male",  "false"));
console.log(getFullname("Jennifer", "Lopez-1", "female", "true"));
console.log(getFullname("Jennifer", "Lopez-2", "female", "false")); 