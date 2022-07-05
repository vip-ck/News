// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import "trix"
import "@rails/actiontext"
import Rails from "@rails/ujs"
import  'bootstrap' 
import { Tooltip, Popover } from "bootstrap"



require("@rails/activestorage").start()
require("bootstrap")
require("trix")
require("@rails/actiontext")
require("@popperjs/core")
require("../stylesheets/application.scss")


Rails.start()


document.addEventListener("turbolinks:load", () => {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl)
    })

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new Popover(popoverTriggerEl)
    })
})