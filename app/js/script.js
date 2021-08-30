const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')) //open Hamburger menu
    {
        header.classList.remove('open');

        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
         });       
    }
    else // close hamburger menu
    {
        header.classList.add('open');
        
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});

const home = document.querySelector('#home');
const aboutme = document.querySelector('#aboutme');
const skills = document.querySelector('#skills');
const contact = document.querySelector('#contact');

home.addEventListener('click', function(){
    console.log('click home');

    if(header.classList.contains('open')) //open Hamburger menu
    {
        fadeElems.forEach(function(element){
            header.classList.remove('open');
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });  
    }

    else // close hamburger menu
    {       
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
  
});

aboutme.addEventListener('click', function(){
    console.log('click aboutme');

    if(header.classList.contains('open')) //open Hamburger menu
    {
        fadeElems.forEach(function(element){
            header.classList.remove('open');
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });  
    }

    else // close hamburger menu
    {       
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
  
});

skills.addEventListener('click', function(){
    console.log('click skills');

    if(header.classList.contains('open')) //open Hamburger menu
    {
        fadeElems.forEach(function(element){
            header.classList.remove('open');
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });  
    }

    else // close hamburger menu
    {       
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
  
});

contact.addEventListener('click', function(){
    console.log('click contact');

    if(header.classList.contains('open')) //open Hamburger menu
    {
        fadeElems.forEach(function(element){
            header.classList.remove('open');
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });  
    }

    else // close hamburger menu
    {       
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
  
});
