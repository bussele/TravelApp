import { updateUI } from "./js/updateUI"
import { postInput } from "./js/postData"
import { dateDiff } from "./js/dateHandler"
import { checkCountry } from "./js/countryCheck"
import { handleSubmit } from "./js/eventHandler"

import './styles/style.scss'
import './styles/header.scss'
import './styles/post.scss'

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate').addEventListener('click', handleSubmit);
})

export {
    updateUI,
    postInput,
    dateDiff,
    checkCountry,
    handleSubmit
}
