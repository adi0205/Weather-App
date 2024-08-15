const temperfield = document.querySelector(".weather1");
const cityfield = document.querySelector(".weather2 p");
const datefield = document.querySelector(".weather2 span");
const emojifield = document.querySelector(".weather3 img");
const weatherfield = document.querySelector(".weather3 span");
const searchfield = document.querySelector(".searchfield");
const form = document.querySelector("form");

let target = "Delhi"

const fetcData = async ()=> {

try {
    const url = `https://api.weatherapi.com/v1/current.json?key=29d044543d4f4ae3818160657232312&q=${target}`

const response = await fetch(url);
const data = await response.json();

// console.log(data);


const {
    current:{temp_c, 
        condition:{ text, icon }
    },
    location:{ name ,localtime},

} = data;


  updateDom(temp_c, name , localtime ,icon , text )
} catch (error) {
    alert("Location not found")
}
};

function updateDom (temperate,city,time,emoji,text) {
    temperfield.innerText = temperate;
    cityfield.innerText = city;
 
    const exactTime = time.split(" ")[1]
    const exactDate = time.split(" ")[0]
  

const exactDay = getDayFullName(new Date(exactDate).getDay())
// console.log(exactDay); 


    datefield.innerText = `${exactTime}  ${exactDay}  ${exactDate}`
    emojifield.src = emoji ;
    weatherfield.innerText = text
}

fetcData();


function getDayFullName(num){
  switch (num) {
    case 0:
        return"Sunday"   
    case 1:
        return"Monday"   
    case 2:
        return"Tuesday"   
    case 3:
        return"Wednesday"   
    case 4:
        return"Thursday"   
    case 5:
        return"Friday"   
    case 6:
        return"Saturday"   
    
        break;
  
    default:
        return "Don't Know"
  }
}


const search = (e)=> {
e.preventDefault();

target = searchfield.value

fetcData()

}

form.addEventListener("submit", search)