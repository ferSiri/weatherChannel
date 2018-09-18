$("input[type='text']").keypress(function(event){
    if(event.key == "Enter") {
      $('h2').text($(this).val())
      $('#container').empty()
      $('#container').prepend('<span>Trabajando...</span>')
  	$.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+(encodeURI($(this).val()))+'&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es',
      success: function(data){
        $('#container').append('<p>Temperatura : '+data.main.temp+'°</p>')
        $('#container').append('<p>Temperatura máxima : '+data.main.temp_max+'°</p>')
        $('#container').append('<p>Temperatura mínima : '+data.main.temp_min+'°</p>')
        $('#container').append('<p>Descripción : '+data.weather["0"].description+'</p>')
        $('#container').append('<p>Velocidad del viento : '+data.wind.speed+' km/h</p>')
        $('#container').append('<p>Amanecer : '+ (new Date(data.sys.sunrise * 1000)) +'</p>')
        $('#container').append('<p>Atardecer : '+ (new Date(data.sys.sunset * 1000)) +'</p>')
        if(data.weather["0"].main=='Clouds'){
          $('body').css("background-image",'url(https://www.surfertoday.com/images/stories/clouds.jpg)')
        }else if(data.weather["0"].main=='Clear'){
          $('body').css("background-image",'url(https://ak2.picdn.net/shutterstock/videos/3422942/thumb/1.jpg)')
        }else if(data.weather["0"].main=='Thunderstorm'){
          $('body').css("background-image",'url(https://highvelder.co.za/wp-content/uploads/sites/93/2016/11/175572438.jpg)')
        }else if(data.weather["0"].main=='Drizzle'){
          $('body').css("background-image",'url(https://www.metoffice.gov.uk/binaries/content/gallery/mohippo/images/migrated-image/d/light_rain.jpg)')
        }else if(data.weather["0"].main=='Rain'){
          $('body').css("background-image",'url(http://www.fggam.org/wp-content/uploads/2015/08/RAIN.jpg)')
        }else if(data.weather["0"].main=='Snow'){
          $('body').css("background-image",'url(https://steemitimages.com/DQmVWP6ZJDrUthnvdQcEsLfojtfKsFRQvw2tYvsQvotwjSy/SNOW.jpg)')
        }
        $('body').css("background-repeat","no-repeat").css("background-size","100%")
        $('span').remove()

      }
})
          	
          	
    }})