const baseURL = 'http://localhost:8081';
let doctors;
let companions;

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
    img_url: "https://lh3.googleusercontent.com/proxy/rRs2lzHV_XSgmdWBoFVID1o2WowQxx4tUfvt9nPGOvzX0LiVIOTDq-NXNweX6mgwOrD6ThdMPHsk42U-NqhV2TzjMo7pKLkCRXtcdfwIKQzF_x8e-UJEzSZxr6ENWb4T", 
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
    name: "Omapyon",
    address: "Omachi", 
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
    img_url: "https://www.yurugp.jp/img/uploads/character/650/00000353.jpg", 
    id: 20
},

]

const showDetail = ev => {
    const id = ev.currentTarget.dataset.id;
    console.log("click")
    console.log(id)

    const chara = yuru_chara.filter(chara => chara.id === id)[0];

    document.querySelector('#map').innerHTML = `
        <div>
            <p>Map marker location for ${chara.name}<p>
        </div>`
};

const showPrefectureDetail = ev => {
    
    console.log("click")
    console.log(ev)
    const chara = yuru_chara.filter(chara => chara.prefecture === ev.currentTarget.dataset.prefecture)[0];
    console.log(chara)

    
    document.querySelector('#map').innerHTML = `
        <div >
            <p>ev.currentTarget.dataset.prefecture)<p>
        </div>`
};


const listItems = yuru_chara.map(item => 
    `<tr onclick = >
        <td data-id = "${item._id}">
            <img class= "thumb" src = ${item.img_url} onclick= showDetail()/>
        </td>
        <td>
            <p>${item.name}</p>
            ${item.prefecture} Prefecture
        </td>
        
    </tr>`
 );

document.getElementById('yuru-list').innerHTML = `
    <ul>
        ${listItems.join('')}
    </ul>
    `;
document.getElementById('yuru-list').innerHTML =
    `<table> 
            <tbody> 
                ${listItems.join('')}
            </tbody>
        </table>`;