<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">NOLIMIT-ELASTICSEARCH-API</h3>

  <p align="center">
    Project backend for technical test
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>
<br />

<!-- ABOUT THE PROJECT -->

## Built With

This project built with Node.js, Nest.js, Elasticsearch, and Swagger

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Prerequisites

- NPM
  ```sh
  npm install npm@latest -g
  ```
- Elasticsearch (recommended Elasticsearch v6.8.0)
- cURL

<br />

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/andymyp/nolimit-elasticsearch-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create `.env` file from `.env.example`
4. Create index and mapping into Elasticsearch with:

```sh
# change PATH to your clone folder before
curl -X PUT "http://127.0.0.1:9200/companydatabase" \ -H "Content-Type: application/json" \ --data-binary "@PATH\nolimit-elasticsearch-api\EmployeeMapping.json"
```

5. import employees data into Elasticsearch with:

```sh
# change PATH to your clone folder before
curl -X POST "http://127.0.0.1:9200/companydatabase/_bulk" --header "Content-Type: application/json" --data-binary "@PATH\nolimit-elasticsearch-api\Employees50K.json"
```

6. Verify Data with `http://127.0.0.1:9200/companydatabase/_count?pretty=true`:

```json
{
  "count": 50000,
  "_shards": {
    "total": 5,
    "successful": 5,
    "skipped": 0,
    "failed": 0
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

1. Run

   ```sh
   # development
   npm run start

   # watch mode
   npm run start:dev

   # production mode
   npm run start:prod
   ```

2. API Docs
   ```sh
   http://localhost:3000/docs
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/andymyp
