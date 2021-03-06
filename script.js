$(document).ready(function(){
    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Carousel
    var carouselLength = $('.carousel-item').length - 1;
    let counterLoad= new Array(5);
    let counterMax= new Array(5);

    for(var i=0;i<6;i++){
        counterLoad[i]=0;
    }
    
    counterMax[0]=1;
    counterMax[1]=1;
    counterMax[2]=2;
    counterMax[3]=2;
    counterMax[4]=0;
    counterMax[5]=1;
    
    $("#carouselImages").carousel({wrap: false}).on('slide.bs.carousel', function (e) {
        carouselLength = $('.carousel-item').length - 1;
        if (e.to == 0) {
            $('.carousel-control-prev').addClass('d-none');
            $('.carousel-control-next').removeClass('d-none');
            $('.carousel-control-next-icon').removeClass('addMoreIcon');
        }else if (e.to == carouselLength) {
            $('.carousel-control-prev').removeClass('d-none');
            let category=getCategory();
            if(counterLoad[category]<counterMax[category]){
                $('.carousel-control-next-icon').addClass('addMoreIcon');
            }else{
                $('.carousel-control-next').addClass('d-none');
                $('#loadMoreButton').addClass('d-none');
            }
        }else {
            $('.carousel-control-prev').removeClass('d-none');
            $('.carousel-control-next').removeClass('d-none');
            $('.carousel-control-next-icon').removeClass('addMoreIcon');
        }
    })

    
        
    $(".carousel-control-next").click(function(){
        if($('.carousel-control-next').find('span.addMoreIcon').length !== 0){
            addMore();
        }
    });
    $("#loadMoreButton").click(function(){
        addMore();
    });
    function addMore(){
        //traz a categoria
        let category = getCategory();
        let pageToLoad=false;
        switch (category){
            case 0:
                pageToLoad='tudo';
                break;
            case 1:
                pageToLoad="salas";
                break;
            case 2:
                pageToLoad="cozinhas";
                break;
            case 3:
                pageToLoad="quartos";
                break;
            case 4:
                pageToLoad="banheiros";
                break;
            case 5:
                pageToLoad="outros";
                break;
            default:
                pageToLoad=false;
        }
        pageToLoad=pageToLoad+counterLoad[category]+".html";
        
        if(pageToLoad){
            var content;
            $.get("components/modalImages/"+pageToLoad, function(getData){
                content= getData;
                $('.carousel-inner').append(content);
                $('.carousel-control-next').removeClass('d-none');
                carouselLength = $('.carousel-item').length - 1;
                $('.carousel-control-next-icon').removeClass('addMoreIcon');
                $("#carouselImages").carousel("next");
            });
            $.get("components/sectionImages/"+pageToLoad, function(getData){
                content= getData;
                $('#images').append(content);
                
            });
            counterLoad[category]++;
            if(counterLoad[category]>=counterMax[category]){
                $('#loadMoreButton').addClass('d-none');
            }
        }
    }

    function getCategory(){
        let categoryNumber;
        $("#dropdownButton a").each(function(){
            categoryNumber = $( "#dropdownButton a" ).index( this );
            if ($( this ).hasClass( "active" )) {
                return false;
            }
        });
        return categoryNumber;
    }
    
    
    // select category
    $( "#dropdownNav a" ).click(function() {
        var index = $( "#dropdownNav a" ).index( this );
        if ( !$( this ).hasClass( "active" ) ) {
            selectCategory(index);
        }
    });
    $( "#dropdownButton a" ).click(function() {
        var index = $( "#dropdownButton a" ).index( this );
        if ( !$( this ).hasClass( "active" ) ) {
            selectCategory(index);
        }
    });

    
    function selectCategory(index){
        $("#dropdownNav a").removeClass("active");
        $("#dropdownButton a").removeClass("active");
        $(".carousel-inner").empty();
        $("#images").empty();
    
        if(index==0){ //Fazer os includes das galerias, lembra de fazer um loading tamb??m
            $(".carousel-inner").load("components/modalImages/tudo.html");
            $("#images").load("components/sectionImages/tudo.html", function() {
                updateVariables(index);
            });

            $("#dropdownButton button").text("Geral");
            
        }else if(index==1){
            $(".carousel-inner").load("components/modalImages/salas.html");
            $("#images").load("components/sectionImages/salas.html", function() {
                updateVariables(index);
            });

            $("#dropdownButton button").text("Salas");
            
        }else if(index==2){
            $(".carousel-inner").load("components/modalImages/cozinhas.html");
            $("#images").load("components/sectionImages/cozinhas.html", function() {
                updateVariables(index);
            });
            
            $("#dropdownButton button").text("Cozinhas");
        }else if(index==3){
            $(".carousel-inner").load("components/modalImages/quartos.html");
            $("#images").load("components/sectionImages/quartos.html", function() {
                updateVariables(index);
            });

            $("#dropdownButton button").text("Quartos");
        }else if(index==4){
            $(".carousel-inner").load("components/modalImages/banheiros.html");
            $("#images").load("components/sectionImages/banheiros.html", function() {
                updateVariables(index);
            });
            $("#dropdownButton button").text("Banheiros");
            // por enquanto s?? tem uma p??gina dos banheiros, ent??o tem que remover o bot??o de adicionar mais ao chamar
            $('#loadMoreButton').addClass('d-none');
        }else{
            $(".carousel-inner").load("components/modalImages/outros.html");
            $("#images").load("components/sectionImages/outros.html", function() {
                updateVariables(index);
            });
            $("#dropdownButton button").text("Outros");
            
        }
        
    }
    function updateVariables(index){
  
        counterLoad[index]=0;
        $('.carousel-control-next').removeClass('d-none');
        carouselLength = $('.carousel-item').length - 1;
        $( "#dropdownButton a" ).eq(index).addClass('active');
        $( "#dropdownNav a" ).eq(index).addClass('active');
    }
    
    
});





function selectImage(elmnt){
    var index = $( ".imgGaleria" ).index( elmnt );
    $("#carouselImages").carousel(index);
    $("#carouselImages").carousel("pause");
};
