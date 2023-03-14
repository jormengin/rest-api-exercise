require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Show = require('../models/Show') ;

const shows = [
  {
    title: "The Simpsons",
    creator: "Matt Groening",
    launched: 1989,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
  },
{
title: "Family Guy",
creator: "Seth MacFarlane",
launched: 1999,
genre: "comedy",
image: "https://upload.wikimedia.org/wikipedia/en/0/00/Family_Guy_The_Quest_for_Stuff.png",
description: "The show follows the dysfunctional Griffin family, including parents Peter and Lois, their children Meg, Chris, and Stewie, and their talking dog Brian. The series is known for its cutaway gags, satirical humor, and pop culture references."
},
{
title: "South Park",
creator: "Trey Parker, Matt Stone",
launched: 1997,
genre: "comedy",
image: "https://upload.wikimedia.org/wikipedia/en/3/3b/South_Park_logo.png",
description: "The show follows the adventures of four boys – Stan, Kyle, Cartman, and Kenny – in the fictional Colorado town of South Park. The series is known for its use of crude humor, social satire, and tackling controversial topics such as politics, religion, and sexuality."
},
{
title: "Bob's Burgers",
creator: "Loren Bouchard",
launched: 2011,
genre: "comedy",
image: "https://upload.wikimedia.org/wikipedia/en/4/44/Bob%27s_Burgers.png",
description: "The show follows the Belcher family – Bob, Linda, and their three children Tina, Gene, and Louise – who run a struggling burger restaurant. The series is known for its quirky humor, musical numbers, and the eccentric characters that populate the world of the show."
}
]

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    return Show.create(shows)
  })
  .then((created) => {
   console.log(`Created ${created.length} shows`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close()
  })