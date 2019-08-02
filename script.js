

//Handle user input
function handleBreedInput() {
    $("form").on("submit", function(event){
      event.preventDefault();
      const userName = $(event.currentTarget).find('#username-input').val()
      fetchGithubApi(userName)
    })
  }
  
  
  //fetch api info
  function fetchGithubApi(userName) {
    return fetch(`https://api.github.com/users/${userName}/repos`)
      .then(res => res.json())
      .then(data => {
          renderData(data)
      })
      .catch(err => console.log(err))
  }
  
  function renderData(data) {
    $(".repos").empty()
      data.map(function(item, index){
          const repoName = item.name
          const repoURL = item.html_url
          return renderList(repoName, repoURL)
      }).join("")
  }
  
  // render the result
  function renderList(repoName, repoURL) {
    $(".repos").append(`${repoName}<br>${repoURL}<br>`)
  }
  
  
  $(handleBreedInput())