import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.scss"
import { store } from "./store/configureStore"
import { Provider } from "react-redux"


var mountNode = document.getElementById('mi-casa')
ReactDOM.render(<Provider store={ store }><App /></Provider>, mountNode)