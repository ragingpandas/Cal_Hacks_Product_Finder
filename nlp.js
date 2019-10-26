const baseUri = 'https://us-central1-enhanced-tuner-256922.cloudfunctions.net/test-analyze" -H "Content-Type:application/json"'

const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
