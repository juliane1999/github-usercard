import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entryPoint = document.querySelector('.cards')
axios.get('https://api.github.com/users/juliane1999')
.then(res => {
  console.log(res.data)
  const newCard = gitCard(res.data)
  console.log(newCard)
  return newCard
})
.then(newCard => {
  entryPoint.appendChild(newCard)
})
.catch(err => console.log(err.message))
.finally(() => console.log('done'))

  // .get('https://api.github.com/users/juliane1999')
 



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

//const card = gitCard({imageURL: response.data.message[0], name: 'juliane1999'})
// mainCard.appendChild(card)

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

//const followersArray = [];

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(item => {
cardsFromArray(item)
})

function cardsFromArray(user){
axios.get(`https://api.github.com/users/${user}`)
.then(res => {
  console.log(res.data)
  const newCard = gitCard(res.data)
  console.log(newCard)
  return newCard
})
.then(newCard => {
  entryPoint.appendChild(newCard)
})
.catch(err => console.log(err.message))
.finally(() => console.log('done'))
}


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitCard ({avatar_url, name, login, location, html_url, followers, following, bio}) {
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardDiv = document.createElement('div')
  const nameH3 = document.createElement('h3')
  const username = document.createElement('p')
  const locationP = document.createElement('p')
  const profileP = document.createElement('p')
  const url = document.createElement('a')
  const followersP = document.createElement('p')
  const followingP = document.createElement('p')
  const bioP = document.createElement('p')

  nameH3.textContent = `${name}`
  username.textContent = `${login}`
  locationP.textContent = `Location: ${location}`
  profileP.textContent = `Profile: ${html_url}`
  url.textContent = html_url
  followersP.textContent = `Followers: ${followers}`
  followingP.textContent = `Following: ${following}`
  bioP.textContent = `Bio: ${bio}`
  
  img.src = avatar_url
  url.href = html_url

  card.appendChild(img)
  card.appendChild(cardDiv)
  cardDiv.appendChild(nameH3)
  cardDiv.appendChild(username)
  cardDiv.appendChild(locationP)
  cardDiv.appendChild(profileP)
  cardDiv.appendChild(followersP)
  cardDiv.appendChild(followingP)
  cardDiv.appendChild(bioP)
  profileP.appendChild(url)

  card.classList.add('card')
  cardDiv.classList.add('card-info')
  nameH3.classList.add('name')
  username.classList.add('username')

    return card;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
