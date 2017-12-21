let wordBox;
let defineButton;
let searchTerm;
let def;
let word;

function setup() {
  noCanvas();
  wordBox = createInput('');
  wordBox.style('font-size', '45px')
  wordBox.style('text-align', 'center')
  defineButton =  createButton('Define Word')
  fixPlace();

  defineButton.mousePressed(defineWord);

  def = createElement('h2','');
  def.position(20, 300);

  word = createElement('h3','');
  word.position(20, 200);
}


function fixPlace() {
  let x = (windowWidth - width) / 2;
  wordBox.position(x - 210 , 100);
  defineButton.position(x + 30, 200)

}

function windowResized() {
  fixPlace();
}

function getData(data) {
  def.html(data[0].text);
  word.html(data[0].word.toUpperCase());


}

function defineWord() {
  searchTerm = wordBox.value();
  url = `http://api.wordnik.com/v4/word.json/${searchTerm}/definitions?limit=200&includeRelated=true&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`

  loadJSON(url, getData);
}
