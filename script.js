$('[data-toggle="tooltip"]').tooltip();

// Carousel
var carouselLength = $('.carousel-item').length - 1;
let counterLoad = new Array(5);
let counterMax = new Array(5);
// tooltip
const categoriesNames = ['geral', 'salas', 'cozinhas', 'quartos', 'banheiros', 'outros'];
for (var i = 0; i < 6; i++) {
    counterLoad[categoriesNames[i]] = 0;
}
counterMax[0] = 1;
counterMax[1] = 1;
counterMax[2] = 2;
counterMax[3] = 2;
counterMax[4] = 0;
counterMax[5] = 1;

const categories = {
    'geral': {
        counterMax: 1,
        categoryNumber: 0
    },
    'salas': {
        counterMax: 1,
        categoryNumber: 1
    },
    'cozinhas': {
        counterMax: 2,
        categoryNumber: 2
    },
    'quartos': {
        counterMax: 2,
        categoryNumber: 3
    },
    'banheiros': {
        counterMax: 0,
        categoryNumber: 4
    },
    'outros': {
        counterMax: 1,
        categoryNumber: 5
    }
}

function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function selectCategory(category) {
    $("#dropdownNav a").removeClass("active");
    $("#dropdownButton a").removeClass("active");
    $(".carousel-inner").empty();
    $("#images").empty();

    $(".carousel-inner").load(`components/modalImages/${category}.html`)
    // check if this function after this thing is really needed
    $("#images").load(`components/sectionImages/${category}.html`)
    if (category === 'banheiros') $('#loadMoreButton').addClass('d-none')
}

function updateVariables(elementSelected) {
    const category = $(elementSelected).text().toLowerCase();
    counterLoad[category] = 0;
    $('.carousel-control-next').removeClass('d-none');
    carouselLength = $('.carousel-item').length - 1;
    elementSelected.classList.add('active');
    $('#dropdownButtonTitle').text(upperCaseFirstLetter(category));
}

function addMore() {
    const category = getCategory();
    const pageToLoad = category + counterLoad[category] + ".html";

    if (pageToLoad) {
        $.get("components/modalImages/" + pageToLoad, function (content) {
            $('.carousel-inner').append(content);
            $('.carousel-control-next').removeClass('d-none');
            carouselLength = $('.carousel-item').length - 1;
            $('.carousel-control-next-icon').removeClass('addMoreIcon');
            $("#carouselImages").carousel("next");
        });
        $.get("components/sectionImages/" + pageToLoad, function (content) {
            $('#images').append(content);
        });
        counterLoad[category]++;
        if (counterLoad[category] >= counterMax[category]) {
            $('#loadMoreButton').addClass('d-none');
        }
    }
}

function getCategory() {
    return $("#dropdownButton a.active").text().toLowerCase();
}

$(document).ready(function () {
    $("#carouselImages").carousel({ wrap: false }).on('slide.bs.carousel', function (e) {
        carouselLength = $('.carousel-item').length - 1;
        if (e.to == 0) {
            $('.carousel-control-prev').addClass('d-none');
            $('.carousel-control-next').removeClass('d-none');
            $('.carousel-control-next-icon').removeClass('addMoreIcon');
        } else if (e.to == carouselLength) {
            $('.carousel-control-prev').removeClass('d-none');
            let category = getCategory();
            if (counterLoad[category] < counterMax[category]) {
                $('.carousel-control-next-icon').addClass('addMoreIcon');
            } else {
                $('.carousel-control-next').addClass('d-none');
                $('#loadMoreButton').addClass('d-none');
            }
        } else {
            $('.carousel-control-prev').removeClass('d-none');
            $('.carousel-control-next').removeClass('d-none');
            $('.carousel-control-next-icon').removeClass('addMoreIcon');
        }
    })

    $(".carousel-control-next").click(function () {
        if ($('.carousel-control-next').find('span.addMoreIcon').length !== 0) {
            addMore();
        }
    });


    // select category
    $("#dropdownNav a").click(function () {
        const category = $(this).text().toLowerCase();
        selectCategory(category)
        updateVariables(this)
    });
    $("#dropdownButton a").click(function () {
        const category = $(this).text().toLowerCase();
        selectCategory(category)
        updateVariables(this)
    });
});

function selectImage(elmnt) {
    var index = $(".imgGaleria").index(elmnt);
    $("#carouselImages").carousel(index);
    $("#carouselImages").carousel("pause");
};
