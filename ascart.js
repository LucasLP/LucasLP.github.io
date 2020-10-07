let conjuntoColorido = [
    [0  ,0  ,0  ],///black
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

let conjuntoGreyscale =[
    [0  ,0  ,0  ],///black
    [128,128,128],///gray
    [255,255,255],///white
]

let conjuntoCodigos = {
    1: ['{','}','(',')','[',']',';','.',',','x','&','!','$','%','+','-','=','#','@','*'],
    2: ['if','to','xp','&p','p=','i+','i-','to','do','as','in','is','rw','mv','*p','**','*i','or','py','cs','rb'],
    3: ['for','ind','aux','var','let','red','int','bit','new','out','try','num','ref','cmd','std','mem','git','and','xor','asm','jar','c++','map','use','set','ios'],
    4: ['then','here','goto','char','byte','bool','p[i]','x[k]','null','void','this','uint','true','else','base', 'long','lock','case','aloc','push','pull','enum','list'],
    5: ['class','throw','while','false','float','fixed','using','break','sbyte','ulong','event','stdin','maloc','catch','const','ilist','stack','queue','tuple','regex','mutex'],
    6: ['string','double','static','switch','return','typeof','object','stdout','sizeof','struct','delete','vector','memory','locale','iosfwd','limits','thread','future','random'],
    7: ['include','virtual','decimal','default','checked','finally','foreach','private','replace','virtual','extern','istream','ostream','numeric'],
    open: ['{','[','('],
    close: ['}',']',')'],
}

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

function k_means_clustering(data, clusters){
    let c = clusters.length;

	let distance = [];
	for(let i=1 ; i<c ; i++ ){distance[i]=0;}
	let g = 0;
	distance[0] = dist(clusters[0],data);
	for(let i=1 ; i<c ; i++ ){
        distance[i] = dist(clusters[i],data);
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

    if(model == 1)
        ascArt = model_1(ctx);
    if(model == 2)
        ascArt = model_2(ctx);
    if(model == 3)
        ascArt = model_3(ctx);
    
    var printArt = document.getElementById('ascArt')
    printArt.innerHTML = ascArt;
}

function model_1(ctx)
{
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
            var v =  k_means_clustering(pxl,conjuntoColorido);
            var character= '';
            if(v==1){
                if(rand()%2==0)
                    character+= '#';
                else
                    character+= 'W';
            }else if(v==2){
                if(rand()%2==0)
                    character+= '.';
                else
                    character+= ',';
            }else if(v==3){
                character+= ' ';
            }else if(v==4){
                if(rand()%2==0)
                    character+= '"';
                else
                    character+= '\'';
            }else if(v==5){
                if(rand()%2==0)
                    character+= '*';
                else
                    character+= ';';
            }else if(v==6){
                let v = rand()%3;
                if(v==0)
                    character+= '+';
                else if(v==1)
                    character+= '-';
                else if(v==2)
                    character+= '/';
            }else if(v==7){
                var c = String.fromCharCode(rand()%10+48);;
                character+= c;
            }else if(v==8){
                if(rand()%2==0)
                    character+= '{';
                else
                    character+= '}';
            }else if(v==9){
                if(rand()%2==0)
                    character+= '(';
                else
                    character+= ')';
            }else if(v==10){
                if(rand()%2==0)
                    character+= '[';
                else
                    character+= ']';
            }else if(v==11){
                if(rand()%2==0)
                    character+= '<';
                else
                    character+= '>';
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
                    character+= '@';
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
            ascArt+=validBackspace(character);
        }
        ascArt+='\n';
    }
    return ascArt;
}

function model_2(ctx)
{
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
            var v =  k_means_clustering(pxl,conjuntoColorido);
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
            ascArt+=validBackspace(character);
        }
        ascArt+='\n';
    }
    return ascArt;
    
}

function model_3(ctx)
{
    var matrizChar = new Array(height);
    for(var j= 0 ; j < height ; j++ )
    {
        matrizChar[j] = '';
        for(var i = 0 ; i < width ; i++)
        {
            var data = ctx.getImageData(i, j, 1, 1).data;
            var pxl = [ data[0], data[1], data[2] ];
            if(greyScale==true)
            {
                pxl = greyscalePixel(pxl);
            }
            var v =  k_means_clustering(pxl,conjuntoGreyscale);
            var character= '';
            if(v==1 || v==2)
            {
                character= '#';
            }
            else if(v==3)
            {
                character= ' ';
            }
            matrizChar[j] += character;
        }
    }
    var ascArt = '';
    for(var j= 0 ; j < height ; j++ )
    {
        var linha = matrizChar[j];
        var linhaResult = ''
        //validar linha
        for(var i = 0 ; i < width ; i++)
        {
            if(linha[i] == ' ')
            {
                linhaResult += ' ';
            }
            else
            {
                
                if(validaProxChar(linha,i))
                {
                    var escolha = rand()%10;
                    if(escolha==0)
                    {
                        linhaResult += gerarPadrao('open');
                    }
                    else if(escolha==1 || escolha==2)
                    {
                        i++;
                        linhaResult += gerarPadrao(2);
                    }
                    else
                    {
                        aux=1;
                        while(validaProxChar(linha,i+aux) && aux<6 && rand()%2==0)
                        {
                            aux++;
                        }
                        i+=aux;
                        console.log('\n',aux+1)
                        linhaResult += gerarPadrao(aux+1);
                    }
                }
                else
                {
                    linhaResult += gerarPadrao('close');
                }
            }
        }
        
        ascArt += linhaResult + '\n';
    }
    console.log(ascArt.length);
    return ascArt;
}



function validaProxChar(linha, i)
{
    if(i+1 >= width || linha[i+1] == ' ')
        return false;
    return true;
}


function gerarPadrao(num)
{
    var index = rand()% conjuntoCodigos[num].length;
    return conjuntoCodigos[num][index];
}