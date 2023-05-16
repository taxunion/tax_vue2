import Vue from 'vue'
import {MainFunction} from './MainFunction.js'
Object.keys(MainFunction).forEach(function(key){
	Vue.prototype[key] = MainFunction[key]
})
import {User} from './User.js'
Object.keys(User).forEach(function(key){
	Vue.prototype[key] = User[key]
})
import {comMapping} from './comMapping.js'
Object.keys(comMapping).forEach(function(key){
	Vue.prototype[key] = comMapping[key]
})
