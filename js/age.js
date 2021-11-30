 // initialize my Original Year of Birth
 let myDOB = 2001;

 // Fetch the Current Date, using Date() class and getFullYear method.
 let currentYear = new Date().getFullYear();

 // calculate my current age
 let myCurrentAge = currentYear - myDOB;

 // It will dynamically changes the date
 document.getElementById("age").innerHTML = `Hello! I’m Chandra, my age is ${myCurrentAge} year old. Doing random stuffs, want to explore the Programming world. More passionate about Frontend.`;


 document.getElementById("year").innerHTML = `© ${currentYear} Chandra's Resume. <br>All rights reserved. `;
