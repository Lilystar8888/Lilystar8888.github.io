$(document).ready(function(){$('td').html(function(index,value){return value.replace(/(\d+)/g,'<span>$1</span>')})})