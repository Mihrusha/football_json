$(document).ready(function () {
    let json= [{
        "name": "<a href=\"http://www.sports.ru/juventus/\">Ювентус</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 11,
        "win": 9,
        "draw": 0,
        "lose": 2,
        "score": 27,
        "goals": 23,
        "conceded_goals": 8,
        "place": 1,
        "color": "1"
    
    }, {
        "name": "<a href=\"http://www.sports.ru/roma/\">Рома</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 7,
        "draw": 1,
        "lose": 2,
        "score": 22,
        "goals": 26,
        "conceded_goals": 12,
        "place": 2,
        "color": "1"
    }, {
        "name": "<a href=\"http://www.sports.ru/napoli/\">Наполи</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 11,
        "win": 6,
        "draw": 2,
        "lose": 3,
        "score": 20,
        "goals": 20,
        "conceded_goals": 12,
        "place": 3,
        "color": "1"
    }, {
        "name":"<a href=\"http://www.sports.ru/atalanta/\">Аталанта</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 11,
        "win": 6,
        "draw": 1,
        "lose": 4,
        "score": 19,
        "goals": 16,
        "conceded_goals": 13,
        "place": 4,
        "color": "2"
    }, {
        "name":"<a href=\"http://www.sports.ru/milan/\">Милан</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 6,
        "draw": 1,
        "lose": 3,
        "score": 19,
        "goals": 16,
        "conceded_goals": 14,
        "place": 5,
        "color": "2"
    }, {
        "name":"<a href=\"http://www.sports.ru/lazio/\">Лацио</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 5,
        "draw": 3,
        "lose": 2,
        "score": 18,
        "goals": 20,
        "conceded_goals": 11,
        "place": 6,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/fiorentina/\">Фиорентина</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 4,
        "draw": 4,
        "lose": 2,
        "score": 16,
        "goals": 13,
        "conceded_goals": 10,
        "place": 7,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/torino/\">Торино</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 4,
        "draw": 3,
        "lose": 3,
        "score": 15,
        "goals": 20,
        "conceded_goals": 13,
        "place": 8,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/genoa/\">Геноа</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 4,
        "draw": 3,
        "lose": 3,
        "score": 15,
        "goals": 12,
        "conceded_goals": 10,
        "place": 9,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/chievo/\">Кьево</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
         "matches": 10,
        "win": 4,
        "draw": 3,
        "lose": 3,
        "score": 15,
        "goals": 11,
        "conceded_goals": 10,
        "place": 10,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/inter/\">Интер</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
         "matches": 10,
        "win": 4,
        "draw": 2,
        "lose": 4,
        "score": 14,
        "goals": 13,
        "conceded_goals": 13,
        "place": 11,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/bologna/\">Болонья</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 11,
        "win": 3,
        "draw": 4,
        "lose": 4,
        "score": 13,
        "goals": 11,
        "conceded_goals": 15,
        "place": 12,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/sassuolo/\">Сасуолло</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 4,
        "draw": 1,
        "lose": 5,
        "score": 13,
        "goals": 13,
        "conceded_goals": 17,
        "place": 13,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/udinese/\">Удинезе</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 4,
        "draw": 1,
        "lose": 5,
        "score": 13,
        "goals": 13,
        "conceded_goals": 16,
        "place": 14,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/cagliari/\">Кагьяри</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 4,
        "draw": 1,
        "lose": 5,
        "score": 13,
        "goals": 17,
        "conceded_goals": 23,
        "place": 15,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/sampdoria/\">Самдория</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 3,
        "draw": 2,
        "lose": 5,
        "score": 11,
        "goals": 11,
        "conceded_goals": 16,
        "place": 16,
        "color": ""
    }, {
         "name":"<a href=\"http://www.sports.ru/tags/72491088/\">Пескара</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
         "matches": 10,
        "win": 1,
        "draw": 4,
        "lose": 5,
        "score": 7,
        "goals": 9,
        "conceded_goals": 15,
        "place": 17,
        "color": ""
    }, {
        "name":"<a href=\"http://www.sports.ru/tags/1046357/\">Эмполи</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
         "matches": 10,
        "win": 1,
        "draw": 3,
        "lose": 6,
        "score": 6,
        "goals": 2,
        "conceded_goals": 13,
        "place": 18,
        "color": "4"
    }, {
        "name":"<a href=\"http://www.sports.ru/palermo/\">Палермо</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
        "matches": 10,
        "win": 1,
        "draw": 3,
        "lose": 6,
        "score": 6,
        "goals": 7,
        "conceded_goals": 19,
        "place": 19,
        "color": 4
    }, {
        "name":"<a href=\"http://www.sports.ru/tags/5049877/\">Кротоне</a>",
        "flag_country": "<img src=\"Italy.jpg\" />",
                "matches": 10,
        "win": 0,
        "draw": 2,
        "lose": 8,
        "score": 2,
        "goals": 8,
        "conceded_goals": 21,
        "place": 20,
        "color": 4
    }]
    let table = document.getElementById('table');
 
for(let item of json) {
    let tr = '<tr>';
    for(let val of Object.values(item)) tr += '<td>' + val + '</td>';
    tr += '</tr>';
    table.insertAdjacentHTML('beforeEnd', tr);
}
});