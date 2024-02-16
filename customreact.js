function customRender(reactElement, container) {

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const propName in reactElement.props) {
        if (propName === "children") continue
        
        if (propName === "style") {
            for (const styleName in reactElement.props.style) {
                domElement.style[styleName] = reactElement.props.style[styleName]
            }
            continue
        }
        domElement.setAttribute(propName, reactElement.props[propName])
    }


    container.appendChild(domElement)
}

const anotherElement = {
    type: "h1",
    props: {
        style: {
            color: "blue",
            backgroundColor: "black"
        }
    },
    children: "Hello World"
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target:"_blank",
    },
    children: "Click me to Visit Google"
}


const mainContainer = document.getElementById("root")


customRender(reactElement, mainContainer)
customRender(anotherElement, mainContainer)
