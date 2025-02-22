
window.clickAndSearchMovieList = function(clicked_value) {
    document.querySelector(".form-filter").style.display = "block";
    var baseUrl;
    switch (clicked_value) {
        case 'Adventure':
            baseUrl = 'https://api.themoviedb.org/4/list/7096193?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Family':
            baseUrl = 'https://api.themoviedb.org/4/list/7096192?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Animation':
            baseUrl = 'https://api.themoviedb.org/4/list/7097020?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Drama':
            baseUrl = 'https://api.themoviedb.org/4/list/7096191?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Thriller':
            baseUrl = 'https://api.themoviedb.org/4/list/7097077?api_key=1d177576971c8d250816c5fcd5cac600';
            break; 
        case 'Science fiction':
            baseUrl = 'https://api.themoviedb.org/4/list/7094258?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Comedy':
            baseUrl = 'https://api.themoviedb.org/4/list/7095579?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Documentary':
            baseUrl = 'https://api.themoviedb.org/4/list/7096190?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Series':
            baseUrl = 'https://api.themoviedb.org/4/list/7097021?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        default:
            alert('Sorry, we are out of ' + clicked_value + ' list.');
    }
    
    function search() {
        document.querySelector('.movie-container').innerHTML = "";
        document.querySelector('.text-not-movie').style.display = "none";
        fetch(baseUrl)
        .then(res => res.text())
        .then(res => {
            var parseRes = JSON.parse(res);
            // List name
            document.querySelector("h2").innerHTML = `${parseRes.name}`;
            // List description
            document.querySelector("h5").innerHTML = `${parseRes.description}`;
            // Paginacja
            if (parseRes.total_pages >= 2) {
                var div_pagination_btns = document.createElement("div");
                div_pagination_btns.setAttribute("class", "movie-pagination");
                var btn_next = document.createElement("button");
                btn_next.setAttribute("class", "btn-next");
                var btn_next_text = document.createTextNode("See more");
            }
            var counter = 1;
            function nextPage() {
                if (counter < parseRes.total_pages) {
                    var page = counter += 1;
                    fetch(baseUrl + '&page=' + page)
                    .then(res => res.text())
                    .then(res => {
                        var parseRes = JSON.parse(res);
                        function displayNextPage() {
                            for (var i=0; i < parseRes.results.length; i++) {
                                var arrow_img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjY2NyA0OTAuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjY3IDQ5MC42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDk2ODg7IiBkPSJNNDY2LjIxOSwyMzcuNzgxTDIzMS41NTIsMy4xMTVDMjI5LjU0OCwxLjExNSwyMjYuODMxLTAuMDA1LDIyNCwwSDMyDQoJYy01Ljg5MS0wLjAxMS0xMC42NzUsNC43NTctMTAuNjg2LDEwLjY0OGMtMC4wMDUsMi44NCwxLjEyMyw1LjU2NSwzLjEzNCw3LjU3MWwyMjcuMTM2LDIyNy4xMTVMMjQuNDQ4LDQ3Mi40NDgNCgljLTQuMTcxLDQuMTYtNC4xNzksMTAuOTE0LTAuMDE5LDE1LjA4NWMyLjAwNiwyLjAxMSw0LjczMSwzLjEzOSw3LjU3MSwzLjEzNGgxOTJjMi44MzEsMC4wMDUsNS41NDgtMS4xMTUsNy41NTItMy4xMTUNCglsMjM0LjY2Ny0yMzQuNjY3YzQuMTcxLTQuMTYsNC4xNzktMTAuOTE0LDAuMDE5LTE1LjA4NUM0NjYuMjMxLDIzNy43OTQsNDY2LjIyNSwyMzcuNzg4LDQ2Ni4yMTksMjM3Ljc4MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
                                var div_movie_info = document.createElement("div");
                                div_movie_info.setAttribute("class", "movie-info");
                                var ul_section_left = document.createElement("ul");
                                var ul_section_right = document.createElement("ul");
                                var img_poster = document.createElement("img");
                                img_poster.src = `https://image.tmdb.org/t/p/w300${parseRes.results[i].poster_path}`;
                                var content_img_poster = document.createTextNode(img_poster.src);
                            
                                var choiceTitleFn = function() {
                                    if (parseRes.results[i].title) {
                                        return document.createTextNode(parseRes.results[i].title);
                                    }
                                    else if (parseRes.results[i].name) {
                                        return document.createTextNode(parseRes.results[i].name);
                                    }
                                }
                            
                                var content_overview = document.createTextNode(`Overview: ${parseRes.results[i].overview}`);
                                var content_vote_average = document.createTextNode(`Average vote: ${parseRes.results[i].vote_average}`);
                            
                                var choiceOriginalTitleFn = function() {
                                    if (parseRes.results[i].original_title) {
                                        return document.createTextNode(`Original title: ${parseRes.results[i].original_title}`);
                                    }
                                    else if (parseRes.results[i].original_name) {
                                        return document.createTextNode(`Original name: ${parseRes.results[i].original_name}`);
                                    }
                                }
                            
                                var choiceReleaseDateFn = function() {
                                    if (parseRes.results[i].release_date) {
                                        return document.createTextNode(`Release date: ${parseRes.results[i].release_date}`);
                                    }
                                    else if (parseRes.results[i].first_air_date) {
                                        return document.createTextNode(`First release date: ${parseRes.results[i].first_air_date}`);
                                    }
                                }
                            
                                var content_media_type = document.createTextNode(`Madia type: ${parseRes.results[i].media_type}`);
                                
                                // Marks:
                                // 1 - Violence
                                // 2 - Vulgar language
                                // 3 - Sexual content

                                var content_comment = function() {
                                    if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}` === '0') {
                                        return document.createTextNode('Comment: Good for viewers in all age.');
                                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}` === '1') {
                                        return document.createTextNode('Comment: Contain violence.');
                                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '2') {
                                        return document.createTextNode('Comment: Contain vulgar language.');
                                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '3') {
                                        return document.createTextNode('Comment: Contain sexual content.');
                                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '1 2') {
                                        return document.createTextNode('Comment: Contain violence and vulgar language.');
                                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '1 3') {
                                        return document.createTextNode('Comment: Contain violence and sexual content.');
                                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '2 3') {
                                        return document.createTextNode('Comment: Contain vulgar language and sexual content.');
                                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '1 2 3') {
                                        return document.createTextNode('Comment: Contain violence, vulgar language and sexual content.');
                                    } else {
                                        return document.createTextNode(`Comment: ${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`);
                                    }
                                }
                            
                                var li_movie_title = document.createElement("li");
                                var li_movie_overview = document.createElement("li");
                                var li_movie_vote = document.createElement("li");
                                var li_movie_original_title = document.createElement("li");
                                var li_movie_release_date = document.createElement("li");
                                var li_movie_media_type = document.createElement("li");
                                var li_movie_comments = document.createElement("li");
                                var li_movie_img = document.createElement("li");
                                var img_arrow_overview = document.createElement("img");
                                var img_arrow_vote = document.createElement("img");
                                var img_arrow_original_title = document.createElement("img");
                                var img_arrow_release_date = document.createElement("img");
                                var img_arrow_media_type = document.createElement("img");
                                var img_arrow_comments = document.createElement("img");
                                ul_section_left.setAttribute("class", "section-left");
                                ul_section_right.setAttribute("class", "section-right");
                                img_poster.setAttribute("class", "movie-img");
                                li_movie_title.setAttribute("class", "movie-title");
                                li_movie_overview.setAttribute("class", "movie-overview");
                                li_movie_vote.setAttribute("class", "movie-vote");
                                li_movie_original_title.setAttribute("class", "movie-original-title");
                                li_movie_release_date.setAttribute("class", "movie-release-date");
                                li_movie_media_type.setAttribute("class", "movie-media-type");
                                li_movie_comments.setAttribute("class", "movie-comments");
                                img_arrow_overview.setAttribute("src", arrow_img);
                                img_arrow_overview.setAttribute("class", "arrow");
                                img_arrow_vote.setAttribute("src", arrow_img);
                                img_arrow_vote.setAttribute("class", "arrow");
                                img_arrow_original_title.setAttribute("src", arrow_img);
                                img_arrow_original_title.setAttribute("class", "arrow");
                                img_arrow_release_date.setAttribute("src", arrow_img);
                                img_arrow_release_date.setAttribute("class", "arrow");
                                img_arrow_media_type.setAttribute("src", arrow_img);
                                img_arrow_media_type.setAttribute("class", "arrow");
                                img_arrow_comments.setAttribute("src", arrow_img);
                                img_arrow_comments.setAttribute("class", "arrow");
                                div_movie_info.appendChild(ul_section_left);
                                div_movie_info.appendChild(ul_section_right);
                                ul_section_left.appendChild(li_movie_img);
                                li_movie_img.appendChild(img_poster);
                                ul_section_right.appendChild(li_movie_title);
                                li_movie_overview.appendChild(img_arrow_overview);
                                li_movie_vote.appendChild(img_arrow_vote);
                                li_movie_original_title.appendChild(img_arrow_original_title);
                                li_movie_release_date.appendChild(img_arrow_release_date);
                                li_movie_media_type.appendChild(img_arrow_media_type);
                                li_movie_comments.appendChild(img_arrow_comments);
                                ul_section_right.appendChild(li_movie_original_title);
                                ul_section_right.appendChild(li_movie_vote);
                                ul_section_right.appendChild(li_movie_release_date);
                                ul_section_right.appendChild(li_movie_media_type);
                                ul_section_right.appendChild(li_movie_comments);
                                ul_section_right.appendChild(li_movie_overview);
                                img_poster.appendChild(content_img_poster);
                                li_movie_title.appendChild(choiceTitleFn());
                                li_movie_original_title.appendChild(choiceOriginalTitleFn());
                                li_movie_vote.appendChild(content_vote_average);
                                li_movie_release_date.appendChild(choiceReleaseDateFn());
                                li_movie_media_type.appendChild(content_media_type);
                                li_movie_comments.appendChild(content_comment());
                                li_movie_overview.appendChild(content_overview);
                                var div_movie_main = document.querySelector(".movie-main");
                                div_movie_main.appendChild(div_movie_info);
                                var div_movie_container = document.querySelector('.movie-container');
                                div_movie_container.appendChild(div_movie_info);
                                // Paginacja
                                if (parseRes.total_pages >= 2) {
                                    div_movie_container.appendChild(div_pagination_btns);
                                    div_pagination_btns.appendChild(btn_next);
                                    btn_next.appendChild(btn_next_text);
                                }
                            }
                        }
                        return displayNextPage();
                    })
                } else {
                    alert('Sorry, no more movies!');
                }
            }
            if (parseRes.total_pages >= 2) {
                btn_next.addEventListener("click", nextPage);
            }
            
            // List content (movies)
            for (var i=0; i < parseRes.results.length; i++) {
                var arrow_img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjY2NyA0OTAuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjY3IDQ5MC42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDk2ODg7IiBkPSJNNDY2LjIxOSwyMzcuNzgxTDIzMS41NTIsMy4xMTVDMjI5LjU0OCwxLjExNSwyMjYuODMxLTAuMDA1LDIyNCwwSDMyDQoJYy01Ljg5MS0wLjAxMS0xMC42NzUsNC43NTctMTAuNjg2LDEwLjY0OGMtMC4wMDUsMi44NCwxLjEyMyw1LjU2NSwzLjEzNCw3LjU3MWwyMjcuMTM2LDIyNy4xMTVMMjQuNDQ4LDQ3Mi40NDgNCgljLTQuMTcxLDQuMTYtNC4xNzksMTAuOTE0LTAuMDE5LDE1LjA4NWMyLjAwNiwyLjAxMSw0LjczMSwzLjEzOSw3LjU3MSwzLjEzNGgxOTJjMi44MzEsMC4wMDUsNS41NDgtMS4xMTUsNy41NTItMy4xMTUNCglsMjM0LjY2Ny0yMzQuNjY3YzQuMTcxLTQuMTYsNC4xNzktMTAuOTE0LDAuMDE5LTE1LjA4NUM0NjYuMjMxLDIzNy43OTQsNDY2LjIyNSwyMzcuNzg4LDQ2Ni4yMTksMjM3Ljc4MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
                var div_movie_info = document.createElement("div");
                div_movie_info.setAttribute("class", "movie-info");
                var ul_section_left = document.createElement("ul");
                var ul_section_right = document.createElement("ul");
                var img_poster = document.createElement("img");
                img_poster.src = `https://image.tmdb.org/t/p/w300${parseRes.results[i].poster_path}`;
                var content_img_poster = document.createTextNode(img_poster.src);

                var choiceTitleFn = function() {
                    if (parseRes.results[i].title) {
                        return document.createTextNode(parseRes.results[i].title);
                    }
                    else if (parseRes.results[i].name) {
                        return document.createTextNode(parseRes.results[i].name);
                    }
                }

                var content_overview = document.createTextNode(`Overview: ${parseRes.results[i].overview}`);
                var content_vote_average = document.createTextNode(`Average vote: ${parseRes.results[i].vote_average}`);

                var choiceOriginalTitleFn = function() {
                    if (parseRes.results[i].original_title) {
                        return document.createTextNode(`Original title: ${parseRes.results[i].original_title}`);
                    }
                    else if (parseRes.results[i].original_name) {
                        return document.createTextNode(`Original name: ${parseRes.results[i].original_name}`);
                    }
                }

                var choiceReleaseDateFn = function() {
                    if (parseRes.results[i].release_date) {
                        return document.createTextNode(`Release date: ${parseRes.results[i].release_date}`);
                    }
                    else if (parseRes.results[i].first_air_date) {
                        return document.createTextNode(`First release date: ${parseRes.results[i].first_air_date}`);
                    }
                }

                var content_media_type = document.createTextNode(`Madia type: ${parseRes.results[i].media_type}`);
                
                // Marks:
                // 1 - Violence
                // 2 - Vulgar language
                // 3 - Sexual content

                var content_comment = function() {
                    if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}` === '0') {
                        return document.createTextNode('Comment: Good for viewers in all age.');
                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}` === '1') {
                        return document.createTextNode('Comment: Contain violence.');
                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '2') {
                        return document.createTextNode('Comment: Contain vulgar language.');
                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '3') {
                        return document.createTextNode('Comment: Contain sexual content.');
                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '1 2') {
                        return document.createTextNode('Comment: Contain violence and vulgar language.');
                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '1 3') {
                        return document.createTextNode('Comment: Contain violence and sexual content.');
                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '2 3') {
                        return document.createTextNode('Comment: Contain vulgar language and sexual content.');
                    } else if (`${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`  === '1 2 3') {
                        return document.createTextNode('Comment: Contain violence, vulgar language and sexual content.');
                    } else {
                        return document.createTextNode(`Comment: ${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`);
                    }
                }

                var li_movie_title = document.createElement("li");
                var li_movie_overview = document.createElement("li");
                var li_movie_vote = document.createElement("li");
                var li_movie_original_title = document.createElement("li");
                var li_movie_release_date = document.createElement("li");
                var li_movie_media_type = document.createElement("li");
                var li_movie_comments = document.createElement("li");
                var li_movie_img = document.createElement("li");
                var img_arrow_overview = document.createElement("img");
                var img_arrow_vote = document.createElement("img");
                var img_arrow_original_title = document.createElement("img");
                var img_arrow_release_date = document.createElement("img");
                var img_arrow_media_type = document.createElement("img");
                var img_arrow_comments = document.createElement("img");
                ul_section_left.setAttribute("class", "section-left");
                ul_section_right.setAttribute("class", "section-right");
                img_poster.setAttribute("class", "movie-img");
                li_movie_title.setAttribute("class", "movie-title");
                li_movie_overview.setAttribute("class", "movie-overview");
                li_movie_vote.setAttribute("class", "movie-vote");
                li_movie_original_title.setAttribute("class", "movie-original-title");
                li_movie_release_date.setAttribute("class", "movie-release-date");
                li_movie_media_type.setAttribute("class", "movie-media-type");
                li_movie_comments.setAttribute("class", "movie-comments");
                img_arrow_overview.setAttribute("src", arrow_img);
                img_arrow_overview.setAttribute("class", "arrow");
                img_arrow_vote.setAttribute("src", arrow_img);
                img_arrow_vote.setAttribute("class", "arrow");
                img_arrow_original_title.setAttribute("src", arrow_img);
                img_arrow_original_title.setAttribute("class", "arrow");
                img_arrow_release_date.setAttribute("src", arrow_img);
                img_arrow_release_date.setAttribute("class", "arrow");
                img_arrow_media_type.setAttribute("src", arrow_img);
                img_arrow_media_type.setAttribute("class", "arrow");
                img_arrow_comments.setAttribute("src", arrow_img);
                img_arrow_comments.setAttribute("class", "arrow");
                div_movie_info.appendChild(ul_section_left);
                div_movie_info.appendChild(ul_section_right);
                ul_section_left.appendChild(li_movie_img);
                li_movie_img.appendChild(img_poster);
                ul_section_right.appendChild(li_movie_title);
                li_movie_overview.appendChild(img_arrow_overview);
                li_movie_vote.appendChild(img_arrow_vote);
                li_movie_original_title.appendChild(img_arrow_original_title);
                li_movie_release_date.appendChild(img_arrow_release_date);
                li_movie_media_type.appendChild(img_arrow_media_type);
                li_movie_comments.appendChild(img_arrow_comments);
                ul_section_right.appendChild(li_movie_original_title);
                ul_section_right.appendChild(li_movie_vote);
                ul_section_right.appendChild(li_movie_release_date);
                ul_section_right.appendChild(li_movie_media_type);
                ul_section_right.appendChild(li_movie_comments);
                ul_section_right.appendChild(li_movie_overview);
                img_poster.appendChild(content_img_poster);
                li_movie_title.appendChild(choiceTitleFn());
                li_movie_original_title.appendChild(choiceOriginalTitleFn());
                li_movie_vote.appendChild(content_vote_average);
                li_movie_release_date.appendChild(choiceReleaseDateFn());
                li_movie_media_type.appendChild(content_media_type);
                li_movie_comments.appendChild(content_comment());
                li_movie_overview.appendChild(content_overview);
                var div_movie_main = document.querySelector(".movie-main");
                div_movie_main.appendChild(div_movie_info);
                var div_movie_container = document.querySelector('.movie-container');
                div_movie_container.appendChild(div_movie_info);
                // Paginacja
                if (parseRes.total_pages >= 2) {
                    div_movie_container.appendChild(div_pagination_btns);
                    div_pagination_btns.appendChild(btn_next);
                    btn_next.appendChild(btn_next_text);
                }
            }
        })
    }
    search();
    }

window.movieFilterFn = function() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("filter-input");
        filter = input.value.toUpperCase();
        ul = document.querySelector(".movie-container");
        li = ul.querySelectorAll(".movie-info");
        for (i = 0; i < li.length; i++) {
            a = li[i];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

//Get the button
mybutton = document.querySelector(".go-up-btn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
window.topFunction = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
