const userInfoList = [

    {
        profile: '../images/main/icons/augusIcon.webp',
        name : 'Ignyt Beer Station',
        opinion: 'Excellent quality and atention',
    },

   
]


const cont = document.getElementById("main--carrusel-opinions")


userInfoList.forEach(item => {

   const article = document.createElement('article')
   const subContainer = document.createElement('div')
   const profile = document.createElement('img')
   const name = document.createElement('b')
   const description = document.createElement('p')

   profile.src = item.profile
   profile.alt = "image icon"
   name.textContent = item.name

   subContainer.appendChild(profile)
   subContainer.appendChild(name)

   description.textContent = item.opinion

   article.appendChild(subContainer)
   article.appendChild(description)
   cont.appendChild(article)
   
})
