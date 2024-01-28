document.addEventListener('DOMContentLoaded', (event) => {
    const menuItems = document.querySelectorAll('.drawer-menu .menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.sub-menu').style.display = 'block';
        });
        item.addEventListener('mouseout', () => {
            item.querySelector('.sub-menu').style.display = 'block';
        });
    });
});

function loadNavigation() {
    var navHtml = `<nav class="navigation-menu">
    <div class="menu-item">
        <span>Home</span>
            <div class="sub-menu">
                <a href="/pages/index.html">Home</a>
            </div>
        </div>
        <div class="menu-item">
            <span>Challenges & Projects </span>
            <div class="sub-menu">
                <a href="/pages/projects_challenges/relational_Databases.html">Relational Databases</a>
                <a href="/pages/projects_challenges/js_challenges.html">JavaScript</a>
                <a href="/pages/projects_challenges/sql_challenge.html">SQL</a>
                <a href="/pages/employability.html">Employability</a>
            </div>
        </div>
        <div class="menu-item">
            <span>About Me</span>
            <div class="sub-menu">
                <a href="about_me.html">About Me</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="cv.html">CV</a>
            </div>
        </div>
        <div class="menu-item">
            <span>TGC - Software Development Course</span>
            <div class="sub-menu">
                <a href="/pages/weeks/week1.html">Week 1</a>
                <a href="/pages/weeks/week2.html">Week 2</a>
                <a href="/pages/weeks/week3.html">Week 3</a>
                <a href="/pages/weeks/week4.html">Week 4</a>
                <a href="/pages/weeks/week5.html">Week 5</a>
                <a href="/pages/weeks/week6.html">Week 6</a>
                <a href="/pages/weeks/week7.html">Week 7</a>
                <a href="/pages/weeks/week8.html">Week 8</a>
                <a href="/pages/weeks/week9.html">Week 9</a>
                <a href="/pages/weeks/week10.html">Week 10</a>
                <a href="/pages/weeks/week11.html">Week 11</a>
            </div>
        </div>
        <div class="menu-item">
            <span>Challenges & Projects </span>
            <div class="sub-menu">
                <a href="/pages/projects_challenges/relational_Databases.html">Relational Databases</a>
                <a href="/pages/projects_challenges/js_challenges.html">JavaScript</a>
                <a href="/pages/projects_challenges/sql_challenge.html">SQL</a>
                <a href="/pages/employability.html">Employability</a>
            </div>
        </div>
    </nav>`;
    document.getElementById('navigation-placeholder').innerHTML = navHtml;
}
  