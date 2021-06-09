
//yuru-chara data
var yuru_chara = [
  {
      name: "Hikonyan",
      address: "Hikone",
      // category: ["landmark", "Hikone Castle"],
      prefecture: "Shiga",
      img_url: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.18172-8/10557015_1131421616870314_4465642664736976474_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JS-JW-n81P4AX-38DoK&_nc_ht=scontent-ort2-2.xx&oh=3781ef8cc085d98079970e0698dfdf6a&oe=60D2C41E",
      description:"Hikonyan was born on the 400th anniversary of Hikone Castle's founding. Their design is based on a legend concerning Ii Naotaka, the 3rd Lord of Hikone. The daimyō was beckoned by a white cat to take shelter from a storm in a temple, and was saved from a lightning strike.",
      id: 1
  
  },
  {
      name: "Funassyi",
      address: "Funabashi",
      // category: ["landmark", "Hikone Castle"],
      prefecture: "Chiba",
      img_url: "https://64.media.tumblr.com/4d9deb46c48235fc291e6ddabc4b9ce3/tumblr_inline_nkwug4Y8oU1qz909t.jpg",
      description:"Funassyi, or Funadius IV, is a pear fairy and is the fourth of 274 children. They were born in AD 138 and appear on numerous TV programs and commercials. They also issued 4 CD albums and 6 singles, DVDs, starred in its own anime series and live action drama special as well as headlined their own concert. They are the unofficial mascot of Funabashi, Chiba prefecture, and even Japan.",
      id: 2,
  }, 
  {
      name: "Bari-san",
      address: "Imabari", 
      prefecture:"Ehime",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000002.jpg", 
      description:"Bari-san is a big chick who is the mascot of Imabari. Inside his haramaki (belly wrap), he carries a ship everywhere he goes.",
      id: 3
  
  },
  {
      name: "Kumamon",
      address: "Kumamoto", 
      prefecture:"Kumamoto",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000001.jpg", 
      description:"Kumamon was born on March 12, when the Kyushu Shinkansen Line officially opened. The prefecture's governor appointed Kumamon as Kumamoto's Sales Manager and Happiness Manager. His chubby size is from indulging in Kumamoto's delicious food and he is busy everyday promoting Kumamoto!",
      id: 4
  
  },
  {
      name: "Mikyan",
      address: "Ehime", 
      prefecture:"Ehime",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000940.jpg", 
      description:"Mikyan was born in Ehime, the citrus kingdom ~ ♪ In order to share the charm and love of Ehime to the whole country, please support us with all your heart and soul while valuing our connection with everyone. I'll wait for your support!",
      id: 5
  },
  {
      name: "Arukuma",
      address: "Nagano", 
      prefecture:"Nagano",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000357.jpg", 
      description:" Okazaemon is Something like an Okazaki character. He promotes Okazaki with the characters Oka on the face and Saki on the chest. Okazaki City is the birthplace of Ieyasu, Hatcho Miso, and various specialties.",
      id: 6
  },
  {
      name: "Okazaemon",
      address: "Aichi", 
      prefecture:"Aichi",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000959.jpg",
      description:" Okazaemon is Something like an Okazaki character. He promotes Okazaki with the characters Oka on the face and Saki on the chest. Okazaki City is the birthplace of Ieyasu, Hatcho Miso, and various specialties.", 
      id: 7
  },
  {
      name: "Victoire Cheval Blanc Murao III",
      address: "Nagano", 
      prefecture:"Nagano",
      img_url: "https://cdn-ak.f.st-hatena.com/images/fotolife/C/CNwriting/20190731/20190731202358.jpg", 
      description: "VictoireI Cheval Blanc Murao III is the official mascot of Hakuba Village, Nagano Prefecture. He'd rather be village mayor than the winner of the Yuru-chara Grand Prix.",
      id: 8
  },
  {
      name: "Ono Joe",
      address: "Fukuoka", 
      prefecture:"Fukuoka",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000099.jpg", 
      description:"I'm Ono Joe from Onojo City! A 12-year-old who is good at dancing, with a red scarf and \"Ishigaki Regent\" as a trademark. Thank you for your support!!!",
      id: 9
  },
  {
      name: "Kaparu",
      address: "Shiki",
      prefecture:"Saitama",
      img_url: "https://cdn-ak.f.st-hatena.com/images/fotolife/g/gaou2/20181118/20181118231902.jpg", 
      description:"Kaparu was born with the motif of Kappa folk tales that have been handed down in the city since ancient times. Despite this, they has a black history of being stored and left for nearly 10 years. Resurrected in 2011 after becoming three-dimensional, he's a playing bass-playing, cucumber obsessed Kappa.",
      id: 10
  },
  {
      name: "Gunma-chan",
      address: "Gunma", 
      prefecture:"Gunma",
      img_url: "https://dot.asahi.com/S2000/upload/2015062300213_1.jpg", 
      description:"Gunma-chan is doing his best as the director of the Gunma Prefecture Promotion Department so that many people can know the charm of Gunma Prefecture, including the world cultural heritage Tomioka Silk Mill and Silk Industry Heritage Group.",
      id: 11
  },
  {
      name: "Sanomaru",
      address: "Sano", 
      prefecture:"Tochigi",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000020.jpg", 
      description:"Sanomaru is a samurai who lives in the castle town of Sano with a sword of imo fly in a bowl of Sano ramen. In order to promote the charm of Sano to the world, \"SANO\" is written in Roman letters on the shade so that foreigners can understand it. He is eager to reach the top!",
      id: 12
  },
  {
      name: "Ayukoro-chan",
      address: "Atsugi", 
      prefecture:"Kanagawa",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000027.jpg", 
      description:"I'm Ayukoro-chan, a collaboration between Atsugi's local gourmet white-collar hormone pig and the specialty sweetfish! I really love my handmade happi coat, which is full of the charms of the city such as fireworks, hot springs, and the city's flower azalea!",
      id: 13
  },
  {
      name: "Unari-kun",
      address: "Narita", 
      prefecture:"Chiba",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000031.jpg", 
      description:"Unari-kun is a special tourism ambassador for Narita City and he enthusiastically promotes his favorite Narita with the slogan \"Una.\"",
      id: 14
  },
  {
      name: "Pyoko-tan",
      address: "Gifu", 
      prefecture:"Gifu",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00000353.jpg", 
      description:"Pyoko-tan is a chick who dreams of becoming a frog. In order to rejuvenate Gifu without permission, it transforms into Gifu's specialty products, but since they are still a chick, they only transform their head.",
      id: 15
  },
  {
      name: "Tochisuke",
      address: "Tochigi", 
      prefecture:"Tochigi",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00002023.jpg", 
      description:"Tochisuke is a brewery fairy that was born in Tochigi, the city of breweries. As \"Tochigi City's Relief Chief\", I'm doing my best to make everyone's hearts warm ♪ Please cheer me on!（●・人・●）♪",
      id: 16
  },
  {
      name: "Midomosu",
      address: "Midori", 
      prefecture:"Gunma",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00004028.jpg", 
      description:"The Iwajuku site was a great discovery that changed the history of Japan. Midomosu is inspired by the mammoth that was said to have lived in that era. Mosu is working hard to reach the top!",
      id: 17
  },
  {
      name: "Ōmapyon",
      address: "Ōmachi", 
      prefecture:"Nagano",
      img_url: "https://pbs.twimg.com/media/Dh3uQ3GUcAIPeCx.jpg", 
      description:"Ōmapyon is from the Northern Alps. With the motif of Ōmachi City's animal (beast) antelope, the mountain of Atama is an image of the Northern Alps and the rich and pure water of Ōmachi City. Their charm point is their gentle expression.",
      id: 18
  },
  {
      name: "Zao-sama",
      address: "Zao", 
      prefecture:"Miyagi",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00001016.jpg",
      description:"Zao-sama lives quietly in the depths of the forest of Miyagi Zao. He's shy and comfortably takes things at his pace. ♪ His hobbies are enjoying hot springs and being a gourmet king! ☆ Zao Town is the best place to eat delicious food while looking at the beautiful scenery of the Zao mountain range!",
      id: 19
  },
  {
      name: "Kaki-tan",
      address: "Wakayama", 
      prefecture:"Wakayama",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00001030.jpg",
      description:"Kaki-tan LOVES persimmons! Their charm point is the awkwardness of the persimmons on their head and bottom. I am doing my best to let everyone know about delicious persimmons!",
      id: 20
  },
  {
      name: "Nemurou",
      address: "Hokkaidō", 
      prefecture:"Hokkaidō",
      img_url: "https://www.yurugp.jp/img/uploads/character/650/00003378.jpg", 
      description:"I'm Nemurou, a sleepy fellow born in Nemuro, the easternmost city of Hokkaidō. Rou is working hard every day to convey the charm of Nemuro, especially Nemuro's seafood– Hanasaki crab, pacific saury, and kelp– are his favorite foods.",
      id: 21
  }
  ]

//region and prefecture data
var regions = [
  {
    name: "Hokkaidō",
    prefectures: ["Hokkaidō"]

},
{
  name: "Tōhoku",
  prefectures: ["Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima"]
},
{
  name: "Kantō",
  prefectures: ["Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tōkyō", 
                "Kanagawa"]

},
{
  name: "Chūbu",
  prefectures: ["Niigata", "Toyama", "Ishikawa", "Fukui", 
                "Yamanashi", "Nagano","Gifu", "Shizuoka","Aichi"]

},
{
  name: "Kansai",
  prefectures: ["Mie","Shiga","Kyōto","Ōsaka","Hyōgo","Nara","Wakayama"]

},
{
name: "Chūgoku",
prefectures: ["Tottori","Shimane","Okayama","Hiroshima","Yamaguchi"]

},
{
  name:  "Shikoku",
  prefectures: ["Tokushima", "Kagawa","Ehime","Kōchi"]

},
{
  name:  "Kyūshū",
  prefectures: ["Fukuoka","Saga","Nagasaki","Kumamoto","Ōita","Miyazaki","Kagoshima","Okinawa"]

}
]

//marker data
var features = [
  {
    "type": "Feature",
    "properties": {
      "name": "Hikonyan",
      "place_name": "Hikone Castle, Japan",
      "image": "https://scontent-ort2-2.xx.fbcdn.net/v/t31.18172-8/10557015_1131421616870314_4465642664736976474_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JS-JW-n81P4AX-38DoK&_nc_ht=scontent-ort2-2.xx&oh=3781ef8cc085d98079970e0698dfdf6a&oe=60D2C41E",
      "description":"Hikonyan was born on the 400th anniversary of Hikone Castle's founding. Their design is based on a legend concerning Ii Naotaka, the 3rd Lord of Hikone. The daimyō was beckoned by a white cat to take shelter from a storm in a temple, and was saved from a lightning strike."
    },
    "geometry": {
      "coordinates": [
        136.251755,
        35.277014
      ],
      "type": "Point"
    },
    "id": "3f0559910354ce6131b392b1429b8b3e"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Victoire Cheval Blanc Murao III",
      "place_name": "Hakuba, Japan",
      "image": "https://cdn-ak.f.st-hatena.com/images/fotolife/C/CNwriting/20190731/20190731202358.jpg",
      "description": "VictoireI Cheval Blanc Murao III is the official mascot of Hakuba Village, Nagano Prefecture. He'd rather be village mayor than the winner of the Yuru-chara Grand Prix."
    },
    "geometry": {
      "coordinates": [
        137.834479,
        36.690826
      ],
      "type": "Point"
    },
    "id": "locality.12362226399370330"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Zao-sama",
      "place_name": "Zao, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00001016.jpg", 
      "description":"Zao-sama lives quietly in the depths of the forest of Miyagi Zao. He's shy and comfortably takes things at his pace. ♪ His hobbies are enjoying hot springs and being a gourmet king! ☆ Zao Town is the best place to eat delicious food while looking at the beautiful scenery of the Zao mountain range!"
    },
    "geometry": {
      "coordinates": [
        140.616435,
        38.092173
      ],
      "type": "Point"
    },
    "id": "locality.13879286759511790"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Bari-san",
      "place_name": "Imabari, Japan",
      "image":  "https://www.yurugp.jp/img/uploads/character/650/00000002.jpg",
      "description":"Bari-san is a big chick who is the mascot of Imabari. Inside his haramaki (belly wrap), he carries a ship everywhere he goes."
    },
    "geometry": {
      "coordinates": [
        132.99778,
        34.06611
      ],
      "type": "Point"
    },
    "id": "place.10678879742735600"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kaparu",
      "place_name": "Shiki, Japan",
      "image": "https://cdn-ak.f.st-hatena.com/images/fotolife/g/gaou2/20181118/20181118231902.jpg",
      "description":"Kaparu was born with the motif of Kappa folk tales that have been handed down in the city since ancient times. Despite this, they has a black history of being stored and left for nearly 10 years. Resurrected in 2011 after becoming three-dimensional, he's a playing bass-playing, cucumber obsessed Kappa."
    },
    "geometry": {
      "coordinates": [
        139.58028,
        35.83667
      ],
      "type": "Point"
    },
    "id": "place.10908615303601800"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Sanomaru",
      "place_name": "Sano, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00000020.jpg",
      "description":"Sanomaru is a samurai who lives in the castle town of Sano with a sword of imo fly in a bowl of Sano ramen. In order to promote the charm of Sano to the world, \"SANO\" is written in Roman letters on the shade so that foreigners can understand it. He is eager to reach the top!"
    },
    "geometry": {
      "coordinates": [
        139.57833,
        36.31444
      ],
      "type": "Point"
    },
    "id": "place.11214483383766200"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Funassyi",
      "place_name": "Funabashi, Japan",
      "image": "https://64.media.tumblr.com/4d9deb46c48235fc291e6ddabc4b9ce3/tumblr_inline_nkwug4Y8oU1qz909t.jpg",
      "description":"Funassyi, or Funadius IV, is a pear fairy and is the fourth of 274 children. They were born in AD 138 and appear on numerous TV programs and commercials. They also issued 4 CD albums and 6 singles, DVDs, starred in its own anime series and live action drama special as well as headlined their own concert. They are the unofficial mascot of Funabashi, Chiba prefecture, and even Japan."
    },
    "geometry": {
      "coordinates": [
        139.9825,
        35.69472
      ],
      "type": "Point"
    },
    "id": "place.12256616653311690"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Ōmapyon",
      "place_name": "Ōmachi, Japan",
      "image": "https://pbs.twimg.com/media/Dh3uQ3GUcAIPeCx.jpg",
      "description":"Ōmapyon is from the Northern Alps. With the motif of Ōmachi City's animal (beast) antelope, the mountain of Atama is an image of the Northern Alps and the rich and pure water of Ōmachi City. Their charm point is their gentle expression."
    },
    "geometry": {
      "coordinates": [
        137.85,
        36.5
      ],
      "type": "Point"
    },
    "id": "place.12357117027270150"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Tochisuke",
      "place_name": "Tochigi, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00002023.jpg", 
      "description":"Tochisuke is a brewery fairy that was born in Tochigi, the city of breweries. As \"Tochigi City's Relief Chief\", I'm doing my best to make everyone's hearts warm ♪ Please cheer me on!（●・人・●）♪"
    },
    "geometry": {
      "coordinates": [
        139.73028,
        36.38139
      ],
      "type": "Point"
    },
    "id": "place.12771147247576390"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Nemurou",
      "place_name": "Nemuro, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00003378.jpg",
      "description":"I'm Nemurou, a sleepy fellow born in Nemuro, the easternmost city of Hokkaidō. Rou is working hard every day to convey the charm of Nemuro, especially Nemuro's seafood– Hanasaki crab, pacific saury, and kelp– are his favorite foods."
    },
    "geometry": {
      "coordinates": [
        145.58306,
        43.33
      ],
      "type": "Point"
    },
    "id": "place.13190943157241120"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Midomosu",
      "place_name": "Midori, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00004028.jpg",
      "description":"The Iwajuku site was a great discovery that changed the history of Japan. Midomosu is inspired by the mammoth that was said to have lived in that era. Mosu is working hard to reach the top!"
    },
    "geometry": {
      "coordinates": [
        139.28111,
        36.39472
      ],
      "type": "Point"
    },
    "id": "place.19414762125571260"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Okazaemon",
      "place_name": "Aichi, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00000959.jpg",
      "description":" Okazaemon is Something like an Okazaki character. He promotes Okazaki with the characters Oka on the face and Saki on the chest. Okazaki City is the birthplace of Ieyasu, Hatcho Miso, and various specialties."
    },
    "geometry": {
      "coordinates": [
        137.16667,
        34.95
      ],
      "type": "Point"
    },
    "id": "place.6033773650751410"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Pyoko-tan",
      "place_name": "Gifu, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00000353.jpg",
      "description":"Pyoko-tan is a chick who dreams of becoming a frog. In order to rejuvenate Gifu without permission, it transforms into Gifu's specialty products, but since they are still a chick, they only transform their head."
    },
    "geometry": {
      "coordinates": [
        136.76667,
        35.41667
      ],
      "type": "Point"
    },
    "id": "place.6225522181764370"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kaki-tan",
      "place_name": "Hashimoto, Japan", 
      "image": "https://www.yurugp.jp/img/uploads/character/650/00001030.jpg",
      "description":"Kaki-tan LOVES persimmons! Their charm point is the awkwardness of the persimmons on their head and bottom. I am doing my best to let everyone know about delicious persimmons!"
      
    },
    "geometry": {
      "coordinates": [
        135.6,
        34.31667
      ],
      "type": "Point"
    },
    "id": "place.7376571163889540"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Ono Joe",
      "place_name": "Onojo, Japan", 
      "image": "https://www.yurugp.jp/img/uploads/character/650/00000099.jpg",
      "description":"I'm Ono Joe from Onojo City! A 12-year-old who is good at dancing, with a red scarf and \"Ishigaki Regent\" as a trademark. Thank you for your support!!!"
    },
    "geometry": {
      "coordinates": [
        130.47889,
        33.536389
      ],
      "type": "Point"
    },
    "id": "place.7490567628070580"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Ayukoro-chan",
      "place_name": "Atsugi, Japan", 
      "image": "https://www.yurugp.jp/img/uploads/character/650/00000027.jpg",
      "description":"I'm Ayukoro-chan, a collaboration between Atsugi's local gourmet white-collar hormone pig and the specialty sweetfish! I really love my handmade happi coat, which is full of the charms of the city such as fireworks, hot springs, and the city's flower azalea!"
    },
    "geometry": {
      "coordinates": [
        139.36667,
        35.43333
      ],
      "type": "Point"
    },
    "id": "place.9169596883911460"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Unari-kun",
      "place_name": "Narita, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00000031.jpg",
      "description":"Unari-kun is a special tourism ambassador for Narita City and he enthusiastically promotes his favorite Narita with the slogan \"Una.\""
    },
    "geometry": {
      "coordinates": [
        140.31667,
        35.78333
      ],
      "type": "Point"
    },
    "id": "place.9841918300412650"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Arukuma",
      "place_name": "Nagano, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00000357.jpg", 
      "description":" Okazaemon is Something like an Okazaki character. He promotes Okazaki with the characters Oka on the face and Saki on the chest. Okazaki City is the birthplace of Ieyasu, Hatcho Miso, and various specialties."
    },
    "geometry": {
      "coordinates": [
        138.1,
        36.25
      ],
      "type": "Point"
    },
    "id": "region.10028790609758740"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mikyan",
      "place_name": "Ehime, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00000940.jpg",
      "description":"Mikyan was born in Ehime, the citrus kingdom ~ ♪ In order to share the charm and love of Ehime to the whole country, please support us with all your heart and soul while valuing our connection with everyone. I'll wait for your support!"
    },
    "geometry": {
      "coordinates": [
        132.833329,
        33.83333
      ],
      "type": "Point"
    },
    "id": "region.10259198174594300"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Gunma-chan",
      "place_name": "Gunma, Japan",
      "image": "https://dot.asahi.com/S2000/upload/2015062300213_1.jpg",
      "description":"Gunma-chan is doing his best as the director of the Gunma Prefecture Promotion Department so that many people can know the charm of Gunma Prefecture, including the world cultural heritage Tomioka Silk Mill and Silk Industry Heritage Group."
    },
    "geometry": {
      "coordinates": [
        139.11667,
        36.36667
      ],
      "type": "Point"
    },
    "id": "region.9119965733096950"
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kumamon",
      "place_name": "Kumamoto, Japan",
      "image": "https://www.yurugp.jp/img/uploads/character/650/00000001.jpg",
      "description":"Kumamon was born on March 12, when the Kyushu Shinkansen Line officially opened. The prefecture's governor appointed Kumamon as Kumamoto's Sales Manager and Happiness Manager. His chubby size is from indulging in Kumamoto's delicious food and he is busy everyday promoting Kumamoto!"
    },
    "geometry": {
      "coordinates": [
        130.66667,
        32.71667
      ],
      "type": "Point"
    },
    "id": "region.9859515157060600"
  }
]




//displays all the yuru-charas for a particular prefecture
const showPrefectureCharas = prefecture => {

  //console.log("click")
  // console.log(prefecture)
  const charas = yuru_chara.filter(chara => chara.prefecture === prefecture);
  // console.log(charas);

  if (charas.length ==0){
    document.getElementById('prefecture-list').innerHTML = 
    `<div>
        <button class="btn" aria-labelledby="Back" role="button" onClick= showRegions()>Back</button>
        <h3 aria-labelledby="${prefecture}'s Yuru-chara">${prefecture} Prefecture's Yuru-chara</h3>
        <p>No <i>yuru-chara</i> found for ${prefecture} :(</p>
    </div>`
  }

  else{

    const listItems = charas.map(item => 
      `<tr onclick=showCharaDetails('${item.name}')>
          <td data-id = "${item._id}">
              <img class= "thumbMedium" alt="${item.name}" src = "${item.img_url}" onclick= showCharaDetails('${item.name}')/>
          </td>
          <td>
              <p>${item.name}</p>
              ${item.prefecture} Prefecture
          </td>
          
      </tr>`
   );
  
    document.getElementById('prefecture-list').innerHTML =

          `<div>
              <button class="btn" onClick= showRegions() role="button" aria-labelledby="Back">Back</button>
              <div class="prefecture-charas">
                  <h3 aria-labelledby="${prefecture}'s Yuru-chara">${prefecture} Prefecture's Yuru-chara</h3>
                    <table> 
                        <tbody> 
                            ${listItems.join('')}
                        </tbody>
                    </table>
              </div>
          <div>`;
  }
  document.querySelector('aside').style.paddingLeft = "160px";
  document.querySelector('aside').style.display = "flex";
}
  
  
//displays an individual page for a particular yuru-chara
//includes a map with that character's marker open
const showCharaDetails = name =>{
    // console.log(name)
    const chara = yuru_chara.filter(chara => chara.name === name)[0];
    // console.log(chara)

    const chara_marker = features.filter(marker => marker.properties.name === name)[0];
    // console.log(chara_marker)

    const index = features.findIndex(x => x.properties.name === name);
    if (index !== undefined) features.splice(index, 1);
    // console.log("After removal:", features);

    document.querySelector('#prefecture-list').innerHTML = `
        <button class="btn" onClick= showPrefectureCharas('${chara.prefecture}') role="button">Back</button>
        <div class="ind-chara">
            <img src='${chara.img_url}' class="ind-thumb" alt="${chara.name}">
            <div class="chara-details">
              <p style="font-size: 22px;">${chara.name}<p>
              <hr style="opacity: 0.3;">
              <p>${chara.prefecture} Prefecture, ${chara_marker.properties.place_name}<p>
              <p>${chara.description}<p>
            </div>
        </div>
        <div id='map' style='width: 60%; height: 600px;'></div>`


    //renders map with one pop-up open

    mapboxgl.accessToken = 'pk.eyJ1IjoiZnRlb2giLCJhIjoiY2twYnZ1dWJmMHNjcDMwbjJ3OXBjdmRqZyJ9.BUapBisSyzUKg5TT819v-w';
    var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/fteoh/ckpc00rvz4d2q17rm12qroxrp', // style URL
    center: [140.693800, 38.869835], // starting position [lng, lat]
    zoom: 4.5 // starting zoom
    });

    // document.querySelector('.mapboxgl-map').style.position = 'fixed';

    map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('#map')}));
    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', function () {
      map.addSource('places', {
      'type': 'geojson',
      'data': {
      'type': 'FeatureCollection',
      "features": features
      }
    });

    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
        'icon-image': 'tw-national-2',
        'icon-allow-overlap': true
        }
        });


    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        var name = e.features[0].properties.name;
        var place_name = e.features[0].properties.place_name;
        var image = e.features[0].properties.image;
        
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<strong>${name}</strong><br><br>` + `<img class= "map-thumb" src = '${image}' alt="${name}" style= 'display: inline-block;'/><br> `+ `<p>${place_name}</p>`)
        .addTo(map);
        });
        
        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
        });
        
        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
        });
        });

        var popup = new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat(chara_marker.geometry.coordinates)
          .setHTML(`<strong>${name}</strong><br><br>` + `<img class= "map-thumb" src = '${chara.img_url}' style= 'display: inline-block;'/><br> `+`<p>${chara_marker.properties.place_name}</p>`) // sets a popup on this marker
          .addTo(map);

        features.push(chara_marker);

        document.querySelector('aside').style.paddingLeft = "300px";
        document.querySelector('aside').style.display = "inline-block";
        // document.querySelector('ind-chara').style.width = "1000px";
  }

//renders the page with clickable regions/prefectures
const showRegions = () =>{

  const prefectures =(region) =>{
    var prefs = region.prefectures
    console.log(prefs)
    return prefs.map(item=>
      `<a href="#" onclick=showPrefectureCharas('${item}') aria-labelledby="${item}">${item}</a>`
      )
  }

  const listItems = regions.map(item => 
    `<ul class="prefect" aria-labelledby="${item.name}"><strong>${item.name}</strong>
        ${prefectures(item).join('')}
    </ul>`
  );


  document.querySelector('#prefecture-list').innerHTML =
    `${listItems.join('')}`

}

showRegions();