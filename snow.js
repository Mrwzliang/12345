var snow = { 
  info: { 
    top: 0 , 
    left: 0 , 
    zIndex: 500 , 
    number: 70
   }, 
  down: function () { var f =窗口.innerWidth; var g =窗口.innerHeight; var d =文档.createElement( "画布" );     d.style.position = "固定" ;     d.style.pointerEvents = "无" ;     d.style.top = snow.info.top + "px" ;     d.style.left = snow.info.left + "px" ;     d.style.zIndex = snow.info.zIndex;     d.宽度 = f;     d. 高度 = g; 文件.body.appendChild(d); 变量c = []; 对于(变量
    
    
    







    
    
    a = 0 ; 一个<snow.info.number; a++) { 
      c.push({ 
        x: Math .random() * f, 
        y: Math .random() * g, 
        r: Math .random() * 4 + 1 , 
        n: Math .random() * 70
       } ) 
    } var b = d.getContext( "2d" ); 变量e = 0 ;     设置间隔（函数（
    
    
) { 
        b.clearRect( 0 , 0 , f, g); 
        b.fillStyle = "rgba(255, 255, 255, 0.6)" ; 
        b.shadowBlur = 5 ; 
        b.shadowColor = "rgba(255, 255, 255, 0.9)" ; 
        b.beginPath(); for ( var j = 0 ; j < 70 ; j++) { var h = c[j];           b.moveTo(hx, hy);           b.arc(hx, hy, hr, 0 , Math .PI * 2 , 0 )         }         b.fill();
        
          




        e += 0.01 ; for ( var j = 0 ; j < 70 ; j++) { var h = c[j];           hy +=数学.cos(e + hn) + hr / 2 ;           hx +=数学.sin(e) * 2 ; 如果(hx > f + 5 || hx < -5 || hy > g) {             c[j] = j % 3 > 0 ? {               x:数学.random() * f,               y: -10 ,               r: hr,               n: hn
        
          


          





            } :数学.sin(e) > 0 ? { 
              x: -5 , 
              y: Math .random() * g, 
              r: hr, 
              n: hn 
            } : { 
              x: f + 5 , 
              y: Math .random() * g, 
              r: hr, 
              n: hn 
            } 
          } 
        } 
      }, 15 )   } }; // yilia-plus主题已经集成了，可以直接用