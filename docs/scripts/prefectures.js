const baseURL = 'http://localhost:8081';
let doctors;
let companions;

// const data = require("../config/data.json");

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
                "Yamanashi", "Nagano","Gifu", "Shizuoka","Aichi",]

},

{
  name: "Kansai",
  prefectures: ["Mie","Shiga","Kyōto","Ōsaka","Hyōgo","Nara","Wakayama",]

},
{
name: "Chūgoku",
prefectures: ["Tottori","Shimane","Okayama","Hiroshima","Yamaguchi"]

},
{
  name:  "Kyūshū",
  prefectures: ["Fukuoka","Saga","Nagasaki","Kumamoto","Ōita","Miyazaki","Kagoshima","Okinawa"]

},
{
  name:  "Shikoku",
  prefectures: ["Fukuoka","Saga","Nagasaki","Kumamoto","Ōita","Miyazaki","Kagoshima","Okinawa"]

},
]

const prefectures =(region) =>{
  var prefs = region.prefectures
  console.log(prefs)
  return prefs.map(item=>
    `<a href="#" >${item}</a>`
    )
}

const listItems = regions.map(item => 
  `<tr>
      <td >
        <p style="font-weight: bold;">${item.name}:</p>
      </td>
      <td>
          ${prefectures(item).join('    ')}
      </td>
  </tr>`
);

// document.getElementById('prefecture-list').innerHTML = `
//   <ul>
//       ${listItems.join('')}
//   </ul>
//   `;
document.getElementById('prefecture-list').innerHTML +=
  `<h3>Regions and Prefectures</h3>
      <table> 
          <tbody> 
              ${listItems.join('')}
          </tbody>
      </table>`;










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
    "features": [
        {
          "type": "Feature",
          "properties": {
            // "name": "Hikonyan",
            "name": "Hikonyan",
            "place_name": "Hikone Castle, Japan",
            "image": "https://scontent-ort2-2.xx.fbcdn.net/v/t31.18172-8/10557015_1131421616870314_4465642664736976474_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JS-JW-n81P4AX-38DoK&_nc_ht=scontent-ort2-2.xx&oh=3781ef8cc085d98079970e0698dfdf6a&oe=60D2C41E",
            'description':
                        '<p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
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
            "image": "https://cdn-ak.f.st-hatena.com/images/fotolife/C/CNwriting/20190731/20190731202358.jpg"
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
            "image":  "https://www.yurugp.jp/img/uploads/character/650/00000002.jpg"
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
            "image": "https://cdn-ak.f.st-hatena.com/images/fotolife/g/gaou2/20181118/20181118231902.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00000020.jpg"
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
            "image": "https://64.media.tumblr.com/4d9deb46c48235fc291e6ddabc4b9ce3/tumblr_inline_nkwug4Y8oU1qz909t.jpg"
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
            "image": "https://pbs.twimg.com/media/Dh3uQ3GUcAIPeCx.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00003378.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00004028.jpg"
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
            "image": "https://thesmartlocal.com/japan/wp-content/uploads/2020/07/Weird-Japanese-mascots-11.jpeg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00000353.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00001030.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00000099.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00000027.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00000031.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00000357.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00000940.jpg"
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
            "image": "https://dot.asahi.com/S2000/upload/2015062300213_1.jpg"
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
            "image": "https://www.yurugp.jp/img/uploads/character/650/00000001.jpg"
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
    }
});

// map.addLayer({
//     'id': 'places',
//     'type': 'circle',
//     'source': 'places',
//     'paint': {
//     'circle-color': '#4264fb',
//     'circle-radius': 6,
//     'circle-stroke-width': 2,
//     'circle-stroke-color': '#ffffff'
//     }
//     });
map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
    'icon-image': 'tw-national-2',
    'icon-allow-overlap': true
    }
    });
// var popup = new mapboxgl.Popup({
// closeButton: false,
// closeOnClick: false
// });
    
// map.on('mouseenter', 'places', function (e) {
// // Change the cursor style as a UI indicator.
// map.getCanvas().style.cursor = 'pointer';
    
// var coordinates = e.features[0].geometry.coordinates.slice();
// // var description = e.features[0].properties.description;
// var name = e.features[0].properties.name;
    
// // Ensure that if the map is zoomed out such that multiple
// // copies of the feature are visible, the popup appears
// // over the copy being pointed to.
// while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
// coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
// }
    
// // Populate the popup and set its coordinates
// // based on the feature found.
// popup.setLngLat(coordinates).setHTML(name).addTo(map);
// });
    
// map.on('mouseleave', 'places', function () {
// map.getCanvas().style.cursor = '';
// popup.remove();
// });
// });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    //var description = e.features[0].properties.description;
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
    .setHTML(`<strong>${name}</strong><br><br>` + `<img class= "thumb" src = '${image}' style= 'display: inline-block;'/><br> `+ `<p>${place_name}</p>`)
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



var yuru_chara = [
{
    name: "Hikonyan",
    address: "Hikone",
    // category: ["landmark", "Hikone Castle"],
    prefecture: "Shiga",
    img_url: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.18172-8/10557015_1131421616870314_4465642664736976474_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JS-JW-n81P4AX-38DoK&_nc_ht=scontent-ort2-2.xx&oh=3781ef8cc085d98079970e0698dfdf6a&oe=60D2C41E",
    id: 1

},
{
    name: "Funassyi",
    address: "Funabashi",
    // category: ["landmark", "Hikone Castle"],
    prefecture: "Chiba",
    img_url: "https://64.media.tumblr.com/4d9deb46c48235fc291e6ddabc4b9ce3/tumblr_inline_nkwug4Y8oU1qz909t.jpg",
    id: 2,
}, 
{
    name: "Bari-san",
    address: "Imabari", 
    prefecture:"Ehime",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000002.jpg", 
    id: 3

},
{
    name: "Kumamon",
    address: "Kumamoto", 
    prefecture:"Kumamoto",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000001.jpg", 
    id: 4

},
{
    name: "Mikyan",
    address: "Ehime", 
    prefecture:"Ehime",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000940.jpg", 
    id: 5
},
{
    name: "Arukuma",
    address: "Nagano", 
    prefecture:"Nagano",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000357.jpg", 
    id: 6
},
{
    name: "Okazaemon",
    address: "Aichi", 
    prefecture:"Aichi",
    img_url: "https://thesmartlocal.com/japan/wp-content/uploads/2020/07/Weird-Japanese-mascots-11.jpeg", 
    id: 7
},
{
    name: "Victoire Cheval Blanc Murao III",
    address: "Nagano", 
    prefecture:"Nagano",
    img_url: "https://cdn-ak.f.st-hatena.com/images/fotolife/C/CNwriting/20190731/20190731202358.jpg", 
    id: 8
},
{
    name: "Ono Joe",
    address: "Fukuoka", 
    prefecture:"Fukuoka",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000099.jpg", 
    id: 9
},
{
    name: "Kaparu",
    address: "Shiki",
    prefecture:"Saitama",
    img_url: "https://cdn-ak.f.st-hatena.com/images/fotolife/g/gaou2/20181118/20181118231902.jpg", 
    id: 10
},
{
    name: "Gunma-chan",
    address: "Gunma", 
    prefecture:"Gunma",
    img_url: "https://dot.asahi.com/S2000/upload/2015062300213_1.jpg", 
    id: 11
},
{
    name: "Sanomaru",
    address: "Sano", 
    prefecture:"Tochigi",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000020.jpg", 
    id: 12
},
{
    name: "Ayukoro-chan",
    address: "Atsugi", 
    prefecture:"Kanagawa",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000027.jpg", 
    id: 13
},
{
    name: "Unari-kun",
    address: "Narita", 
    prefecture:"Chiba",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000031.jpg", 
    id: 14
},
{
    name: "Pyoko-tan",
    address: "Gifu", 
    prefecture:"Gifu",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000353.jpg", 
    id: 15
},
{
    name: "Tochisuke",
    address: "Tochigi", 
    prefecture:"Tochigi",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00002023.jpg", 
    id: 16
},
{
    name: "Midomosu",
    address: "Midori", 
    prefecture:"Gunma",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00004028.jpg", 
    id: 17
},
{
    name: "Ōmapyon",
    address: "Ōmachi", 
    prefecture:"Nagano",
    img_url: "https://pbs.twimg.com/media/Dh3uQ3GUcAIPeCx.jpg", 
    id: 18
},
{
    name: "Zao-sama",
    address: "Zao", 
    prefecture:"Miyagi",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00001016.jpg", 
    id: 19
},
{
    name: "Kaki-tan",
    address: "Wakayama", 
    prefecture:"Wakayama",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00001030.jpg", 
    id: 20
},
{
    name: "Nemurou",
    address: "Hokkaido", 
    prefecture:"Hokkaido",
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00003378.jpg", 
    id: 21
},

]



// const showDetail = ev => {
//     const id = ev.currentTarget.dataset.id;
//     console.log("click")
//     console.log(id)

//     const chara = yuru_chara.filter(chara => chara.id === id)[0];

//     document.querySelector('#map').innerHTML = `
//         <div>
//             <p>Map marker location for ${chara.name}<p>
//         </div>`
// };

// const showPrefectureDetail = ev => {
    
//     console.log("click")
//     console.log(ev)
//     const chara = yuru_chara.filter(chara => chara.prefecture === ev.currentTarget.dataset.prefecture)[0];
//     console.log(chara)

    
//     document.querySelector('#map').innerHTML = `
//         <div >
//             <p>ev.currentTarget.dataset.prefecture)<p>
//         </div>`
// };


// const listItems = yuru_chara.map(item => 
//     `<tr onclick = >
//         <td data-id = "${item._id}">
//             <img class= "thumb" src = ${item.img_url} onclick= showDetail()/>
//         </td>
//         <td>
//             <p>${item.name}</p>
//             ${item.prefecture} Prefecture
//         </td>
        
//     </tr>`
//  );

// document.getElementById('yuru-list').innerHTML = `
//     <ul>
//         ${listItems.join('')}
//     </ul>
//     `;
// document.getElementById('yuru-list').innerHTML =
//     `<h3>Featured Yuru-chara</h3>
//         <table> 
//             <tbody> 
//                 ${listItems.join('')}
//             </tbody>
//         </table>`;