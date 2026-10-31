/*******************************************
 * A0: Assignment
 * Mark Sherman <shermanm@emmanuel.edu>
 * 26 January 2024
 ******************************************/

let backgroundImage; 
let southBostonButton;
let backBayButton;
let fenwayButton;
let downtownButton;
let categoryButtons = [];
let secondscreenImage;
let southBostonImage; 
let backBayImage;
let fenwayImage;
let downtownImage;

let foodImage;
let museumsImage;
let sightseeingImage; 
let shoppingImage;


let selectedArea = '';
let selectedCategory = '';

function preload() {
  // Load the background image
  backgroundImage = loadImage('Background.png');
  secondscreenImage = loadImage('screen 2.png');
  
  southBostonImage = loadImage('SouthBoston.png'); 
  backBayImage = loadImage('BackBay.png');
  fenwayImage = loadImage('Fenway.png');
  downtownImage = loadImage('Downtown.png');

  foodImage = loadImage('Food.png'); 
  museumsImage = loadImage('Museums.png'); 
  sightseeingImage = loadImage('Sightseeings.png'); 
  shoppingImage = loadImage('Shopping.png'); 



}

const places = {
  "South Boston": {
    "Food": [
      { 
        name: "Fox & the Knife", 
        description: "Italian eatery with a cozy vibe, offering wood-fired dishes and handmade pastas.",
        link: "https://foxandtheknife.com/"
      },
      { 
        name: "Hunter’s Kitchen & Bar", 
        description: "Upscale American fare with a wide selection of craft beers and cocktails.",
        link: "https://hunterskitchenandbar.com/"
      },
      { 
        name: "Bar Volpe", 
        description: "Modern Italian dishes served in a stylish, contemporary setting.",
        link: "https://www.barvolpe.com/"
      },
      { 
        name: "Coquette", 
        description: "French-inspired cuisine and cocktails in a charming setting.",
        link: "https://www.coquetterestaurant.com/"
      }
    ],
    "Museums": [
      { 
        name: "ICA (Institute of Contemporary Art)", 
        description: "Known for its cutting-edge modern art exhibits.",
        link: "https://www.icaboston.org/"
      },
      { 
        name: "Boston Tea Party Ships and Museum", 
        description: "Interactive museum telling the story of the Boston Tea Party with live reenactments.",
        link: "https://www.bostonteapartyship.com/"
      },
      { 
        name: "Boston Fire Museum", 
        description: "Museum showcasing the history of firefighting in Boston.",
        link: "https://www.bostonfiremuseum.com/"
      },
      { 
        name: "Boston’s Children’s Museum", 
        description: "Interactive exhibits designed for children to explore science and art.",
        link: "https://www.bostonchildrensmuseum.org/"
      }
    ],
    "Sightseeing": [
      { 
        name: "Fort Point Channel Historic District", 
        description: "A historic area with cobblestone streets, beautiful views, and old warehouses.",
        link: "https://www.boston.gov/neighborhoods/fort-point"
      },
      { 
        name: "Castle Island & Fort Independence", 
        description: "Historic fort with scenic walking paths and beautiful views of the harbor.",
        link: "https://www.mass.gov/locations/castle-island"
      },
      { 
        name: "Dorchester Heights National Historic Site", 
        description: "The site of an important American Revolutionary battle, with views of the city.",
        link: "https://www.nps.gov/bost/learn/historyculture/dorchester-heights.htm"
      },
      { 
        name: "Boston Harborwalk", 
        description: "A scenic walking trail along the waterfront, offering beautiful views and historical landmarks.",
        link: "https://www.boston.gov/departments/environment/boston-harborwalk"
      }
    ],
    "Shopping": [
      { 
        name: "Faneuil Hall Marketplace & Quincy Market", 
        description: "Historic market with numerous shops, restaurants, and street performances.",
        link: "https://www.faneuilhallmarketplace.com/"
      },
      { 
        name: "South Bay Center", 
        description: "Large retail mall offering a variety of stores, restaurants, and entertainment.",
        link: "https://southbaycenter.com/"
      }
    ]
  },

  "Back Bay": {
    "Food": [
      { 
        name: "Grill 23 & Bar", 
        description: "Steakhouse serving prime cuts of meat and fresh seafood in an upscale setting.",
        link: "https://www.grill23.com/"
      },
      { 
        name: "Saltie Girl", 
        description: "Charming seafood eatery with a variety of fresh oysters and seafood dishes.",
        link: "https://www.saltiegirl.com/"
      },
      { 
        name: "Contessa", 
        description: "Modern Italian cuisine with a stylish, contemporary atmosphere.",
        link: "https://www.contessaboston.com/"
      },
      { 
        name: "Sweeney's on Boylston", 
        description: "Casual spot offering classic Irish dishes and a great selection of drinks.",
        link: "https://www.sweeneysonboylston.com/"
      }
    ],
    "Museums": [
      { 
        name: "Museum of Fine Arts (MFA)", 
        description: "One of the most comprehensive art museums in the world, housing over 450,000 works.",
        link: "https://www.mfa.org/"
      },
      { 
        name: "Isabella Stewart Gardner Museum", 
        description: "A stunning museum with art collections and a beautiful courtyard.",
        link: "https://www.gardnermuseum.org/"
      },
      { 
        name: "Gibson House Museum", 
        description: "A preserved Victorian house offering a glimpse into 19th-century Boston life.",
        link: "https://www.thegibsonhouse.org/"
      }
    ],
    "Sightseeing": [
      { 
        name: "Copley Square", 
        description: "Historic square featuring iconic Boston landmarks such as the Boston Public Library.",
        link: "https://www.copleysquare.org/"
      },
      { 
        name: "Trinity Church", 
        description: "Architecturally significant church with stunning stained glass and a rich history.",
        link: "https://www.trinitychurchboston.org/"
      },
      { 
        name: "Boston Public Library", 
        description: "The first large free municipal library in the United States, offering beautiful architecture and exhibitions.",
        link: "https://www.bpl.org/"
      }
    ],
    "Shopping": [
      { 
        name: "Newbury Street", 
        description: "Famous street with a variety of boutiques, art galleries, and cafes.",
        link: "https://www.newburystreet.org/"
      },
      { 
        name: "Prudential Center", 
        description: "Large shopping mall with an extensive selection of retail stores and restaurants.",
        link: "https://www.prudentialcenter.com/"
      },
      { 
        name: "Copley Place", 
        description: "A mixed-use complex of four office buildings, two hotels, and a shopping mall in the Back Bay neighborhood of Boston, Massachusetts, United States.",
        link: "https://www.simon.com/mall/copley-place"
      }
    ]
  },

  "Fenway": {
    "Food": [
      { 
        name: "Tasty Burger", 
        description: "Classic American burgers and shakes in a casual, laid-back atmosphere.",
        link: "https://www.tastyburger.com/"
      },
      { 
        name: "Kenzoku", 
        description: "Modern Asian restaurant offering a mix of Japanese and Korean dishes.",
        link: "https://www.kenzokuboston.com/"
      },
      { 
        name: "El Jefe’s", 
        description: "Mexican street food with tacos, burritos, and margaritas.",
        link: "https://www.eljefeboston.com/"
      },
      { 
        name: "TimeOut Market", 
        description: "A bustling food hall with a variety of cuisines and artisanal food vendors.",
        link: "https://www.timeoutmarket.com/boston/"
      },
      { 
        name: "Blaze Pizza", 
        description: "Fast-casual pizza with a build-your-own approach and high-quality ingredients.",
        link: "https://www.blazepizza.com/"
      },
      { 
        name: "Kyuramen", 
        description: "Serving traditional Japanese ramen and a variety of side dishes.",
        link: "https://kyuramen.com/"
      },
      { 
        name: "College Pizza", 
        description: "College-style pizza with a great variety of toppings and casual atmosphere.",
        link: "https://www.collegepizzaboston.com/"
      }
    ],
    "Museums": [
      { 
        name: "Isabella Stewart Gardner", 
        description: "Art museum housed in a Venetian-style palace with amazing art collections.",
        link: "https://www.gardnermuseum.org/"
      },
      { 
        name: "Museum of Fine Arts", 
        description: "The museum has over 450,000 works of art from ancient to contemporary.",
        link: "https://www.mfa.org/"
      },
      { 
        name: "MassArt Art Museum", 
        description: "Museum showcasing contemporary art with a focus on emerging artists.",
        link: "https://massart.edu/massart-art-museum"
      }
    ],
    "Sightseeing": [
      { 
        name: "Back Bay Fens", 
        description: "A beautiful park offering walking paths, ponds, and green spaces.",
        link: "https://www.boston.gov/parks/back-bay-fens"
      }
    ],
    "Shopping": [
      { 
        name: "The Station", 
        description: "A trendy shopping complex with local boutiques and cafes.",
        link: "https://www.thestationfenway.com/"
      }
    ]
  },

  "Downtown": {
    "Food": [
      { 
        name: "Hei La Moon", 
        description: "Serving traditional Cantonese dim sum and other Chinese dishes.",
        link: "http://www.heilamoonrestaurant.com/"
      },
      { 
        name: "Pho Pasteur", 
        description: "Famous for its delicious Vietnamese pho and other traditional dishes.",
        link: "https://www.phopasteurboston.com/"
      },
      { 
        name: "Mike & Patty’s", 
        description: "A popular breakfast spot known for sandwiches and fresh, local ingredients.",
        link: "https://www.mikeandpattys.com/"
      },
      { 
        name: "The Red Fox", 
        description: "Classic American pub with burgers, sandwiches, and great drinks.",
        link: "http://www.redfoxboston.com/"
      },
      { 
        name: "Monica’s Mercato", 
        description: "Authentic Italian market and deli offering high-quality meats, cheeses, and sandwiches.",
        link: "https://monicasmercato.com/"
      }
    ],
    "Museums": [
      { 
        name: "Museum of Illusions", 
        description: "Interactive museum full of optical illusions and mind-bending exhibits.",
        link: "https://www.museumofillusions.us/boston/"
      },
      { 
        name: "Museum of Science", 
        description: "Science and technology museum with interactive exhibits and an IMAX theater.",
        link: "https://www.mos.org/"
      }
    ],
    "Sightseeing": [
      { 
        name: "Boston Common", 
        description: "The oldest public park in the United States, offering trails, ponds, and plenty of green space.",
        link: "https://www.boston.gov/departments/parks-and-recreation/boston-common"
      }
    ],
    "Shopping": [
      { 
        name: "Downtown Crossing", 
        description: "Popular shopping area with a mix of department stores, boutiques, and street vendors.",
        link: "https://www.downtowncrossing.org/"
      },
      { 
        name: "The Corner Mall", 
        description: "Utilitarian downtown mall featuring various fast-food outlets, specialty shops & banks.",
        link: "https://thecornermall.com/"
      },
      { 
        name: "Primark", 
        description: "Discount fashion chain offering clothes and accessories for all ages, plus homewares.",
        link: "https://www.primark.com/en-us/stores/boston-ma/10-summer-street?y_source=1_ODU3OTM0MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ=="
      },
      { 
        name: "North Market Building", 
        description: "Eccentric vendors located within Faneuil Hall.",
        link: "https://faneuilhallmarketplace.com/shopping/pushcarts-and-kiosks"
      }
    ]
  }
};





function setup() {
  createCanvas(800, 600);
  
  background(backgroundImage);
  
  textSize(20);
  textAlign(CENTER, CENTER);
  
  
  // Create buttons for areas
  
 southBostonButton = createImg('SouthBoston.png');
  southBostonButton.position(70, 250);
  southBostonButton.size(140, 80); // Adjust size if necessary
  southBostonButton.mousePressed(() => chooseArea("South Boston"));

  backBayButton = createImg('BackBay.png');
  backBayButton.position(245, 250);
  backBayButton.size(140, 80); // Adjust size if necessary
  backBayButton.mousePressed(() => chooseArea("Back Bay"));

  fenwayButton = createImg('Fenway.png');
  fenwayButton.position(425, 250);
  fenwayButton.size(140, 80); // Adjust size if necessary
  fenwayButton.mousePressed(() => chooseArea("Fenway"));

  downtownButton = createImg('Downtown.png');
  downtownButton.position(600, 250);
  downtownButton.size(140, 80); // Adjust size if necessary
  downtownButton.mousePressed(() => chooseArea("Downtown"));

}

function chooseArea(area) {
  selectedArea = area;

  // Hide area buttons
  southBostonButton.hide();
  backBayButton.hide();
  fenwayButton.hide();
  downtownButton.hide();

  // Show category buttons
  showCategoryButtons();
}

//const categories = ["Food", "Museums", "Sightseeing", "Shopping"];

function showCategoryButtons() {
  
 let categories = ["Food", "Museums", "Sightseeing", "Shopping"];
 let categoryImages = [foodImage, museumsImage, sightseeingImage, shoppingImage];

  categoryButtons = categories.map((category, index) => {
    let button = createImg(categoryImages[index]);
    button.position(150 + (index * 150), height / 2);
    button.size(100, 100);
    button.mousePressed(() => chooseCategory(category));
    return button;
  });
}

function chooseCategory(category) {
  selectedCategory = category;
  console.log(`You chose the ${category} category in ${selectedArea}`);

  

  // Clear the canvas before showing new content
  background(secondscreenImage);
  categoryButtons.forEach(button => button.hide());

  // Filter places based on selected area and category
  const filteredPlaces = places[selectedArea][category].filter(place => place);

  // Pick a random place from the filtered list
  const randomPlace = filteredPlaces[Math.floor(Math.random() * filteredPlaces.length)];

  // Display the selected place
  displayPlace(randomPlace);
}

function displayPlace(place) {
  // Display the place details as a link
  textSize(24);
  text("Suggested place in " + selectedArea + " for " + selectedCategory + ":", width / 2, 100);
  
  // Create a clickable link for the place name
  const placeLink = createA(place.link, place.name);
  placeLink.position(width/2 - 165, 150); // Position the link on the canvas
  placeLink.style('font-size', '24px');
  placeLink.style('color', '#a20101');
  placeLink.style('text-decoration', 'none');
  placeLink.attribute('target', '_blank'); // Ensures the link opens in a new tab
  
  // Display description under the link
  textSize(16);
  text(place.description, width / 2, 200);

// Restart button
  const restartButton = createButton('Restart');
  restartButton.position(20, 20);
  restartButton.mousePressed(() => {location.reload();});
}