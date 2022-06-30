// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import "trix"
import "@rails/actiontext"
import Rails from "@rails/ujs"
import  'bootstrap' 
import  './stylesheets/application.scss'

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("bootstrap");

var jQuery = require("jquery");
// import jQuery from "jquery";
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

Rails.start()

require("trix")
require("@rails/actiontext")