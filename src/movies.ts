export type Movie = {
  readonly id: string;
  title: string;
  poster: string;
  overview: string;
  release_date: number;
  genres: string[];
};

export const movies: Movie[] = [
  {
    id: "287947",
    title: "Shazam!",
    poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    overview:
      "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
    release_date: 1553299200,
    genres: ["Action", "Comedy", "Fantasy"],
  },
  {
    id: "299537",
    title: "Captain Marvel",
    poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    overview:
      "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    release_date: 1551830400,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "522681",
    title: "Escape Room",
    poster: "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
    overview:
      "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
    release_date: 1546473600,
    genres: ["Thriller", "Action", "Horror", "Science Fiction"],
  },
  {
    id: "166428",
    title: "How to Train Your Dragon: The Hidden World",
    poster: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    overview:
      "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
    release_date: 1546473600,
    genres: ["Animation", "Family", "Adventure"],
  },
  {
    id: "450465",
    title: "Glass",
    poster: "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
    overview:
      "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
    release_date: 1547596800,
    genres: ["Documentary"],
  },
  {
    id: "495925",
    title: "Doraemon the Movie: Nobita's Treasure Island",
    poster: "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
    overview:
      "The story is based on Robert Louis Stevenson's Treasure Island novel.",
    release_date: 1520035200,
    genres: ["Animation"],
  },
  {
    id: "329996",
    title: "Dumbo",
    poster: "https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg",
    overview:
      "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
    release_date: 1553644800,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "299536",
    title: "Avengers: Infinity War",
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    release_date: 1524618000,
    genres: ["Adventure", "Action", "Science Fiction"],
  },
  {
    id: "458723",
    title: "Us",
    poster: "https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
    overview:
      "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
    release_date: 1552521600,
    genres: ["Documentary", "Family"],
  },
  {
    id: "424783",
    title: "Bumblebee",
    poster: "https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
    overview:
      "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
    release_date: 1544832000,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "920",
    title: "Cars",
    poster: "https://image.tmdb.org/t/p/w500/qa6HCwP4Z15l3hpsASz3auugEW6.jpg",
    overview:
      "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
    release_date: 1149728400,
    genres: ["Animation", "Adventure", "Comedy", "Family"],
  },
  {
    id: "299534",
    title: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    release_date: 1556067600,
    genres: ["Adventure", "Science Fiction", "Action"],
  },
  {
    id: "324857",
    title: "Spider-Man: Into the Spider-Verse",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    overview:
      "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson 'Kingpin' Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
    release_date: 1544140800,
    genres: ["Action", "Adventure", "Animation", "Science Fiction", "Comedy"],
  },
  {
    id: "157433",
    title: "Pet Sematary",
    poster: "https://image.tmdb.org/t/p/w500/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg",
    overview:
      "Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby. After the tragedy of their cat being killed by a truck, Louis resorts to burying it in the mysterious pet cemetery, which is definitely not as it seems, as it proves to the Creeds that sometimes dead is better.",
    release_date: 1554339600,
    genres: ["Thriller", "Horror"],
  },
  {
    id: "456740",
    title: "Hellboy",
    poster: "https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
    overview:
      "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
    release_date: 1554944400,
    genres: ["Fantasy", "Action"],
  },
  {
    id: "537915",
    title: "After",
    poster: "https://image.tmdb.org/t/p/w500/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
    overview:
      "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
    release_date: 1554944400,
    genres: ["Mystery", "Drama"],
  },
  {
    id: "485811",
    title: "Redcon-1",
    poster: "https://image.tmdb.org/t/p/w500/vVPrWngVJ2cfYAncBedQty69Dlf.jpg",
    overview:
      "After a zombie apocalypse spreads from a London prison, the UK is brought to its knees. The spread of the virus is temporarily contained but, without a cure, it’s only a matter of time before it breaks its boundaries and the biggest problem of all… any zombies with combat skills are now enhanced. With the South East of England quarantined from the rest of the world using fortified borders, intelligence finds that the scientist responsible for the outbreak is alive and well in London. With his recovery being the only hope of a cure, a squad of eight Special Forces soldiers is sent on a suicide mission to the city, now ruled by the undead, with a single task: get him out alive within 72 hours by any means necessary. What emerges is an unlikely pairing on a course to save humanity against ever-rising odds.",
    release_date: 1538096400,
    genres: ["Action", "Horror"],
  },
  {
    id: "471507",
    title: "Destroyer",
    poster: "https://image.tmdb.org/t/p/w500/sHw9gTdo43nJL82py0oaROkXXNr.jpg",
    overview:
      "Erin Bell is an LAPD detective who, as a young cop, was placed undercover with a gang in the California desert with tragic results. When the leader of that gang re-emerges many years later, she must work her way back through the remaining members and into her own history with them to finally reckon with the demons that destroyed her past.",
    release_date: 1545696000,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "400650",
    title: "Mary Poppins Returns",
    poster: "https://image.tmdb.org/t/p/w500/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
    overview:
      "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
    release_date: 1544659200,
    genres: ["Documentary"],
  },
  {
    id: "297802",
    title: "Aquaman",
    poster: "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    overview:
      "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
    release_date: 1544140800,
    genres: ["Action", "Adventure", "TV Movie"],
  },
  {
    id: "512196",
    title: "Happy Death Day 2U",
    poster: "https://image.tmdb.org/t/p/w500/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg",
    overview:
      "Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves. When Tree discovers that Carter's roommate has been altering time, she finds herself once again the target of a masked killer. When the psychopath starts to go after her inner circle, Tree soon realizes that she must die over and over again to save everyone.",
    release_date: 1550016000,
    genres: ["Comedy", "Horror", "Science Fiction"],
  },
  {
    id: "390634",
    title: "Fate/stay night: Heaven’s Feel II. lost butterfly",
    poster: "https://image.tmdb.org/t/p/w500/nInpnGCjhzVhsASIUAmgM1QIhYM.jpg",
    overview:
      "Theatrical-release adaptation of the visual novel 'Fate/stay night', following the third and final route. (Part 2 of a trilogy.)",
    release_date: 1547251200,
    genres: ["Animation", "Action", "Fantasy", "Drama"],
  },
  {
    id: "500682",
    title: "The Highwaymen",
    poster: "https://image.tmdb.org/t/p/w500/4bRYg4l12yDuJvAfqvUOPnBrxno.jpg",
    overview:
      "In 1934, Frank Hamer and Manny Gault, two former Texas Rangers, are commissioned to put an end to the wave of vicious crimes perpetrated by Bonnie Parker and Clyde Barrow, a notorious duo of infamous robbers and cold-blooded killers who nevertheless are worshiped by the public.",
    release_date: 1552608000,
    genres: ["Music"],
  },
  {
    id: "454294",
    title: "The Kid Who Would Be King",
    poster: "https://image.tmdb.org/t/p/w500/kBuvLX6zynQP0sjyqbXV4jNaZ4E.jpg",
    overview:
      "Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He soon unites his friends and enemies, and they become knights who join forces with the legendary wizard Merlin. Together, they must save mankind from the wicked enchantress Morgana and her army of supernatural warriors.",
    release_date: 1547596800,
    genres: ["Action", "Adventure", "Fantasy", "Family"],
  },
  {
    id: "543103",
    title: "Kamen Rider Heisei Generations FOREVER",
    poster: "https://image.tmdb.org/t/p/w500/kHMuyjlvNIwhCaDFiRwnl45wF7z.jpg",
    overview:
      "In the world of Sougo Tokiwa and Sento Kiryu, their 'companions' are losing their memories one after the other as they're replaced by other people. The Super Time Jacker, Tid , appears before them. He orders his powerful underlings, Another Double and Another Den-O, to pursue a young boy called Shingo. While fighting to protect Shingo, Sougo meets Ataru, a young man who loves Riders, but Ataru says that Kamen Riders aren't real. What is the meaning of those words? While the mystery deepens, the true enemy that Sougo and Sento must defeat appears in the Kuriogatake mountain...",
    release_date: 1545436800,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "404368",
    title: "Ralph Breaks the Internet",
    poster: "https://image.tmdb.org/t/p/w500/qEnH5meR381iMpmCumAIMswcQw2.jpg",
    overview:
      "Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope's video game, 'Sugar Rush.' In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.",
    release_date: 1542672000,
    genres: ["Family", "Animation", "Comedy", "Adventure"],
  },
  {
    id: "338952",
    title: "Fantastic Beasts: The Crimes of Grindelwald",
    poster: "https://image.tmdb.org/t/p/w500/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg",
    overview:
      "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
    release_date: 1542153600,
    genres: ["Adventure", "Fantasy", "Family"],
  },
  {
    id: "399579",
    title: "Alita: Battle Angel",
    poster: "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg",
    overview:
      "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
    release_date: 1548892800,
    genres: ["Action", "Science Fiction"],
  },
  {
    id: "450001",
    title: "Master Z: Ip Man Legacy",
    poster: "https://image.tmdb.org/t/p/w500/6VxEvOF7QDovsG6ro9OVyjH07LF.jpg",
    overview:
      "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect.",
    release_date: 1545264000,
    genres: ["Action"],
  },
  {
    id: "504172",
    title: "The Mule",
    poster: "https://image.tmdb.org/t/p/w500/klazQbxk3yfuZ8JcfO9jdKOZQJ7.jpg",
    overview:
      "Earl Stone, a man in his 80s who is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he’s just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.",
    release_date: 1544745600,
    genres: ["Crime", "Comedy"],
  },
  {
    id: "527729",
    title: "Asterix: The Secret of the Magic Potion",
    poster: "https://image.tmdb.org/t/p/w500/wmMq5ypRNJbWpdhC9aPjpdx1MMp.jpg",
    overview:
      "Following a fall during mistletoe picking, Druid Getafix decides that it is time to secure the future of the village. Accompanied by Asterix and Obelix, he undertakes to travel the Gallic world in search of a talented young druid to transmit the Secret of the Magic Potion.",
    release_date: 1543968000,
    genres: ["Animation", "Family", "Comedy", "Adventure"],
  },
  {
    id: "118340",
    title: "Guardians of the Galaxy",
    poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    overview:
      "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
    release_date: 1406682000,
    genres: [],
  },
  {
    id: "411728",
    title: "The Professor and the Madman",
    poster: "https://image.tmdb.org/t/p/w500/gtGCDLhfjW96qVarwctnuTpGOtD.jpg",
    overview:
      "Professor James Murray begins work compiling words for the first edition of the Oxford English Dictionary in the mid 19th century and receives over 10,000 entries from a patient at Broadmoor Criminal Lunatic Asylum , Dr William Minor.",
    release_date: 1551916800,
    genres: ["Drama", "History", "Mystery", "Thriller"],
  },
  {
    id: "527641",
    title: "Five Feet Apart",
    poster: "https://image.tmdb.org/t/p/w500/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
    overview:
      "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness.",
    release_date: 1552608000,
    genres: ["Romance", "Drama"],
  },
  {
    id: "576071",
    title: "Unplanned",
    poster: "https://image.tmdb.org/t/p/w500/tvCtAz8z5tF49a7q9RRHvxiTjzv.jpg",
    overview:
      "As one of the youngest Planned Parenthood clinic directors in the nation, Abby Johnson was involved in upwards of 22,000 abortions and counseled countless women on their reproductive choices. Her passion surrounding a woman's right to choose led her to become a spokesperson for Planned Parenthood, fighting to enact legislation for the cause she so deeply believed in. Until the day she saw something that changed everything.",
    release_date: 1553126400,
    genres: ["Drama"],
  },
  {
    id: "283995",
    title: "Guardians of the Galaxy Vol. 2",
    poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    overview:
      "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
    release_date: 1492563600,
    genres: ["Action", "Adventure", "Comedy", "Science Fiction"],
  },
  {
    id: "464504",
    title: "A Madea Family Funeral",
    poster: "https://image.tmdb.org/t/p/w500/sFvOTUlZrIxCLdmz1fC16wK0lme.jpg",
    overview:
      "A joyous family reunion becomes a hilarious nightmare as Madea and the crew travel to backwoods Georgia, where they find themselves unexpectedly planning a funeral that might unveil unpleasant family secrets.",
    release_date: 1551398400,
    genres: ["Comedy"],
  },
  {
    id: "428078",
    title: "Mortal Engines",
    poster: "https://image.tmdb.org/t/p/w500/gLhYg9NIvIPKVRTtvzCWnp1qJWG.jpg",
    overview:
      "Many thousands of years in the future, Earth’s cities roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources. On one of these massive traction cities, the old London, Tom Natsworthy has an unexpected encounter with a mysterious young woman from the wastelands who will change the course of his life forever.",
    release_date: 1543276800,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "460539",
    title: "Kuppathu Raja",
    poster: "https://image.tmdb.org/t/p/w500/wzLde7keWQqWA0CJYVz0X5RVKjd.jpg",
    overview:
      "Kuppathu Raja is an upcoming Tamil comedy drama film directed by Baba Bhaskar. The film features G. V. Prakash Kumar and Parthiban in the lead roles.",
    release_date: 1554426000,
    genres: ["Drama"],
  },
  {
    id: "24428",
    title: "The Avengers",
    poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    overview:
      "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    release_date: 1335315600,
    genres: ["Documentary"],
  },
  {
    id: "120",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    overview:
      "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    release_date: 1008633600,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "671",
    title: "Harry Potter and the Philosopher's Stone",
    poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    overview:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
    release_date: 1005868800,
    genres: ["Adventure", "Fantasy", "Family"],
  },
  {
    id: "500904",
    title: "A Vigilante",
    poster: "https://image.tmdb.org/t/p/w500/x5MSMGVagNINIWyZaxdjLarTDM3.jpg",
    overview: "A vigilante helps victims escape their domestic abusers.",
    release_date: 1553817600,
    genres: ["Thriller", "Drama"],
  },
  {
    id: "284053",
    title: "Thor: Ragnarok",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    overview:
      "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
    release_date: 1508893200,
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
  },
  {
    id: "424694",
    title: "Bohemian Rhapsody",
    poster: "https://image.tmdb.org/t/p/w500/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
    overview:
      "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
    release_date: 1540342800,
    genres: ["Music", "Documentary"],
  },
  {
    id: "508763",
    title: "A Dog's Way Home",
    poster: "https://image.tmdb.org/t/p/w500/pZn87R7gtmMCGGO8KeaAfZDhXLg.jpg",
    overview:
      "A Dog’s Way Home chronicles the heartwarming adventure of Bella, a dog who embarks on an epic 400-mile journey home after she is separated from her beloved human.",
    release_date: 1547078400,
    genres: ["Drama", "Family", "Adventure"],
  },
  {
    id: "284054",
    title: "Black Panther",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    overview:
      "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    release_date: 1518480000,
    genres: ["Family", "Drama"],
  },
  {
    id: "335983",
    title: "Venom",
    poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    overview:
      "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
    release_date: 1538096400,
    genres: ["Thriller"],
  },
  {
    id: "440472",
    title: "The Upside",
    poster: "https://image.tmdb.org/t/p/w500/hPZ2caow1PCND6qnerfgn6RTXdm.jpg",
    overview:
      "Phillip is a wealthy quadriplegic who needs a caretaker to help him with his day-to-day routine in his New York penthouse. He decides to hire Dell, a struggling parolee who's trying to reconnect with his ex and his young son. Despite coming from two different worlds, an unlikely friendship starts to blossom.",
    release_date: 1547078400,
    genres: ["Drama"],
  },
  {
    id: "363088",
    title: "Ant-Man and the Wasp",
    poster: "https://image.tmdb.org/t/p/w500/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg",
    overview:
      "Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.",
    release_date: 1530666000,
    genres: ["Action", "Adventure", "Science Fiction", "Comedy"],
  },
  {
    id: "351286",
    title: "Jurassic World: Fallen Kingdom",
    poster: "https://image.tmdb.org/t/p/w500/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
    overview:
      "Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
    release_date: 1528246800,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "441384",
    title: "The Beach Bum",
    poster: "https://image.tmdb.org/t/p/w500/iXMxdC7T0t3dxislnUNybcvJmAH.jpg",
    overview:
      "An irreverent comedy about the misadventures of Moondog, a rebellious stoner and lovable rogue who lives large.",
    release_date: 1553126400,
    genres: ["Comedy"],
  },
  {
    id: "480530",
    title: "Creed II",
    poster: "https://image.tmdb.org/t/p/w500/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
    overview:
      "Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",
    release_date: 1542758400,
    genres: ["Drama"],
  },
  {
    id: "399361",
    title: "Triple Frontier",
    poster: "https://image.tmdb.org/t/p/w500/aBw8zYuAljVM1FeK5bZKITPH8ZD.jpg",
    overview:
      "Struggling to make ends meet, former special ops soldiers reunite for a high-stakes heist: stealing $75 million from a South American drug lord.",
    release_date: 1551830400,
    genres: ["Action", "Thriller", "Crime", "Adventure"],
  },
  {
    id: "122917",
    title: "The Hobbit: The Battle of the Five Armies",
    poster: "https://image.tmdb.org/t/p/w500/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    overview:
      "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    release_date: 1418169600,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "400157",
    title: "Wonder Park",
    poster: "https://image.tmdb.org/t/p/w500/8KomINZhIuJeB4oB7k7tkq8tmE.jpg",
    overview:
      "The story of a magnificent amusement park where the imagination of a wildly creative girl named June comes alive.",
    release_date: 1552521600,
    genres: ["Comedy", "Animation", "Adventure", "Family", "Fantasy"],
  },
  {
    id: "566555",
    title: "Detective Conan: The Fist of Blue Sapphire",
    poster: "https://image.tmdb.org/t/p/w500/jUfCBwhSTE02jTN9REJbHm2lRL8.jpg",
    overview: "23rd Detective Conan Movie.",
    release_date: 1555030800,
    genres: ["Animation", "Action", "Drama", "Mystery", "Comedy"],
  },
  {
    id: "438650",
    title: "Cold Pursuit",
    poster: "https://image.tmdb.org/t/p/w500/hXgmWPd1SuujRZ4QnKLzrj79PAw.jpg",
    overview:
      "Nels Coxman's quiet life comes crashing down when his beloved son dies under mysterious circumstances. His search for the truth soon becomes a quest for revenge as he seeks coldblooded justice against a drug lord and his inner circle.",
    release_date: 1549497600,
    genres: ["Action"],
  },
  {
    id: "181808",
    title: "Star Wars: The Last Jedi",
    poster: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    release_date: 1513123200,
    genres: ["Documentary"],
  },
  {
    id: "383498",
    title: "Deadpool 2",
    poster: "https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
    overview:
      "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
    release_date: 1526346000,
    genres: ["Action", "Comedy", "Adventure"],
  },
  {
    id: "157336",
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    overview:
      "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    release_date: 1415145600,
    genres: ["Adventure", "Drama", "Science Fiction"],
  },
  {
    id: "449985",
    title: "Triple Threat",
    poster: "https://image.tmdb.org/t/p/w500/cSpM3QxmoSLp4O1WAMQpUDcaB7R.jpg",
    overview:
      "A crime syndicate places a hit on a billionaire's daughter, making her the target of an elite assassin squad. A small band of down-and-out mercenaries protects her, fighting tooth and nail to stop the assassins from reaching their target.",
    release_date: 1552953600,
    genres: ["Action", "Thriller"],
  },
  {
    id: "99861",
    title: "Avengers: Age of Ultron",
    poster: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    overview:
      "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    release_date: 1429664400,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "271110",
    title: "Captain America: Civil War",
    poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    overview:
      "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
    release_date: 1461718800,
    genres: ["Comedy", "Documentary"],
  },
  {
    id: "529216",
    title: "Mirage",
    poster: "https://image.tmdb.org/t/p/w500/oLO9y7GoyAVUVoAWD6jCgY7GQfs.jpg",
    overview:
      "Two storms separated by 25 years. A woman murdered. A daughter missed. Only 72 hours to discover the truth.",
    release_date: 1543536000,
    genres: ["Horror"],
  },
  {
    id: "22",
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    poster: "https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
    overview:
      "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
    release_date: 1057712400,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "490132",
    title: "Green Book",
    poster: "https://image.tmdb.org/t/p/w500/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
    overview:
      "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
    release_date: 1542326400,
    genres: ["Drama", "Comedy"],
  },
  {
    id: "351044",
    title: "Welcome to Marwen",
    poster: "https://image.tmdb.org/t/p/w500/dOULsxYQFsOR0cEBBB20xnjJkPD.jpg",
    overview:
      "When a devastating attack shatters Mark Hogancamp and wipes away all memories, no one expected recovery. Putting together pieces from his old and new life, Mark meticulously creates a wondrous town named Marwen where he can heal and be heroic. As he builds an astonishing art installation — a testament to the most powerful women he knows — through his fantasy world, he draws strength to triumph in the real one.",
    release_date: 1545350400,
    genres: ["Drama", "Comedy", "Fantasy"],
  },
  {
    id: "76338",
    title: "Thor: The Dark World",
    poster: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    overview:
      "Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
    release_date: 1383004800,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "460321",
    title: "Close",
    poster: "https://image.tmdb.org/t/p/w500/4kjUGqPIv6kpxJUvjmeQX7nQpKd.jpg",
    overview:
      "A counter-terrorism expert takes a job protecting a young heiress. After an attempted kidnapping puts both of their lives in danger, they must flee.",
    release_date: 1547769600,
    genres: ["Crime", "Drama"],
  },
  {
    id: "327331",
    title: "The Dirt",
    poster: "https://image.tmdb.org/t/p/w500/xGY5rr8441ib0lT9mtHZn7e8Aay.jpg",
    overview:
      "The story of Mötley Crüe and their rise from the Sunset Strip club scene of the early 1980s to superstardom.",
    release_date: 1553212800,
    genres: [],
  },
  {
    id: "412157",
    title: "Steel Country",
    poster: "https://image.tmdb.org/t/p/w500/7QqFn9UzuSnh1uOPeSfYL1MFjkB.jpg",
    overview:
      "When a young boy turns up dead in a sleepy Pennsylvania town, a local sanitation truck driver, Donald, plays detective, embarking on a precarious and obsessive investigation to prove the boy was murdered.",
    release_date: 1555030800,
    genres: [],
  },
  {
    id: "122",
    title: "The Lord of the Rings: The Return of the King",
    poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    overview:
      "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
    release_date: 1070236800,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "348",
    title: "Alien",
    poster: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    overview:
      "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
    release_date: 296442000,
    genres: ["Drama"],
  },
  {
    id: "140607",
    title: "Star Wars: The Force Awakens",
    poster: "https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
    overview:
      "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
    release_date: 1450137600,
    genres: ["Documentary"],
  },
  {
    id: "293660",
    title: "Deadpool",
    poster: "https://image.tmdb.org/t/p/w500/yGSxMiF0cYuAiyuve5DA6bnWEOI.jpg",
    overview:
      "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    release_date: 1454976000,
    genres: ["Action", "Adventure", "Comedy"],
  },
  {
    id: "332562",
    title: "A Star Is Born",
    poster: "https://image.tmdb.org/t/p/w500/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    overview:
      "Seasoned musician Jackson Maine discovers — and falls in love with — struggling artist Ally. She has just about given up on her dream to make it big as a singer — until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
    release_date: 1538528400,
    genres: ["Documentary", "Music"],
  },
  {
    id: "426563",
    title: "Holmes & Watson",
    poster: "https://image.tmdb.org/t/p/w500/orEUlKndjV1rEcWqXbbjegjfv97.jpg",
    overview:
      "Detective Sherlock Holmes and Dr. John Watson join forces to investigate a murder at Buckingham Palace. They soon learn that they have only four days to solve the case, or the queen will become the next victim.",
    release_date: 1545696000,
    genres: ["Mystery", "Adventure", "Comedy", "Crime"],
  },
  {
    id: "429197",
    title: "Vice",
    poster: "https://image.tmdb.org/t/p/w500/1gCab6rNv1r6V64cwsU4oEr649Y.jpg",
    overview:
      "George W. Bush picks Dick Cheney, the CEO of Halliburton Co., to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney's impressive résumé includes stints as White House chief of staff, House Minority Whip and defense secretary. When Bush wins by a narrow margin, Cheney begins to use his newfound power to help reshape the country and the world.",
    release_date: 1545696000,
    genres: ["Action", "Thriller"],
  },
  {
    id: "335984",
    title: "Blade Runner 2049",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    overview:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
    release_date: 1507078800,
    genres: ["Documentary"],
  },
  {
    id: "339380",
    title: "On the Basis of Sex",
    poster: "https://image.tmdb.org/t/p/w500/izY9Le3QWtu7xkHq7bjJnuE5yGI.jpg",
    overview:
      "Young lawyer Ruth Bader Ginsburg teams with her husband Marty to bring a groundbreaking case before the U.S. Court of Appeals and overturn a century of sex discrimination.",
    release_date: 1545696000,
    genres: ["Drama", "History"],
  },
  {
    id: "562",
    title: "Die Hard",
    poster: "https://image.tmdb.org/t/p/w500/1fq1IpnuVqkD5BMuaXAUW0eVB21.jpg",
    overview:
      "NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
    release_date: 584931600,
    genres: ["Action"],
  },
  {
    id: "375588",
    title: "Robin Hood",
    poster: "https://image.tmdb.org/t/p/w500/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg",
    overview:
      "A war-hardened Crusader and his Moorish commander mount an audacious revolt against the corrupt English crown.",
    release_date: 1542672000,
    genres: ["Family", "Animation"],
  },
  {
    id: "381288",
    title: "Split",
    poster: "https://image.tmdb.org/t/p/w500/bqb9WsmZmDIKxqYmBJ9lj7J6hzn.jpg",
    overview:
      "Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.",
    release_date: 1484784000,
    genres: ["Science Fiction", "Drama"],
  },
  {
    id: "10191",
    title: "How to Train Your Dragon",
    poster: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    overview:
      "As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father",
    release_date: 1268179200,
    genres: ["Fantasy", "Adventure", "Animation", "Family"],
  },
  {
    id: "315635",
    title: "Spider-Man: Homecoming",
    poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    overview:
      "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
    release_date: 1499216400,
    genres: ["Action", "Adventure", "Science Fiction", "Drama"],
  },
  {
    id: "603",
    title: "The Matrix",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    release_date: 922755600,
    genres: ["Documentary", "Science Fiction"],
  },
  {
    id: "586347",
    title: "The Hard Way",
    poster: "https://image.tmdb.org/t/p/w500/kwtLphVv3ZbIblc79YNYbZuzbzb.jpg",
    overview:
      "After learning of his brother's death during a mission in Romania, a former soldier joins two allies to hunt down a mysterious enemy and take his revenge.",
    release_date: 1553040000,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "141052",
    title: "Justice League",
    poster: "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    overview:
      "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
    release_date: 1510704000,
    genres: ["Animation"],
  },
  {
    id: "680",
    title: "Pulp Fiction",
    poster: "https://image.tmdb.org/t/p/w500/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    release_date: 779158800,
    genres: [],
  },
  {
    id: "337167",
    title: "Fifty Shades Freed",
    poster: "https://image.tmdb.org/t/p/w500/9ZedQHPQVveaIYmDSTazhT3y273.jpg",
    overview:
      "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    release_date: 1516147200,
    genres: ["Drama", "Romance"],
  },
  {
    id: "102899",
    title: "Ant-Man",
    poster: "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    overview:
      "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
    release_date: 1436835600,
    genres: ["Documentary"],
  },
  {
    id: "11",
    title: "Star Wars",
    poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    overview:
      "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    release_date: 233370000,
    genres: ["Action"],
  },
  {
    id: "807",
    title: "Se7en",
    poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    overview:
      "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the 'seven deadly sins' in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
    release_date: 811731600,
    genres: ["Crime", "Mystery", "Thriller"],
  },
  {
    id: "27205",
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    overview:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
    release_date: 1279155600,
    genres: ["Action", "Science Fiction", "Adventure"],
  },
  {
    id: "767",
    title: "Harry Potter and the Half-Blood Prince",
    poster: "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    overview:
      "As Harry begins his sixth year at Hogwarts, he discovers an old book marked as 'Property of the Half-Blood Prince', and begins to learn more about Lord Voldemort's dark past.",
    release_date: 1246928400,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "1726",
    title: "Iron Man",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    overview:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    release_date: 1209517200,
    genres: ["Drama"],
  },
  {
    id: "87101",
    title: "Terminator Genisys",
    poster: "https://image.tmdb.org/t/p/w500/oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg",
    overview:
      "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
    release_date: 1435021200,
    genres: ["Science Fiction", "Action", "Thriller", "Adventure"],
  },
  {
    id: "438799",
    title: "Overlord",
    poster: "https://image.tmdb.org/t/p/w500/l76Rgp32z2UxjULApxGXAPpYdAP.jpg",
    overview:
      "France, June 1944. On the eve of D-Day, some American paratroopers fall behind enemy lines after their aircraft crashes while on a mission to destroy a radio tower in a small village near the beaches of Normandy. After reaching their target, the surviving paratroopers realise that, in addition to fighting the Nazi troops that patrol the village, they also must fight against something else.",
    release_date: 1541030400,
    genres: ["Horror", "War", "Science Fiction"],
  },
  {
    id: "260513",
    title: "Incredibles 2",
    poster: "https://image.tmdb.org/t/p/w500/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
    overview:
      "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
    release_date: 1528938000,
    genres: ["Action", "Adventure", "Animation", "Family"],
  },
  {
    id: "672",
    title: "Harry Potter and the Chamber of Secrets",
    poster: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    overview:
      "Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.",
    release_date: 1037145600,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "487297",
    title: "What Men Want",
    poster: "https://image.tmdb.org/t/p/w500/30IiwvIRqPGjUV0bxJkZfnSiCL.jpg",
    overview:
      "Magically able to hear what men are thinking, a sports agent uses her newfound ability to turn the tables on her overbearing male colleagues.",
    release_date: 1549584000,
    genres: ["Drama", "Romance"],
  },
  {
    id: "399402",
    title: "Hunter Killer",
    poster: "https://image.tmdb.org/t/p/w500/a0j18XNVhP4RcW3wXwsqT0kVoQm.jpg",
    overview:
      "Captain Glass of the USS “Arkansas” discovers that a coup d'état is taking place in Russia, so he and his crew join an elite group working on the ground to prevent a war.",
    release_date: 1539910800,
    genres: ["Action", "Thriller"],
  },
  {
    id: "466282",
    title: "To All the Boys I've Loved Before",
    poster: "https://image.tmdb.org/t/p/w500/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
    overview:
      "Lara Jean's love life goes from imaginary to out of control when her secret letters to every boy she's ever fallen for are mysteriously mailed out.",
    release_date: 1534381200,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "209112",
    title: "Batman v Superman: Dawn of Justice",
    poster: "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    overview:
      "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
    release_date: 1458691200,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "360920",
    title: "The Grinch",
    poster: "https://image.tmdb.org/t/p/w500/stAu0oF6dYDhV5ssbmFUYkQPtCP.jpg",
    overview:
      "The Grinch hatches a scheme to ruin Christmas when the residents of Whoville plan their annual holiday celebration.",
    release_date: 1541635200,
    genres: ["Animation", "Family", "Music"],
  },
  {
    id: "10195",
    title: "Thor",
    poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    overview:
      "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    release_date: 1303347600,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "514439",
    title: "Breakthrough",
    poster: "https://image.tmdb.org/t/p/w500/t58dx7JIgchr9If5uxn3NmHaHoS.jpg",
    overview:
      "When he was 14, Smith drowned in Lake St. Louis and was dead for nearly an hour. According to reports at the time, CPR was performed 27 minutes to no avail. Then the youth's mother, Joyce Smith, entered the room, praying loudly. Suddenly, there was a pulse, and Smith came around.",
    release_date: 1554944400,
    genres: ["War"],
  },
  {
    id: "278",
    title: "The Shawshank Redemption",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    overview:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    release_date: 780282000,
    genres: ["Drama", "Crime"],
  },
  {
    id: "297762",
    title: "Wonder Woman",
    poster: "https://image.tmdb.org/t/p/w500/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
    overview:
      "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
    release_date: 1496106000,
    genres: ["Action", "Adventure", "Fantasy", "TV Movie"],
  },
];
