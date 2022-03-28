function getBotResponse(input) {
    
    if (input == "1") {
        return "Please contact 9XX12341 ";
    } else if (input == "2") {
        
        return "Please visit - yojna page" ;
    } else if (input == "3") {
        return "Please visit - crops page";
    }

    else if(input == "4")
    {
        return "Please visit - MSP page";
    }

    // Simple responses
    if (input.toLowerCase()=="hello"||input.toLowerCase()=="hey"||input.toLowerCase()=="hi") {
        return "Hello there!";
    } else if (input.toLowerCase()=="bye"||input.toLowerCase()=="goodbye"||input.toLowerCase()=="okay"||input.toLowerCase()=="ok") {
        return "Thankyou for reaching out ,will talk to you later!";
    } else {
        return "I am not sure we get you , please contact the helpline number - 890128372";
    }
}