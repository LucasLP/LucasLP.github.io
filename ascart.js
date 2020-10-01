
function dist(a, b){
	return Math.sqrt(Math.pow(Math.abs(a[0]-b[0]),2)+
					Math.pow(Math.abs(a[1]-b[1]),2)+
					Math.pow(Math.abs(a[2]-b[2]),2));
}

function rand(){
	return Math.floor(Math.random() * 100);
}

function greyscalePixel(data)
{
    var med = (data[0]+data[1]+data[2])/3;
    return [med,med,med];
}

function k_means_clustering(data){
    let c = 15;
	let m = [[0  ,0  ,0  ],///black
            [128,128,128],///gray
            [255,255,255],///white

            [255,0  ,0  ],///red
            [128,0  ,0  ],///dark red
            [0  ,255,0  ],///green
            [0  ,128,0  ],///dark green
            [0  ,0  ,255],///blue
            [0  ,0  ,128],///dark blue

            [255,255,0  ],///yellow
            [128,128,0  ],///dark yellow

            [255,0  ,255],///pink
            [128,0  ,128],///dark pink

            [0  ,255,255], ///cyan
            [0  ,128,128] ///dark cyan
            ];

	let distance = [];
	for(let i=1 ; i<c ; i++ ){distance[i]=0;}
	let g = 0;
	distance[0] = dist(m[0],data);
	for(let i=1 ; i<c ; i++ ){
        distance[i] = dist(m[i],data);
        if(distance[i]<distance[g])g=i;
	}
	return g+1;
}

function validBackspace(c)
{
    if(c == '\b')
        return ' ';
    return c;
}

function imageIsLoaded() { 
    width	  = parseFloat(document.getElementById('inputWidth').value);
    height	  = parseFloat(document.getElementById('inputHeight').value);
    model	  = parseFloat(document.getElementById('inputModel').value);
    greyScale = $('.inputCheckGreyscale:checked').val() == 'on';

    console.log(greyScale);

    var mycanvas = document.getElementById('mycanvas');

    mycanvas.width = width;
    mycanvas.height = height
    mycanvas.style.display = "none";
    var ctx = mycanvas.getContext('2d');
    var img = new Image();   // Create new img element
    img.onload = function() {
        ctx.drawImage(img, 0,0,width, height);
        gerarAscArt(ctx);
    };
    img.src = this.src;
}



function gerarAscArt(ctx){
    var ascArt = '';
    for(var j= 0 ; j < height ; j++ )
    {
        for(var i = 0 ; i < width ; i++)
        {
            var data = ctx.getImageData(i, j, 1, 1).data;
            var pxl = [ data[0], data[1], data[2] ];
            if(greyScale==true)
            {
                pxl = greyscalePixel(pxl);
            }
            var v =  k_means_clustering(pxl);
            var char = ' ';
            if(model == 1)
                char = model_1(v);
            if(model == 2)
                char = model_2(v);
            ascArt+=validBackspace(char);
        }
        ascArt+='\n';
    }
    
    var printArt = document.getElementById('ascArt')
    printArt.innerHTML = ascArt;

}

function model_1(v)
{
    var character= '';
    if(v==1){
        if(rand()%2==0)
            character+= '#';
        else
            character+= 'W';
    }else if(v==2){
        //character+= '.';
        if(rand()%2==0)
            character+= '.';
        else
            character+= ',';
    }else if(v==3){
        character+= ' ';
    }else if(v==4){
        //character+= '$';
        if(rand()%2==0)
            character+= '"';
        else
            character+= '\'';
    }else if(v==5){
        //character+= '*';
        if(rand()%2==0)
            character+= '*';
        else
            character+= ';';
    }else if(v==6){
        //character+= '+';

        let v = rand()%3;
        if(v==0)
            character+= '+';
        else if(v==1)
            character+= '-';
        else if(v==2)
            character+= '/';

    }else if(v==7){
        //character+= '-';
        var c = String.fromCharCode(rand()%10+48);;
        character+= c;
    }else if(v==8){
        //character+= '{';
        if(rand()%2==0)
            character+= '{';
        else
            character+= '}';
    }else if(v==9){
        //character+= '}';
        if(rand()%2==0)
            character+= '(';
        else
            character+= ')';
    }else if(v==10){
        //character+= '[';
        if(rand()%2==0)
            character+= '[';
        else
            character+= ']';
    }else if(v==11){
        //character+= ']';
        if(rand()%2==0)
            character+= '<';
        else
            character+= '>';
    }else if(v==12){
        //character+= '&';
        if(rand()%2==0)
            character+= '&';
        else
            character+= '%';
    }else if(v==13){
        //character+= 'e';
        if(rand()%2==0)
            character+= '$';
        else
            character+= '!';
    }else if(v==14){
        //character+= '@';
        if(rand()%2==0)
            character+= '@';
        else
            character+= 'a';
    }else if(v==15){
        //character+= 'a';
        var v = rand()%3;
        if(v==0){
        //    character+= '#';
            character+= 'h';
        } else if(v==1){
            character+= 'u';
        }else{
            character+= 'e';
        }
    }else{
        character+= ' ';
    }
    return character;
}

function model_2(v)
{
    var character= '';
    if(v==1){
        if(rand()%2==0)
            character+= 'w';
        else
            character+= 'W';
    }else if(v==2){
        if(rand()%2==0)
            character+= 'x';
        else
            character+= 'v';
    }else if(v==3){
        character+= ' ';
    }else if(v==4){
        if(rand()%2==0)
            character+= '"';
        else
            character+= 'o';
    }else if(v==5){
        if(rand()%2==0)
            character+= 'r';
        else
            character+= 'f';
    }else if(v==6){
        let v = rand()%3;
        if(v==0)
            character+= 'k';
        else if(v==1)
            character+= 'u';
        else if(v==2)
            character+= 'e';

    }else if(v==7){
        var c = String.fromCharCode(rand()%10+48);;
        character+= c;
    }else if(v==8){
        if(rand()%2==0)
            character+= 't';
        else
            character+= 'T';
    }else if(v==9){
        if(rand()%2==0)
            character+= 'x';
        else
            character+= 'X';
    }else if(v==10){
        if(rand()%2==0)
            character+= '[';
        else
            character+= ']';
    }else if(v==11){
        if(rand()%2==0)
            character+= 'o';
        else
            character+= 't';
    }else if(v==12){
        if(rand()%2==0)
            character+= '&';
        else
            character+= '%';
    }else if(v==13){
        if(rand()%2==0)
            character+= '$';
        else
            character+= '!';
    }else if(v==14){
        if(rand()%2==0)
            character+= 'q';
        else
            character+= 'a';
    }else if(v==15){
        var v = rand()%3;
        if(v==0){
            character+= 'h';
        } else if(v==1){
            character+= 'u';
        }else{
            character+= 'e';
        }
    }else{
        character+= ' ';
    }
    return character;
}
