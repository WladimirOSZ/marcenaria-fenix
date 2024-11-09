$('[data-toggle="tooltip"]').tooltip();

let carouselLength = $('.carousel-item').length - 1;
const categoriesNames = ['geral', 'salas', 'cozinhas', 'quartos', 'banheiros', 'outros'];

const modalImages = {
    'geral': {
        0: ['1', '6', '2', '3', '20', '4', '21', '5', '8', '9'],
        1: ['7', '10', '11', '12', '13', '18', '15', '19', '17', '14'],
        2: ['22', '23', '24', '25', '26', '27', '28', '29']
    },
    'salas': {
        0: ['4', '8', '2', '3', '5', '11', '12', '14'],
        1: ['6', '9', '10', '1', '7', '13']
    },
    'cozinhas': {
        0: ['16', '17', '3', '4', '5', '6', '7', '8', '18', '20'],
        1: ['9', '10', '15', '11', '12', '13', '19', '21', '22'],
        2: ['29', '26', '23', '24', '25', '27', '28']
    },
    'quartos': {
        0: ['31', '32', '18', '19', '20', '8', '9', '10', '15', '16'],
        1: ['11', '12', '13', '14', '2', '3', '4', '5', '6', '7', '33'],
        2: ['17', '21', '22', '23', '24', '25', '26', '27', '28']
    },
    'banheiros': {
        0: ['6', '9', '8', '7', '4', '3', '2', '1', '5'],
    },
    'outros': {
        0: ['1', '10', '3', '4', '9', '2', '11', '5', '24'],
        1: ['12', '18', '14', '13', '15', '16', '17', '19', '20', '21', '22', '23', '25']
    }
}

const categories = {
    'geral': {
        counterMax: 1,
        categoryNumber: 0,
        counterLoad: 0
    },
    'salas': {
        counterMax: 1,
        categoryNumber: 1,
        counterLoad: 0
    },
    'cozinhas': {
        counterMax: 2,
        categoryNumber: 2,
        counterLoad: 0
    },
    'quartos': {
        counterMax: 2,
        categoryNumber: 3,
        counterLoad: 0
    },
    'banheiros': {
        counterMax: 0,
        categoryNumber: 4,
        counterLoad: 0
    },
    'outros': {
        counterMax: 1,
        categoryNumber: 5,
        counterLoad: 0
    }
}

const loadModalImages = (categoryLabel) => {
    const category = categories[categoryLabel];
    modalImages[categoryLabel][category.counterLoad].forEach((image, idx) => {
        const isActive = category.counterLoad === 0 && idx === 0 ? 'active' : '';
        $('#carousel').append(`
            <div class="carousel-item ${isActive}">
                <img src="fotos/moveis/${categoryLabel}/${categoryLabel} (${image}).jpg" class="imgModal mx-auto">
            </div>
        `)
    })
}

function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function selectCategory(categoryLabel) {
    $("#dropdownNav a").removeClass("active");
    $("#dropdownButton a").removeClass("active");
    $("#carousel").empty();
    $("#images").empty();

    const category = categories[categoryLabel];
    category.counterLoad = 0;
    loadModalImages(categoryLabel)
    // check if this function after this thing is really needed
    $("#images").load(`components/sectionImages/${categoryLabel}.html`)
    if (categoryLabel !== 'banheiros') $('#loadMoreButton').removeClass('d-none')
    if (categoryLabel === 'banheiros') $('#loadMoreButton').addClass('d-none')
}

function updateVariables(elementSelected) {
    const category = $(elementSelected).text().toLowerCase();
    categories[category].counterLoad = 0;
    $('.carousel-control-next').removeClass('d-none');
    carouselLength = $('.carousel-item').length - 1;
    elementSelected.classList.add('active');
    $('#dropdownButtonTitle').text(upperCaseFirstLetter(category));
}

function addMore() {
    const categoryLabel = getCategory();
    const category = categories[categoryLabel];
    const pageToLoad = categoryLabel + category.counterLoad + ".html";

    if (pageToLoad) {
        category.counterLoad++;
        loadModalImages(categoryLabel)
        $('.carousel-control-next').removeClass('d-none');
        carouselLength = $('.carousel-item').length - 1;
        $('.carousel-control-next-icon').removeClass('addMoreIcon');
        $("#carouselImages").carousel("next");
        $.get("components/sectionImages/" + pageToLoad, function (content) {
            $('#images').append(content);
        });

        if (category.counterLoad >= category.counterMax) {
            $('#loadMoreButton').addClass('d-none');
        }
    }
}

function getCategory() {
    return $("#dropdownButton a.active").text().toLowerCase();
}

$(document).ready(function () {
    $("#images").load("components/sectionImages/geral.html");
    loadModalImages('geral')

    $("#carouselImages").carousel({ wrap: false }).on('slide.bs.carousel', function (e) {
        carouselLength = $('.carousel-item').length - 1;
        if (e.to == 0) {
            $('.carousel-control-prev').addClass('d-none');
            $('.carousel-control-next').removeClass('d-none');
            $('.carousel-control-next-icon').removeClass('addMoreIcon');
        } else if (e.to == carouselLength) {
            $('.carousel-control-prev').removeClass('d-none');
            const categoryLabel = getCategory();
            const category = categories[categoryLabel];
            if (category.counterLoad < category.counterMax) {
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
