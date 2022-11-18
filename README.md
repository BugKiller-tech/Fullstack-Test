

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Full-stack Test task</h3>

  <p align="center">
    This is node.js / react test project
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


Here's the test project.
This project consists of 3 folders.
* frontend: This folder is Next.js project
* json-server: This folder is simple json web server. (I made this to prove use of server-side and client-side rendering in Next.js)
* backend: This folder is backend to make node modules which exports findServer promise

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Next. js, Material UI
* Node.js, Express
* Jest, jest-mock-axios // I've used jest-mock-axios instead of jest-fetch-mock because I've used axios instead of fecth.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how to run a pogram.

### Prerequisites

* Node.js latest
  

### Installation

1. Clone the repo
   ```sh
   git clone repository-url-here
   ```
2. Install NPM packages in each folder. backend, frontend, json-server  
  We can integrate node packages in real pratice but I've simply made it separtely for the test.
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   cd ../json-server
   npm install
   ```

### How to run

1. Backend
   ```sh
   cd backend
   npm run test
   ```
2. frontend
   ```sh
   // Run json server first. (port is 5000)
   cd json-server
   npm start

   // Run frontend
   cd frontend
   npm run dev (port is 3000)
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage


_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
 - will add later


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

