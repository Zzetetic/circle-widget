   d=0
   X=0
   Y=0
   /*
   взять координаты верхнего левого угла в абсолютной системе
   перевести в относительную
   
   взять координаты нужной точки в относительной определить записать её как отличие от место позиционирование
   отнять от начальной точки в относительной увеличить в 2 раза прибавить это отличие
   
   */
  
	function fnShowProps(obj, objName){
    var result = "";
    for (var i in obj) // обращение к свойствам объекта по индексу
        result += objName + "." + i + " = " + obj[i] + "<br />\n";
    alert(result);
}
  

  function StartMove()
    {
	
    X = event.offsetX
	Y = event.offsetY
	d=1
    }
	function EndMove()
    {
	
	d=0
    }
 
 function Move()
    {	
		if (d==1){
		$("#pos_left").val((event.x-X)+"px")
		$("#pos_top").val((event.y-Y)+"px")
		
		event.srcElement.style.left = (event.x-X)+"px"
		event.srcElement.style.top = (event.y-Y)+"px"
		 
		}
    }
 //onmousedown = 'StartMove()' onmouseup = 'EndMove()' onmousemove='Move()'
  function noPX(withpx){
 
  return new Number(withpx.slice(0, withpx.indexOf("px")))
  }
  
  $(window).load(function(){
  //alert(Math.cos(60)) 
  /*$("html").click(function (event) {//cont_circ
 top_d=noPX($("#cont_circ").css("top"))
left_d=noPX($("#cont_circ").css("left"))
  //alert(event.offsetY+event.offsetX)
  top_c=event.offsetY-top_d
 left_c=event.offsetX-left_d
 //alert(event.offsetX)
 // fnShowProps($("#cont_circ"), "div")

  $("#pos_left").val(left_c+"px")
		$("#pos_top").val(top_c+"px")
  })*/
  
  

		areaTOcirc=new Array()
		areaTOcirc['area1']="circ_1"
		areaTOcirc['area2']="circ_2"
		areaTOcirc['area3']="circ_3"
		areaTOcirc['area4']="circ_4"
		areaTOcirc['area5']="circ_5"
		areaTOcirc['area6']="circ_6"
		areaTOcirc['area7']="circ_7"
		areaTOcirc['area8']="circ_8"
	
	 circle_coord=new Array()
	 circle_coord['go']=new Array()
	 circle_coord['back']=new Array()
	 
	 circle_coord['go']['circ_1']= new Array("31px","-113px") //new Array("left","top")
	 circle_coord['go']['circ_2']= new Array("-105px","25px")
	 circle_coord['go']['circ_3']= new Array("-107px","303px")
	 circle_coord['go']['circ_4']= new Array("361px","27px")
	 circle_coord['go']['circ_5']= new Array("364px","301px")
	 circle_coord['go']['circ_6']= new Array("299px","366px")
	 circle_coord['go']['circ_7']= new Array("297px","-123px")
	 circle_coord['go']['circ_8']= new Array("32px","366px")
	 
	            $('.area').hover(
					
				//253px
				//257px t
	                function () {
						circle_id=areaTOcirc[$(this).attr("id")]
						
						if (!circle_coord['back'][circle_id])
						{	
						circle_left=$('#'+circle_id).css("left")						
						circle_top=$('#'+circle_id).css("top")							
						circle_coord['back'][circle_id]= new Array(circle_left, circle_top)
						}
						
						//circle_left=circle_left.slice(0, circle_left.indexOf("px"))
						//circle_top=circle_top.slice(0, circle_top.indexOf("px"))
						//circle_left=new Number(circle_left)
						//circle_top=new Number(circle_top)
						
						//circle_left=circle_left+(-45)+"px"
						//circle_top=circle_top+(-45)+"px"
						circle_left=circle_coord['go'][circle_id][0]						
						circle_top=circle_coord['go'][circle_id][1]
	                   
						$('#'+circle_id).stop().animate({
	                    'left': circle_left,
	                    'top': circle_top
	                    }, 300);
	                },
						function () {
						
						circle_id=areaTOcirc[$(this).attr("id")]
						
						circle_left=circle_coord['back'][circle_id][0]
						circle_top=circle_coord['back'][circle_id][1]
						//alert(circle_id)
					
	                    $('#'+circle_id).stop().animate({
	                    'left': circle_left,
	                    'top': circle_top
	                    }, 300);
	                }
					
	            )   
		
		
		
		tec_circl="circ_1"
  $("#for").click(function () {
  circle_id=tec_circl
  
  if (!circle_coord['back'][circle_id])
						{	
						circle_left=$('#'+circle_id).css("left")						
						circle_top=$('#'+circle_id).css("top")							
						circle_coord['back'][circle_id]= new Array(circle_left, circle_top)
						}
  
  circle_left=circle_coord['go'][circle_id][0]						
	circle_top=circle_coord['go'][circle_id][1]
	                   
						$('#'+circle_id).stop().animate({
	                    'left': circle_left,
	                    'top': circle_top
	                    }, 300);
  
  })
  
   $("#back").click(function () {
   circle_id=tec_circl
   
   circle_left=circle_coord['back'][circle_id][0]
						circle_top=circle_coord['back'][circle_id][1]
						//alert(circle_id)
					
	                    $('#'+circle_id).stop().animate({
	                    'left': circle_left,
	                    'top': circle_top
	                    }, 300);
  
  })
		
		
		
		
		  $("#cont_circ").click(function (event) {//cont_circ
 //top_d=noPX($("#cont_circ").css("top"))
//left_d=noPX($("#cont_circ").css("left"))

  //alert(event.offsetY+event.offsetX)
  //top_c=event.offsetY-top_d
 //left_c=event.offsetX-left_d
 
  top_c=event.offsetY
 left_c=event.offsetX
  circle_id="circ_"+$("#work_circ").val()
  
 tec_circl=circle_id
 
 
 
 circle_left=$('#'+circle_id).css("left")						
circle_top=$('#'+circle_id).css("top")	
 
 
top_c=(top_c-256)/2+noPX(circle_top)
left_c=(left_c-253)/2+noPX(circle_left)

circle_coord['go'][circle_id]= new Array(left_c+"px", top_c+"px")
 //alert(event.offsetX)
 // fnShowProps($("#cont_circ"), "div")

  $("#pos_left").val(left_c+"px")
		$("#pos_top").val(top_c+"px")
  })
		
		
		
		
		
		
	      
	        });
