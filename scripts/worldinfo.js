$.getScript('scripts/widata.js', function () {

    const state = {
        selectedItems: {}
    };

    const listSelectors = {
        grid2: '#grid2-list',
        grid3: '#grid3-list'
    };

    const isObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);

    const createCheckbox = (item, category) => {
        const checkbox = $('<input type="checkbox">')
            .addClass("checkbox")
            .on("change", function () {
                updateSelectedItems(this, item, category);
            });

        if (state.selectedItems[category]?.includes(item)) {
            checkbox.prop("checked", true);
        }

        return checkbox;
    };

    const createCategoryTitle = (text) => {
        return $("<li>")
            .addClass("category-title")
            .text(text);
    };

    const createLabel = (item, category) => {
        const itemName = (item instanceof Attendant) ? item.name : item;
        return $('<label>').text(itemName).prepend(createCheckbox(item, category));
    };


    const createListItem = (item, category) => {
        const listItem = $("<li>").append(createLabel(item, category));
        return listItem;
    };

    const populateList = (data, category) => {
        const list = $("#list");
        list.empty();

        if (isObject(data[category])) {
            for (let key in data[category]) {
                if (Array.isArray(data[category][key])) {
                    const categoryTitle = createCategoryTitle(key);
                    list.append(categoryTitle);
                    data[category][key].forEach((item) => {
                        const listItem = createListItem(item, category);
                        list.append(listItem);
                    });
                }
            }
        } else if (category === 'attendants') {
            data.attendants.forEach((item) => {
                const listItem = createListItem(item, category);
                list.append(listItem);
            });
        } else {
            list.append($("<li>").text("No data available for this category."));
        }
        $("#list-title").text(category.charAt(0).toUpperCase() + category.slice(1));
    };




    const updateSelectedItems = (checkbox, item, category) => {
        const selectedItemsList = $("#selected-items");

        if (!state.selectedItems[category]) {
            state.selectedItems[category] = [];
        }

        if (checkbox.checked) {
            if (!state.selectedItems[category].includes(item)) {
                state.selectedItems[category].push(item);
                const listItem = $("<li>").text(item);
                selectedItemsList.append(listItem);
            }
        } else {
            const index = state.selectedItems[category].indexOf(item);
            if (index > -1) {
                state.selectedItems[category].splice(index, 1);
                selectedItemsList.find(`:contains(${item})`).remove();
            }
        }

        updateGrid3();
        if (category === 'attendants') {
            createMaterialsList();
        }
    };

    const getItemCategory = (item, category) => {
        if (item instanceof Attendant) {
            return item.village;
        } else {
            const keys = Object.keys;
        }
    };

    const updateGrid3 = () => {
        const grid3 = $(listSelectors.grid3);
        grid3.empty();

        for (let category in state.selectedItems) {
            const categoryTitle = $("<li>").addClass("category-title").text(category);
            grid3.append(categoryTitle);

            state.selectedItems[category].forEach((item) => {
                const itemName = item instanceof Attendant ? item.name : item;
                const listItem = $("<li>").text(itemName);
                grid3.append(listItem);
            });
        }
    };


    (async () => {
        const data = await loadListData();

        $("button[data-category]").on("click", function () {
            const category = $(this).data("category");
            populateList(data, category);
            updateGrid3();
        });

        $("#print-button").on("click", function () {
            const printContents = $("#selected-items").html();
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = `<ul style="font-size: 20px;">${printContents}</ul>`;
            window.print();
            document.body.innerHTML = originalContents;
        });
    })();

    function updateGrid4(materials) {
        const grid4 = $("#materials-list");
        grid4.empty();

        for (const material of materials) {
            const listItem = $("<li>").text(`${material.quantity} ${material.item}`);
            grid4.append(listItem);
        }
    }

    // Create function that extracts attendant requirement data
    function sortMaterialsList(materials) {
        return materials.sort((a, b) => {
            if (a.item === "Inkblack Stones" || a.item === "Purple Stones") {
                return 1;
            }
            if (b.item === "Inkblack Stones" || b.item === "Purple Stones") {
                return -1;
            }
            return a.item.localeCompare(b.item);
        });
    }

    function createMaterialsList(grid3) {
        const attendants = state.selectedItems.attendants;
        if (!attendants) {
            // No attendants are selected, so clear the grid4 list and return
            updateGrid4([]);
            return;
        }

        let materials = [];
        let inkblackStones = 0;
        let purpleStones = 0;

        for (const attendant of attendants) {
            // Find if the item already exists in the materials list
            let material = materials.find(mat => mat.item === attendant.item);

            let n = attendants.name;
            if (material) {
                // If the material exists, increase the quantity by 10
                material.quantity += 10;
            } else {
                // If not, create a new material with the attendant's item and a quantity of 10
                materials.push({ item: attendant.item, quantity: 10 });
            }

            // Check if the attendant is from Octofish or Scaly village
            if (attendant.village.includes("Octofish") || attendant.village.includes("Scaly") || attendant.name === "Draros") {
                purpleStones += attendant.amount;
            } else {
                inkblackStones += attendant.amount;
            }
        }


        // Add inkblackStones and purpleStones to the materials list if they are greater than 0
        if (inkblackStones > 0) {
            materials.push({ item: "Inkblack Stones", quantity: inkblackStones });
        }
        if (purpleStones > 0) {
            materials.push({ item: "Purple Stones", quantity: purpleStones });
        }

        // Sort the materials list
        const sortedMaterials = sortMaterialsList(materials);

        // Update grid4 with the sorted materials list
        updateGrid4(sortedMaterials);
    }
});




function openRightPanel() {
    document.getElementById("rightPanel").style.width = "280px";
}

function closeRightPanel() {
    document.getElementById("rightPanel").style.width = "0";
}



// Responsive for Touchscreen

document.addEventListener('DOMContentLoaded', function () {
    let touchDevice = false;
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        touchDevice = true;
    }

    const submenuItems = document.querySelectorAll('.has-submenu');

    submenuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            if (touchDevice && !item.classList.contains('submenu-open')) {
                event.preventDefault();
                item.classList.add('submenu-open');
            } else {
                item.classList.remove('submenu-open');
            }
        });
    });
});

$(document).on('touchstart', function (e) {
    $(".filters ul.children").fadeOut(300); /*Close filters drop-downs if user taps ANYWHERE in the page*/
});

$('.filters ul.children').on("bind", 'touchstart', function (event) {
    event.stopPropagation(); /*Make all touch events stop at the .filters ul.children container element*/
});

$(".filters ul.children a").on("click", function () {
    $(".filters ul.children").fadeOut(300); /*Close filters drop-downs if user taps on any link in drop-down*/
});