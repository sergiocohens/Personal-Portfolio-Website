import choralPic from './choral.jpeg'
import greenlistPic from './greenlist.png'
import vinyleffectPic from './nuncaestuveaqui.jpg'

const project1 = {
  name: 'Choral',
  image: choralPic,
  body: 'A remote musical playground',
  github: 'https://github.com/PeterFiorentino/Choral',
  heroku: 'https://choral.herokuapp.com'
}
const project2 = {
  name: 'Greenlist',
  image: greenlistPic,
  body: 'Eco-friendly materials made easy for designers',
  github: 'https://github.com/joseph-p-pasaoa/greenlist__FSWeb',
  heroku: 'https://greenlist-registry.herokuapp.com'
}

const project3 = {
  name: 'vinyl-effect',
  image: vinyleffectPic,
  body: 'Music player app with seamless song transitions',
  github: 'https://github.com/cohen-salama/vinyl-effect',
  heroku: 'https://nunca-estuve-aqui.herokuapp.com/'
}

const projects = [project1, project2, project3]

export default projects
