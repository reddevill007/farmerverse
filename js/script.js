let weather = {
    apiKey: "73ab53f161b1ef8f8a7a1f89b9d0a958",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

weather.fetchWeather("Delhi");

let newsAccordian = document.getElementById('containerNews');

let source = 'the-times-of-india';
let apiKey = '35f8498746684954afcc7780fd86323c';

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?lang=en&country=in&q=agriculture&token=be3d5b0e883f00ffabb233f6f7032716`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles)
        let newsHtml = '';

        articles.forEach(element => {
            let publishedAt = new Date(element["publishedAt"]).toGMTString()
            let news = `
                <div class='my-3'>
                    <div class="card bg-dark text-light border border-light">
                        <div class="box">
                            <span class="badge rounded-pill bg-success">
                                ${element["source"]["name"]}
                            </span>
                        </div>
                        <img src="${element["image"]}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title border-bottom pb-3">${element["title"]}</h5>
                            <p class='card-text'><small className='text-muted'>${publishedAt}</small></p>
                            <p class="card-text">${element["content"]}</p>
                            <a href=${element["url"]} target="_blank" class="btn btn-sm btn-success text-light">Read More</a>
                        </div>
                    </div>
                </div>
            `;
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send()

