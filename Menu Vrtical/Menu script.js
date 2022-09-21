var Menutoggle = document.querySelector('.Menu-toggle');
var navigation = document.querySelector(".navigation");

        Menutoggle.onclick = () => {
            navigation.classList.toggle('open');
        }

        var listItems = document.querySelectorAll('.list-item');

            listItems.forEach(item => {
                    item.onclick = () => {
                        listItems.forEach(item => item.classList.remove('active'));

                        item.classList.add('active');
                    }
            })