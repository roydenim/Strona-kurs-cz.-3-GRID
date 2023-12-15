const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const allNavLinks = document.querySelectorAll(".nav__link");
const navLinksActive = document.querySelector('.is-active')

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");

	allNavLinks.forEach((item) => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
		});
	});
	allNavLinks.forEach((item) => {
		item.addEventListener("click", () => {
			navBtn.classList.remove("is-active");
		});
	});
};

navBtn.addEventListener("click", handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();


// navMobile.classList.remove("is-active");