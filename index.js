// Q117
// this fuction evalute a grade and log the crossponding remarks
function grade(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Very Good");
            break;
        case "C":
            console.log("Good");
            break;
        case "D":
            console.log("Fair");
            break;
        case "F":
            console.log("Poor");
            break;
        default:
            console.log("Invalid Grade");
    }
}
grade("A");
