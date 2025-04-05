    const boxElements = document.querySelectorAll('.box1');
    const dynamicDiv = document.getElementById('dynamicDiv');
    const subjectTitle = document.getElementById('subjectTitle');
    const subjectContent = document.getElementById('subjectContent');

    // Variable to keep track of the currently displayed subject
    let activeSubject = null;

    boxElements.forEach(box => {
      box.onclick = () => {
        const subject = box.getAttribute('data-subject');

        if (dynamicDiv.style.display === 'block' && activeSubject === subject) {
          // If the same subject is clicked again, hide the div
          dynamicDiv.style.display = 'none';
          activeSubject = null; // Reset active subject
        } else {
          // Update the content for the clicked subject
          subjectTitle.textContent = `${subject} Resources`;
          subjectContent.textContent = `Here you can find the previous year question papers and study materials for ${subject}.`;

          // Show the dynamic div
          dynamicDiv.style.display = 'block';
          activeSubject = subject; // Set the active subject
        }
      };
    });

    // JavaScript for the menu toggle behavior
    const menuToggle = document.getElementById('menuToggle');
    const menuList = document.getElementById('menuList');
    const body = document.body;

    // Toggle the menu when the hamburger icon is clicked
    menuToggle.addEventListener('click', function () {
      if (menuList.style.height === '0px' || menuList.style.height === '') {
        menuList.style.height = 'auto'; // Open the menu
      } else {
        menuList.style.height = '0px'; // Close the menu
      }
    });

    // Close the menu if clicked anywhere outside of the menu
    body.addEventListener('click', function (event) {
      if (!menuList.contains(event.target) && !menuToggle.contains(event.target)) {
        menuList.style.height = '0px'; // Close the menu
      }
    });

    // Optional: Remove hover effect when menu is clicked on mobile
    menuList.addEventListener('click', function () {
      const menuItems = document.querySelectorAll('header ul li');
      menuItems.forEach(item => {
        item.style.transform = 'scale(1)'; // Remove hover effect
        item.style.backgroundColor = ''; // Reset hover background color
      });
    });

    window.onload = function () {
      setTimeout(function () {
        document.getElementById("loader").style.display = "none";
      }, 1500); // 3 seconds loader
    };