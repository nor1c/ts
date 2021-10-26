// By default (as is to be expected of good JS code) TypeScript expects you to declare (i.e. use var somewhere) before you use a variable
$('.awesome').show() // Error can't find name `$`

// As a quick fix you can tell TypeScript that there is indeed something called $:
declare var $: any
$('.awesome').show() // Okay!

// If you want you can build on this basic definition and provide more information to help protect you from errors:
declare var $: {
  (selector: string): any
}
$('.awesome').show() // Okay!
$(123).show() // Error: selector needs to be a string