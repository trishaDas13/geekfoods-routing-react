import './Quote.css';

function Quote(){
    return(
        <main>
            <Cards 
            quote="It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding." 
            authorName = "Adam Scott"
            />
            <Cards 
            quote="We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are."
            authorName = "Adelle Davis"
            />
            <Cards 
            quote="It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding." 
            authorName = "Adelle Davis"
            />
            <Cards 
            quote="Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet."
            authorName = "Albert Einstein"
            />
            <Cards 
            quote="It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding." 
            authorName = "Adam Scott"
            />
            <Cards 
            quote="Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth." 
            authorName = "Alice May Brock"
            />
            <Cards 
            quote="Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, Your fatness is an affront to me, so we have the right to treat you as offensively as you appear. Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up." 
            authorName = "Adam Scott"
            />
            <Cards 
            quote="It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding." 
            authorName = "Anthelme Brillat-Savarin"
            />
            <Cards 
            quote="Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!"
            authorName = "Calvin Trillin"
            />
            <Cards 
            quote="Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good." 
            authorName = "Calvin Trillin"
            />
             <Cards 
            quote="Tell me what you eat, and I will tell you what you are." 
            authorName = "Cyra McFadden"
            />
             <Cards 
            quote="Health food makes me sick." 
            />
             <Cards 
            quote="Bear in mind that you should conduct yourself in life as at a feast." 
            authorName = "George Bernard Shaw"
            />
             <Cards 
            quote="I have never cared much for fish - it floats in the belly as much as in the pond." 
            authorName = "Henry Bromel"
            />
             <Cards 
            quote="If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony." 
            authorName = "J. R. R. Tolkien"
            />
             <Cards 
            quote="Food is an important part of a balanced diet."
            />
             <Cards 
            quote="Music with dinner is an insult both to the cook and the violinist."
            />
             <Cards 
            quote="Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean."
            />
             <Cards 
            quote="We don't get fat because we overeat; we overeat because we're getting fat."
            />
             <Cards 
            quote="Good food ends with good talk."
            />
             <Cards 
            quote="There is no love sincerer than the love of food."
            />
             <Cards 
            quote="What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease."
            />
             <Cards 
            quote="It's important to begin a search on a full stomach."
            />
             <Cards 
            quote="If more of us valued food and cheer and song above hoarded gold, it would be a merrier world."
            />
             <Cards 
            quote="Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth." 
            authorName = "Alice May Brock"
            />
             <Cards 
            quote="Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth." 
            authorName = "Alice May Brock"
            />
             <Cards 
            quote="Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth." 
            authorName = "Alice May Brock"
            />
             <Cards 
            quote="Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth." 
            authorName = "Alice May Brock"
            />
             <Cards 
            quote="Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth." 
            authorName = "Alice May Brock"
            />
             <Cards 
            quote="Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth." 
            authorName = "Alice May Brock"
            />
        </main>
    );
}

function Cards(props){
    return(
        <div className="card_quote">
            <h1>{props.quote}</h1>
            <p>{props.authorName}</p>
        </div>
    );
}
   



export default Quote;