const titles = [
    "Wise",
    "Fool",
    "Mad",
    "Saint",
    "Righteous",
    "Greedy",
    "Ill",
    "Scholar",
    "Wealthy",
    "Devil",
  ];
  
  const intro =
    "You are a king, hungry for power, and just found a book called Ars Goetia, which details how to make a ritual to establish a pact with a demon, Belial, and he will give you anything you want. Your biggest desire is to be king forever, and it will be given to you. This, however, will not dismiss you of your responsibilities as a King. Are you ready to maintain the balance in your kingdom?";
  
  const demon = [
    "You have completed the ritual. In front of you, you see a grim light, a carriege covered in flames approaches and two beautiful angels are riding it. As they get close, a single voice comes out of their mouths:\n -Tell me, who summoned thee?",
    "-And what doth thee desire?",
    "-Then it shall be done!",
    "You wake up in the dungeon and see that only shadows surround you. The demon has left and said that your desired would be done, but yet you feel no different. You should return to the main castle to take care of your every-day endeavours.",
  ];
  
  const end = [];
  
  const backgroundTune = new Audio();
  backgroundTune.src = "./sounds/play2.mp3";
  backgroundTune.volume = 0.3;
  
//   const deathTune = new Audio();
//   deathTune.src = "./sounds/deathMusic.mp3";
//   deathTune.volume = 0.3;
  
//   const deathLaugh = new Audio();
//   deathLaugh.src = "./sounds/deathLaugh.mp3";
//   deathLaugh.volume = 0.3;
  
  let nameVariable = "";
  let year = 1;
  let ageVariable = `Year ${year} of King ${nameVariable}`;
  
  const textContainer = document.getElementById("main-text");
  textContainer.innerText = intro;
  
  const buttonsContainer = document.getElementById("buttons-container");
  let singleButton = document.getElementById("single-choice-button");
  
  const playerId = document.getElementById("player-id");
  const nameHolder = document.getElementById("name-holder");
  const ageHolder = document.getElementById("age-holder");
  
  const playerNameHolder = document.getElementById("input-text-holder");
  
  let clickCounter = 0;
  let yearCounter = 0;
  
  let kingdom = new Kingdom();
  
  function startGame() {
    backgroundTune.play();
    singleButton.innerText = "I am King...";
    textContainer.innerText = demon[0];
    playerNameHolder.innerHTML =
      '<input  type="input" id="name"  class="form__field" placeholder="Write thy name!" name="Write thy name!" required/>';
  }
  
  function printPlayerName() {
    const playerName = document.getElementById("name");
    nameVariable = playerName.value;
    nameHolder.innerText =
      "King " +
      nameVariable +
      ", the " +
      titles[Math.floor(Math.random() * titles.length)];
    ageVariable = `Year ${year} of King ${nameVariable}`;
    ageHolder.innerText = ageVariable;
    playerNameHolder.parentElement.removeChild(playerNameHolder);
  }
  
  function gameInitialLoop() {
    kingdom.church = 50;
    kingdom.population = 50;
    kingdom.army = 50;
    kingdom.economy = 50;
    textContainer.innerText = demon[3];
    singleButton.classList.add("single-choice-fade");
    singleButton.classList.add("multiple-choice-transition");
    singleButton.parentElement.removeChild(singleButton);
    buttonsContainer.innerHTML +=
      '<button id="right-choice-button" class="choice-buttons"></button>';
    buttonsContainer.innerHTML +=
      '<button id="left-choice-button" class="choice-buttons"></button>';
    leftButton = document.getElementById("right-choice-button");
    rigthButton = document.getElementById("left-choice-button");
    leftButton.innerText = "Stay at the Dungeon.";
    rigthButton.innerText = "Head to the castle's main hall.";
    leftButton.onclick = () => {
      textContainer.innerText = "You have no business at the dungeon. Leave!";
      leftButton.innerText = "Head to the castle's main hall.";
      rigthButton.innerText = "Head to the castle's main hall.";
      leftButton.addEventListener("click", () => {
        gameLoop();
      });
    };
    rigthButton.addEventListener("click", () => {
      gameLoop();
    });
  }
  
  function gameLoop() {
    year++;
    ageVariable = `Year ${year} of King ${nameVariable}`;
    ageHolder.innerText = ageVariable;
    kingdom.printCurrentStatus();
    const theKingWillDie = kingdom.isKingdomOver();
    if (theKingWillDie[0] == -1 && theKingWillDie[1] == -1) {
      const randomNPC = NPCarray[Math.floor(Math.random() * NPCarray.length)];
      textContainer.innerText = randomNPC.lines;
      leftButton.innerText = randomNPC.leftButtonText;
      rigthButton.innerText = randomNPC.rightButtonText;
      leftButton.onclick = () => {
        kingdom.updateKingdom(randomNPC.leftButtonEffect);
        kingdom.printCurrentStatus();
        gameLoop();
      };
      rigthButton.onclick = () => {
        kingdom.updateKingdom(randomNPC.rightButtonEffect);
        kingdom.printCurrentStatus();
        gameLoop();
      };
    } else {
      theKingWillDie[0] != -1
        ? gameOver(theKingWillDie[0])
        : gameOver(theKingWillDie[1]);
    }
  }
  
  function gameOver(death) {
    backgroundTune.pause();
    deathLaugh.play();
    deathTune.play();
    switch (death) {
      case 0:
        if (kingdom.church == 0) {
          textContainer.innerText =
            "The Church has cut relations with the kingdom and has overthrown you into a teocracy. You die alone, ostracized.";
        } else {
          textContainer.innerText =
            "The Church has become so powerfull that the people demands that they choose a new King. You are killed by a raging mob.";
        }
        break;
      case 1:
        if (kingdom.population == 0) {
          textContainer.innerText =
            "All your servants are dead, you have no one to rule. You die alone in your castle.";
        } else {
          textContainer.innerText =
            "All power to the people. You are hanged on the castle's main square and the people now live in a commune.";
        }
        break;
      case 2:
        if (kingdom.army == 0) {
          textContainer.innerText =
            "Your army is too week, the Vikings raid your kingdom and kill you.";
        } else {
          textContainer.innerText =
            "The army is too strong, the General demands to be King. You die trying to stop him.";
        }
        break;
      case 3:
        if (kingdom.economy == 0) {
          textContainer.innerText =
            "Your kingdom is so poor that you accept an offer to be bought by the Southern Kingdom. You are assassinated in your sleep not long after.";
        } else {
          textContainer.innerText =
            "The Merchant's Guild is so powerfull it overthrones you and sends you to a desert Island. You die attacked by snakes.";
        }
        break;
    }
    buttonsContainer.innerHTML =
      '<button id="single-choice-button" class="choice-buttons">Start Over!</button';
    singleButton = document.getElementById("single-choice-button");
    singleButton.addEventListener("click", () => {
      textContainer.innerText =
        "You wake up, in the darkness, just as before. Something is wrong.";
      continueGame();
    });
  }
  
  function continueGame() {
    deathTune.pause();
    backgroundTune.play();
    gameInitialLoop();
  }
  
  singleButton.addEventListener("click", () => {
    clickCounter++;
  
    if (clickCounter == 1) {
      startGame();
    } else if (clickCounter == 2) {
      printPlayerName();
      textContainer.innerText = demon[1];
      singleButton.innerText = "I want to forever be King.";
    } else if (clickCounter == 3) {
      textContainer.innerText = demon[2];
      singleButton.innerText = "...";
    } else {
      gameInitialLoop();
    }
  });
  