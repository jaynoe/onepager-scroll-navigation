# jQuery Onepager-Scroll-Navigation
Example: _Soon_

## Requirements
* jQuery (tested with v3.3.1)

## HTML structure
```
<nav class="navigation">
<ul>
    <li>
        <a href="#area1" data-area="area1">Area 1</a>
        <a href="#area2" data-area="area2">Area 2</a>
        <a href="#area3" data-area="area3">Area 3</a>
        <a href="#area4" data-area="area4">Area 4</a>
    </li>
</ul>
</nav>

<div class="container" id="area1"><!-- Content --></div>
<div class="container" id="area2"><!-- Content --></div>
<div class="container" id="area3"><!-- Content --></div>
<div class="container" id="area4"><!-- Content --></div>
```

## JavaScript
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>$(".navigation").onepagerScrollNavigation();</script>
```

## Options
* **duration**<br>Scroll speed in ms (default: 1000)
* **activeClass**<br>Class for the active navigation link (default: "active")
* **containerClass**<br>Your area class (default: ".container")
* **offsetTop**<br>If you have a fixed header you have to enter its height here (default: 0)