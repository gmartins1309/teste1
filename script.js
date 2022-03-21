var cardPhantomAssasin = {
  hero: "Phantom Assasin",
  image:
    "imgs/card-phantom-assassin.png",
  attributes: {
    Stregth: 6,
    Agility: 8,
    Intelli: 10
  }
};

var cardShadowFiend = {
  hero: "Shadow Fiend",
  image:
    "imgs/card-shadow-fiend.png",
  attributes: {
    Stregth: 5,
    Agility: 9,
    Intelli: 10
  }
};

var cardMachine;
var cardPlayer;
var deck = [cardPhantomAssasin, cardShadowFiend];

function sortCard() {
  var numberCardMachine = parseInt(Math.random() * 2); //alterar isso para ficar dinamico com o deck.legth
  cardMachine = deck[numberCardMachine];

  var numberCardPlayer = parseInt(Math.random() * 2);
  while (numberCardPlayer == numberCardMachine) {
    numberCardPlayer = parseInt(Math.random() * 2);
  }
  cardPlayer = deck[numberCardPlayer];

  document.getElementById("btnSort").disabled = true;
  document.getElementById("btnPlay").disabled = false;
  showPlayerCard();
}

function getSelectedAttribute() {
  var radioAttribute = document.getElementsByName("atributo");
  for (var i = 0; i < radioAttribute.length; i++) {
    if (radioAttribute[i].checked) {
      return radioAttribute[i].value;
    }
  }
}

function play() {
  var attributeSelected = getSelectedAttribute();
  var divResult = document.getElementById("result");

  if (
    cardPlayer.attributes[attributeSelected] >
    cardMachine.attributes[attributeSelected]
  ) {
    htmlResult = "<p class='final-result'>Win</p>";
  } else if (
    cardPlayer.attributes[attributeSelected] <
    cardMachine.attributes[attributeSelected]
  ) {
    htmlResult = "<p class='final-result'>Lose</p>";
  } else {
    htmlResult = "<p class='final-result'>Draw</p>";
  }
  divResult.innerHTML = htmlResult;

  document.getElementById("btnPlay").disabled = true;
  showMachineCard();
}

function showPlayerCard() {
  var divPlayerCard = document.getElementById("player-card");
  //divPlayerCard.style.backgroundImage = `url(${cardPlayer.image})`;
  divPlayerCard.style.backgroundImage = "url(" + cardPlayer.image + ")"
  var frame =
    '<img src="imgs/frame-cards.png" style=" width: inherit; height: inherit; position: absolute;">';
  var attributes = "<div id='attributesDiv' class='card-infos'>";

  var cardInfos = "";
  for (var attribute in cardPlayer.attributes) {
    cardInfos +=
      "<input type='radio' hero='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      " " +
      cardPlayer.attributes[attribute] +
      "<br>";
  }
  var hero = `<p class="card-subtitle"></p>`;
  //var hero = `<p class="card-subtitle">${cardMachine.hero}</p>`; <<<- se quiser que aparece o nome da carta


  divPlayerCard.innerHTML = frame + hero + attributes + cardInfos + "</div>";
}

function showMachineCard() {
  var divCardMachine = document.getElementById("machine-card");
  //divCardMachine.style.backgroundImage = `url(${cardMachine.image})`;
  divCardMachine.style.backgroundImage = "url(" + cardMachine.image + ")"
  var frame =
    '<img src="imgs/frame-cards.png" style=" width: inherit; height: inherit; position: absolute;">';
  var attributesTag = "<div id='attributesDiv' class='card-infos'>";

  var cardInfos = "";
  for (var attribute in cardMachine.attributes) {
    cardInfos +=
      "<p type='text' hero='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      " " +
      cardMachine.attributes[attribute] +
      "</p>";
  }
  var hero = `<p class="card-subtitle"></p>`; 
  divCardMachine.innerHTML = frame + hero + attributesTag + cardInfos + "</div>";
}