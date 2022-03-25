<?php


$counter= $_POST["counter"];
$category= $_POST["category"];
$counterMax= $_POST["counterMax"];
$pageToLoad=0;

// tudo, salas,cozinhas,banheiros,outros
function loadMore($category, $counter){
    $pageToLoad=false;
    if($category==0){
        $pageToLoad="tudo";
    }elseif($category==1){
        $pageToLoad="salas";
    }elseif($category==2){
        $pageToLoad="cozinhas";
    }elseif($category==3){
        $pageToLoad="quartos";
    }elseif($category==4){
        $pageToLoad="banheiros";
    }elseif($category==5){
        $pageToLoad="outros";
    }else{
        $pageToLoad=false;
    }
    if($pageToLoad!=false){
        $pageToLoad=$pageToLoad."$counter[$category].html";
    }
    return $pageToLoad;
}

if($counter[$category]<($counterMax[$category]+1)){
    $pageToLoad=loadMore($category,$counter);
    echo $pageToLoad;
}

?>
