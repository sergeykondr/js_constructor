import {model} from './model'
//import {template} from './templates'
import './styles/main.css'

const site = document.querySelector('#site')

model.forEach(block => {
    site.insertAdjacentHTML('beforeend', block.toHTML())
    //console.log(block)
    // const generate = template[block.type]
    // if (generate) {
    //     const html = generate(block)
    //     site.insertAdjacentHTML('beforeend', html)
    // }
})