class NPC {
    constructor(
      lines,
      leftButtonText,
      leftButtonEffect,
      rightButtonText,
      rightButtonEffect
    ) {
      this.lines = lines;
      this.leftButtonText = leftButtonText;
      this.leftButtonEffect = leftButtonEffect;
      this.rightButtonText = rightButtonText;
      this.rightButtonEffect = rightButtonEffect;
    }
  }
  
  let NPCarray = [];
  
  NPCarray.push(
    new NPC(
      "My Liege, I am Lord Gavin, master of the Merchants' Guild. I came in your presence to honor you with this gift.",
      "Are you trying to bribe me?",
      [5, 0, 0, -10],
      "Thank you!",
      [-5, -3, 0, 10]
    )
  );
  NPCarray.push(
    new NPC(
      "My King, the lords of the South are marching to attack us! What should we do?",
      "Hold the army inside the castle!",
      [0, 10, -5, 5],
      "Go to war!",
      [2, -10, 5, -10]
    )
  );
  NPCarray.push(
    new NPC(
      "My King, our enemies in the South asked for a peace treaty. This is great news, right?",
      "No, we will end this war in blood",
      [0, -15, -10, -10],
      "Yes, let's make peace already!",
      [0, 0, 0, 0]
    )
  );
  NPCarray.push(
    new NPC(
      "Sir almighty! The river flow has drought and the crops are dying. We need the help from the Army and the Church to feed the poor.",
      "No, they won't help.",
      [0, -15, 0, 0],
      "I will send them!!",
      [-10, 15, -10, -5]
    )
  );
  NPCarray.push(
    new NPC(
      "My Liege, the neighboring kingdom has offered their prince to marry one of your children. Would you accept it?",
      "No!",
      [0, 0, 0, 0],
      "Yes!",
      [5, 5, 5, 5]
    )
  );
  NPCarray.push(
    new NPC(
      "My Lord, a pandemic has started around the castle and the peasants are dying. We should do something!",
      "Send the army!",
      [0, -10, -10, -5],
      "Send the Church!",
      [-10, -10, 0, -5]
    )
  );
  NPCarray.push(
    new NPC(
      "We just discovered the iron mines have gold! Should we send more men to dig it?",
      "Send the peasants!",
      [0, -20, 0, 10],
      "Send the army!",
      [0, 0, -15, 20]
    )
  );
  NPCarray.push(
    new NPC(
      "The Church would like to implement a new tax and share with the Crown. What do you think?",
      "I will not share my riches with the Church!",
      [-15, 5, 0, 0],
      "Great idea!",
      [15, -10, 0, 10]
    )
  );
  
  NPCarray.push(
    new NPC(
      "Vikings are attacking us from the North! What should we do?",
      "Defend the castle!",
      [-5, 10, -5, 0],
      "Attack them!",
      [5, -5, 10, -5]
    )
  );
  NPCarray.push(
    new NPC(
      "There are merchants outside the Merchant's Guild making too much money. We should stop them!",
      "Let them trade as they please.",
      [0, 5, 0, 0],
      "Arrest them!",
      [0, -5, 0, 5]
    )
  );
  NPCarray.push(
    new NPC(
      "We have caught a few bandits that have been rulling the lower part of the city, what do we do with them?",
      "Have no mercy.",
      [0, -10, 0, 0],
      "Lock them up!",
      [0, 5, 0, 0]
    )
  );
  NPCarray.push(
    new NPC(
      "People are raiding the city hunting women claiming they are witches, should we stop them?",
      "Let them be.",
      [10, -20, 0, 0],
      "Throw them in a dungeon!",
      [-10, 20, 0, 0]
    )
  );
  NPCarray.push(
    new NPC(
      "Your people are starving, my Lord, the price of bread is too high. Please help!",
      "No.",
      [0, -15, 0, -5],
      "Reduce the price of bread!",
      [0, 20, 0, -20]
    )
  );
  NPCarray.push(
    new NPC(
      "Your soldiers are complaining about the wages you're giving them Would you consider raising them?",
      "No.",
      [0, 0, -5, 0],
      "Double their wages!",
      [0, 0, 10, -15]
    )
  );
  NPCarray.push(
    new NPC(
      "My Lord, the Church would like to go on a journey to spread our religion among the other lands. Would you be able to fund it?",
      "No.",
      [-15, -5, 5, 0],
      "Double their wages!",
      [20, 5, 10, -20]
    )
  );
  
  NPCarray.push(
    new NPC(
      "My King! The statue of our prophet is crying! Blood! Blood is comming out of it! We should bring it to the castle! ",
      "No.",
      [-10, 5, 0, 0],
      "Double their wages!",
      [20, 5, 0, -5]
    )
  );
  