let men = {
	'ryan': 	['lizzy', 'sarah', 'zoey', 'daniella'],
	'josh': 	['sarah', 'lizzy', 'daniella', 'zoey'],
	'blake': 	['sarah', 'daniella', 'zoey', 'lizzy'],
	'connor': 	['lizzy', 'sarah', 'zoey', 'daniella']
};

let women = {
	'lizzy': 	['ryan', 'blake', 'josh', 'connor'],
	'sarah': 	['ryan', 'blake', 'connor', 'josh'],
	'zoey':  	['connor', 'josh', 'ryan', 'blake'],
	'daniella':	['ryan', 'josh', 'connor', 'blake']
}

function stableMarriage(men, women) {
  let matches = {};
  let freeMen = {};
  // define all the men as free men
  for (let man in men) {
    freeMen[man] = true;
  }
  // while there are still free men
  while (Object.keys(freeMen).length > 0) {
    // loop through each man
    for (let currentMan in freeMen) {
      // look through the preferences array for the man
      for (let i = 0; i < men[currentMan].length; i++) {
        let woman = men[currentMan][i];
        // if she isn't matched, match the man and the woman
        // remove the man from the free men list
        if (!Object.values(matches).includes(woman)) {
          matches[currentMan] = woman;
          delete freeMen[currentMan];
          break;
        // else if the woman is already matched
        } else {
          // find the other man the woman is matches to
          let otherMan = null;
          for (let husband in matches) {
            if (matches[husband] === woman) {
              otherMan = husband;
              break;
            }
          }
          // get the preference orders for the two men
          let pref1 = women[woman].indexOf(otherMan);
          let pref2 = women[woman].indexOf(currentMan);
          // if she prefers the man to her current match
          if (pref2 < pref1) {
            // remove the current match, add the other man to the free men
            // match the current man to the woman, remove him from the free men
            delete matches[otherMan];
            freeMen[otherMan] = true;
            matches[currentMan] = woman;
            delete freeMen[currentMan];
            break;
          }
        }
      }
    }
  }

  return matches;
}

stableMarriage(men, women);
