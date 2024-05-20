document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.nav-link');
    const dropdownMenus = {
        'GAME ▲': document.querySelector('.dropdown_menu_game'),
        'SHOP ▲': document.querySelector('.dropdown_menu_shop')
    };

    let activeLink = null; // To keep track of the currently active link

    dropdownLinks.forEach(link => {
        // Store the original text content in a data attribute
        link.setAttribute('data-original-text', link.textContent);

        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the current and new text content
            const originalText = this.getAttribute('data-original-text');
            const newText = this.getAttribute('data-new-text');

            // If there is an active link, reset its text, remove active class, and hide its menu
            if (activeLink && activeLink !== this) {
                const activeOriginalText = activeLink.getAttribute('data-original-text');
                activeLink.textContent = activeOriginalText;
                activeLink.classList.remove('active');
                const activeNewText = activeLink.getAttribute('data-new-text');
                if (dropdownMenus[activeNewText]) {
                    dropdownMenus[activeNewText].style.display = 'none';
                }
            }

            // Toggle the text content, menu visibility, and active class for the clicked link
            if (this.textContent === originalText) {
                this.textContent = newText;
                this.classList.add('active');
                if (dropdownMenus[newText]) {
                    dropdownMenus[newText].style.display = 'block';
                }
                activeLink = this; // Set the active link to the current link
            } else {
                this.textContent = originalText;
                this.classList.remove('active');
                if (dropdownMenus[newText]) {
                    dropdownMenus[newText].style.display = 'none';
                }
                activeLink = null; // Clear the active link
            }
        });
    });
});
var timeout;
        function expandButton() {
            clearTimeout(timeout);
            var button = document.getElementById("video-controls");
            button.style.right = "3%";
            button.style.padding = "10px 30px";
        }

        function contractButton() {
            timeout = setTimeout(function() {
                var button = document.getElementById("video-controls");
                button.style.right = "2%";
                button.style.padding = "10px";
            }, 1000); // Adjust delay time here (in milliseconds)
        }

        // JavaScript function to toggle video playback and change button text
        function toggleVideo() {
            var video = document.getElementById("video-background");
            var button = document.getElementById("video-controls");
            if (video.paused) {
                video.play();
                button.textContent = "ll Pause";
            } else {
                video.pause();
                button.textContent = "► Play";
            }
        }

        
        
      
        
        

