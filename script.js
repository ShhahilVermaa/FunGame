// Romantic cards
const romanticCards = [
    "Hold each other close and imagine what will happen when the night is over…",
    "Describe the most passionate kiss you’ve ever had with them",
    "Slowly remove one item of clothing — and tell them why you chose it",
    "Take turns whispering what you want to do later tonight",
    "Trace their shoulder or neck with your fingertips, just once, then stop",
    "Tell them exactly what attracts you most about them",
    "Look into their eyes as you slowly walk your fingers down their arm",
    "Tell your partner the first memory that made you want them",
    "Kiss them anywhere you choose above the shoulders",
    "Lean in and make them *wait* before your lips meet",
    "Tell them the most daring thought you’ve had about them today",
    "Pick a moment from your past together you’d relive right now",
    "Hold their hands against you and close your eyes",
    "Give them a kiss that promises more to come",
    "Whisper something only they will understand is a hint",
    "Pull them as close as you can without fully embracing",
    "Describe what you would be doing if you were alone in a bedroom",
    "Touch their cheek softly, then their lips with your finger",
    "Look at them in silence until they make the first move",
    "Say their name in the most longing way you can",
    "Tell them the wildest place you’ve thought of being together",
    "Keep your lips one inch away from theirs for 10 seconds",
    "Ask them to imagine you undressing — keep eye contact",
    "Tell them your favorite time of day for intimacy and why",
    "Describe the first touch you want tonight",
    "Tell them what they do that makes you weak",
    "Give a kiss where your lips barely touch theirs",
    "Whisper ‘I dare you…’ and let them ask what",
    "Look at them as though you’re imagining them naked",
    "Tell them a secret fantasy beginning, but not the ending"
];

// Flirty cards
const flirtyCards = [
    "Remove one item of clothing — slowly — while holding eye contact",
    "Stand as close as possible without touching… and smile",
    "Run a finger along their waistband or collar",
    "Ask them to guess what position you’re thinking of (don’t say it out loud)",
    "Turn your back and look over your shoulder at them like you want something",
    "Take their hand and place it somewhere you like being touched",
    "Brush against them as you walk past, deliberately",
    "Pull them by the waist for two seconds then let go",
    "Tell them what part of their body you want to explore tonight",
    "Look at their lips, then their eyes, then their lips again",
    "Stroke their hair and lean close enough for them to feel your breath",
    "Stand behind them and murmur something good in their ear",
    "Invite them to choose what you remove next",
    "Take their hand and guide it, without speaking",
    "Ask them to hold you in any way they want",
    "Tease them with a short kiss and walk away smiling",
    "Trace a slow circle somewhere on their body",
    "Lift their chin and look at them like you’re about to break rules",
    "Choose a 'pose' you want to see them in and have them guess it",
    "Ask them to imagine you as you get ready for bed",
    "Pretend you’re about to take off something — but stop",
    "Sit where they can admire you and tell them they can’t touch… yet",
    "Tell them the next thing they say will determine if you kiss them",
    "Stroke their fingers one by one slowly",
    "Stand between their knees and lean in without kissing",
    "Dance for them for ten seconds — no touching allowed",
    "Ask them to name one part of you they want bare",
    "Let them pick any word and make you say it seductively",
    "Exchange one deep, lingering look without smiling",
    "Ask them how they’d want the night to end — make them whisper it"
];

// Dare cards
const dareCards = [
    "Remove one item of clothing right now",
    "Pose in any way your partner asks — for five seconds",
    "Ask your partner to choose somewhere to kiss you",
    "Let them close their eyes while you decide what to do next",
    "Pretend it's your first night together — act accordingly",
    "Sit in their lap until the next turn",
    "Let your partner position you anywhere in the room (non-verbal)",
    "Cover their eyes and surprise them",
    "Whisper exactly what you want them to do right now",
    "Pretend to undress them without touching",
    "Ask them to describe how you look right now",
    "Stand behind them and wrap your arms around them tightly",
    "Give your slowest possible turn in front of them",
    "Hold their hands behind their back (or vice versa) for 10 seconds",
    "Let them move you into their chosen 'close' position",
    "Pretend you’re in a slow, intimate dance",
    "Hold still while they touch or move you once",
    "Kiss as though you have to stop yourself midway",
    "Whisper one word that will make them imagine the rest",
    "Let them instruct you without speaking — only gestures",
    "Offer them one place to touch you — anywhere",
    "Give them a slow turn, stopping when they touch you",
    "Stand chest to chest until someone laughs — loser obeys a command",
    "Let them lift, lean, or guide you into a suggestive pose",
    "Move your body as if you’re imagining them closer",
    "Kiss somewhere safe… while thinking of somewhere else",
    "Mimic a scene from a movie they like — in your own way",
    "Take off something small and hand it to them",
    "Pose like a statue they’d want to keep",
    "Move in slow motion as they watch, doing anything you want"
];

// Wild cards
const wildCards = [
    "Choose a position you’ve never tried and show it without naming it",
    "Remove an item without using your hands",
    "Stand as if about to be kissed, but wait",
    "Ask them to position you somewhere in the room",
    "Close your eyes and let them guide you anywhere in the space",
    "Arrange yourselves in the most romantic way possible — hold for 15 sec",
    "Climb onto their lap or pull them onto yours",
    "Sit back and invite them with just your eyes",
    "Challenge them to a 'pose guessing game'",
    "Pick a body part to focus on for one full minute",
    "Create a scene as if you were lovers in a movie",
    "Let your partner remove the next item from you",
    "Move your bodies together to an imaginary slow beat",
    "Show them a position only in silhouette form with your body",
    "Lie down exactly how you want them to find you",
    "Pretend you’re on the edge of doing something forbidden",
    "Take turns silently acting out a fantasy for the other to guess",
    "Let them place your hands anywhere they choose",
    "Hold a position for 10 seconds while they circle you",
    "Make half a move toward them — wait for them to complete it",
    "Kneel, sit, or stand somewhere they direct — no questions",
    "Pretend you’re showing off in private",
    "Let them direct you into their favorite position",
    "Demonstrate how you’d want them to come close",
    "Choose a 'romantic sculpture' pose together",
    "Without speaking, act out the start of a fantasy",
    "Lie or sit and be still while they take one move towards you",
    "Close in until your foreheads touch — hold there",
    "Offer them your hand and see what they do",
    "Show them your idea of ‘ready’ without words"
];

// Positions deck with image paths
const positionsCards = [
    { title: "Stand And Deliver", img: "positions/position1.jpg" },
    { title: "Face off", img: "positions/position2.jpg" },
    { title: "Happy baby", img: "positions/position3.jpg" },
    { title: "Standing O", img: "positions/position4.jpg" },
    { title: "The Cat", img: "positions/position5.jpg" },
    { title: "The Captain", img: "positions/position6.avif" },
    { title: "One Up", img: "positions/position7.avif" },
    { title: "The CowGirl", img: "positions/position8.avif" },
    { title: "The Hot Seat", img: "positions/position9.avif" },
    { title: "Reverse CowGirl", img: "positions/position10.avif" },
    { title: "The Pole Position", img: "positions/position11.avif" },
    { title: "The Lazy Man", img: "positions/position12.avif" },
    { title: "Trick & Treat", img: "positions/position13.avif" },
    { title: "Heir to the Throne", img: "positions/position14.avif" },
    { title: "Closed for Business", img: "positions/position15.avif" },
    { title: "The Pretzel", img: "positions/position16.avif" },
    { title: "Yourself on the Shelf", img: "positions/position17.avif" },
    { title: "The Shoulder Holder", img: "positions/position18.avif" },
    { title: "Doggy Style", img: "positions/position19.avif" },
    { title: "The Ballet Dancer", img: "positions/position20.avif" },
    { title: "The Standing Dragon", img: "positions/position21.avif" },
    { title: "The Mountain Climber", img: "positions/position22.avif" },
    { title: "The Pillow Driver", img: "positions/position23.avif" },
    { title: "The Spoon", img: "positions/position24.avif" },
    { title: "Open-Legged Spoon", img: "positions/position25.avif" },
    { title: "Hovering Butterfly", img: "positions/position26.avif" },
    { title: "69", img: "positions/position27.avif" },
    { title: "The Bees Knees", img: "positions/position28.avif" },
    { title: "The Seashell", img: "positions/position29.avif" },
    { title: "Gift Wrapped", img: "positions/position30.avif" }
];

// Get cards array by category
function getCardsByCategory(category) {
    switch (category) {
        case "romantic": return romanticCards;
        case "flirty": return flirtyCards;
        case "dare": return dareCards;
        case "wild": return wildCards;
        case "positions": return positionsCards;
        default: return [];
    }
}

// Draw and display a card
function drawCard() {
    const category = document.getElementById("category").value;
    const cards = getCardsByCategory(category);

    if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length);
        const card = cards[index];

        const imgElement = document.getElementById("positionImage");
        const titleElement = document.getElementById("positionTitle");
        const textElement = document.getElementById("textPrompt");

        if (category === "positions") {
            imgElement.src = card.img;
            imgElement.alt = card.title;
            imgElement.style.display = "block";
            titleElement.textContent = card.title;
            textElement.textContent = "";
        } else {
            imgElement.style.display = "none";
            titleElement.textContent = "";
            textElement.textContent = card;
        }
    }
}

// Event listeners for buttons
document.getElementById("drawBtn").addEventListener("click", drawCard);

document.getElementById("skipBtn").addEventListener("click", () => {
    const imgElement = document.getElementById("positionImage");
    const titleElement = document.getElementById("positionTitle");
    const textElement = document.getElementById("textPrompt");
    imgElement.style.display = "none";
    titleElement.textContent = "";
    textElement.textContent = "Skipped! Choose another card 💌";
});
