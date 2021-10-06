let globalid = 0
let globalParent
const componentState = new Map()
/////using a closure to give the most updated parent to the use because when our use state is being called in many places and many times 
export function useState(initialState) {
    const id = globalid
    globalid++
    const parent=globalParent
    return (() => {
    const { cache } = componentState.get(parent)
    if (cache[id] === undefined) {
        cache[id]={value:typeof initialState==="function"?initialState():initialState}
    }
    // console.log(cache[id])
        const setState = state => {
        const {props,component}=componentState.get(parent)
        if (typeof state === "function") {
            cache[id].value=state(cache[id].value)
        }
        else {
            cache[id].value=state
        }
        render(component,props,parent)
     }


    return [cache[id].value,setState]
    })()
}




export function render(component, props, parent) {
    const state = componentState.get(parent) || { cache: [] }
    componentState.set(parent, { ...state, component, props })
    globalParent=parent
    const output = component(props)
    globalid=0
    parent.textContent = output
}