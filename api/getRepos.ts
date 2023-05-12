export default function getRepos() {
  fetch('https://api.github.com/users/adnene-guessoum/repos').then(response => {
    return response.json();
  });
}
