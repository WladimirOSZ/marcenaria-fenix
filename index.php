<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=yes">
    <link rel="icon" type="image/png" href="fotos/favicon.ico">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <script src="https://kit.fontawesome.com/5d3b493f11.js" crossorigin="anonymous"></script>
    
    
</head>

<body>
    <!-- plugins -->
    <script type="text/javascript">
    $(document).ready(function(){
        
        var largura = $(window).width();
        if(largura>1024){
            $("#contato").load("components/footer.html");
        }else{
            $("#contato").load("components/footersm.html");
        }
    });
    </script>
    <?php
    include('components/header.html');
    ?>
    <div class="container ">
        <h1 class="display-4 text-center m-5"><strong>Móveis</strong></h2>
    </div>
    <section class="container pt-4 rounded" id="imagens">
            <h1>
               Categoria:
                
               <div class="dropdown" id="dropdownButton">
                    <button type="button" class="btn btn-lg mt-4 btn-success dropdown-toggle" data-toggle="dropdown">
                    Geral
                    </button>
                    <div class="dropdown-menu wHover" >
                        <a class="dropdown-item active" href="#imagens">Geral</a>
                        <a class="dropdown-item" href="#imagens">Salas</a>
                        <a class="dropdown-item" href="#imagens">Cozinhas</a>
                        <a class="dropdown-item" href="#imagens">Quartos</a>
                        <a class="dropdown-item" href="#imagens">Banheiros</a>
                        <a class="dropdown-item" href="#imagens">Outros</a>
                    </div>
                </div>
                
            </h1>
            <!-------------------------------------imagens------------------------------>
            <div class="sectionImages" id="images">
                
                <?php 
                include('components/sectionImages/tudo.html');
                ?>
                
            </div>
            <button type="button" class="btn btn-success mt-3 buttonLoadMore" id="loadMoreButton">Carregar Mais</button>

            </section>

        <div class="container map mt-4 rounded " id="mapa">
            <h1>Mapa: <br><small>Confira como chegar na Marcenaria Fênix: </small></h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29428.73696017813!2d-45.203013477788076!3d-22.780513431914937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc5d1f7b2c901%3A0x11608a6a0f0437ca!2sMarcenaria%20F%C3%AAnix!5e0!3m2!1spt-BR!2sbr!4v1630359763004!5m2!1spt-BR!2sbr"
            style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <footer class="container-fluid bg-dark text-white mt-4 " id="contato">
        
        </footer>
        
        
        <!-- Modal Carousel-------problemas -->
        <div class="modal" id="modalCarousel" >
            <div class="modalContents" style="height: 100%;">
            
                 <div id="carouselImages" class="carousel slide"  >
                    <!-- close -->
                    <button type="button" class="close" data-dismiss="modal">&times;</button>

                    <!-- The slideshow -->
                    <div class="carousel-inner" >
                        <?php 
                            include('components/modalImages/tudo.html');
                        ?>
                    </div>

                    <!-- Left and right controls -->
                    <a class="carousel-control-prev d-none" href="#carouselImages" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselImages" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>



<script src="script.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>