import Component from './Component.js'
import { render } from './Myreact.js'
let propCount=0
document.getElementById("btn-prop").addEventListener("click", () => {
    renderComponent()
    propCount++
})
function renderComponent() {
    render(Component,{propCount,buttonElem:document.getElementById("btn-count")},document.getElementById(("root")))
    render(Component,{propCount,buttonElem:document.getElementById("btn-count-2")},document.getElementById(("root-2")))
}


renderComponent()