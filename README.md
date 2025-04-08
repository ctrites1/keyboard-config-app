# Keyboard Configuration App

I decided to try and build a keyboard configuration app since (tldr) most good config apps are using 
QMK, which is specifically for wired keebs. If you're like me, and value having a wireless keeb, then you
probably use ZMK, which isn't as easy as QMK to use to configure your keymaps and flashing and such. So I 
figured I would try out building a ZMK interface myself.

## Tech Stack

* **Backend Framework:** Laravel (using PHP)
* **Frontend Library:** React
* **Build Tool / Frontend Tooling:** Vite, Node.js, npm
* **Laravel/React Integration:** Inertia.js (via Laravel Breeze scaffolding)
* **Styling:** Tailwind CSS (via Laravel Breeze scaffolding)
* **Database:** SQLite (initially, configurable for MySQL, PostgreSQL etc. via `.env`)
* **PHP Dependency Management:** Composer
