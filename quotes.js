$(document).ready(function(){

	function quote(quote, author) {
	    //Generates an object with a quote and its author
		this.quote = "<i class='fa fa-quote-left' aria-hidden='true'></i> " + quote + " <i class='fa fa-quote-right' aria-hidden='true'></i>";
		this.author = "- " + author + ".";
	}
	function quoteGenerator(quoteType){
		//generates a new quote, funny or a thinker one, depending on wich button is clicked
		$colored.css("background-color", colors[Math.floor(Math.random()*colors.length)]);
	    while(i === j){
	      i=Math.floor(Math.random()*quoteType.length);
	    }
	    j=i;
		$('#quote-area').fadeOut(500, function(){
			$quote.html(quoteType[i].quote);
			$author.html(quoteType[i].author);
	    });
	    $('#quote-area').fadeIn(500);
	}
	  
	var thinkerQuotes = [], funnyQuotes = [];
	var i = Math.floor(Math.random() * thinkerQuotes.length), j=0;
	var colors = ["#77D1CC", "#AF0034", "cornflowerblue", "#FF6B99", "deepskyblue", "darkturquoise", "#70004E", "#9E0051", "#14536D", "#55c755", "#51bfed", "#ffb37c", "#56ceff", "#97ffe3", "#00d070", "#fa016b", "#714568", "#bf6aab", "#a2e4ff", "#f7ee1d","#c92929","#9b2a44","#65e5e5","#c382b9","#0157fa","#44d07f","#ffc812","#aa0d7a"];
	var $quote = $('#Quote') , $author = $('#Author') , $colored = $('button, #quote-area-bg');
	var $nfq = $('#newFunnyQuote') , $ntq = $('#newThinkerQuote');

	thinkerQuotes[0] = new quote("I never think of the future. It comes soon enough." , "Albert Einstein");
	thinkerQuotes[1] = new quote("Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will  live its whole life believing that it is stupid." , "Albert Einstein");
	thinkerQuotes[2] = new quote("I am rather inclined to silence, and whether that be wise or not, it is at least more unusual nowadays to find a man who can hold his tongue than to fin one who cannot." , "Abraham Lincoln");
	thinkerQuotes[3] = new quote("There is nothing more dreadful than the habit of doubt. Doubt separates people. It is a poison that disintegrates friendships and breaks up pleasant relations. It is a thorn that irritates and hurts; it is a sword that kills." , "Budha");
	thinkerQuotes[4] = new quote("I have always imagined that paradise will be a kind of library." , "Jorge Luis Borges");
	thinkerQuotes[5] = new quote("No matter how busy you may think you are, you must find time for reading, or surrender yourself to self-chosen ignorance." , "Confucius");
	thinkerQuotes[6] = new quote("It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change." , "Charles Darwin");
	thinkerQuotes[7] = new quote("Twenty years from now you will be more disappointed by the things that you didn't do that by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", "Mark Twain");
	thinkerQuotes[8] = new quote("Intelligence is so damn rare and the people who have it often have such a bad time with it that they get bitter or propagandistic and then it's not much use." , "Ernest Hemingway");
	thinkerQuotes[9] = new quote("Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love." , "Fyodor Dostoevsky");
	thinkerQuotes[10] = new quote ("Great minds discuss ideas; average minds discuss events; small minds discuss people.", "Eleanor Roosevelt");
	thinkerQuotes[11] = new quote ("I have not failed. I’ve just found 10,000 ways that won’t work.", "Thomas A. Edison");
	thinkerQuotes[12] = new quote ("If you’re going through hell keep going.", "Winston Churchill");
	thinkerQuotes[13] = new quote ("Don’t raise your voice, improve your argument.", "Anonymous");
	thinkerQuotes[14] = new quote ("Don’t be afraid to give up the good to go for the great.", "John D. Rockefeller");
	thinkerQuotes[15] = new quote ("I wanted a perfect ending. Now I’ve learned, the hard way, that some poems don’t rhyme, and some stories don’t have a clear beginning, middle, and end. Life is about not knowing, having to change, taking the moment and making the best of it, without knowing what’s going to happen next. Delicious Ambiguity.", "Gilda Radner");
	thinkerQuotes[16] = new quote ("Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.", "Nathaniel Hawthorne");
	thinkerQuotes[17] = new quote ("If you can’t explain it simply, you don’t understand it well enough.", "Albert Einstein");
	thinkerQuotes[18] = new quote ("Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M. Baruch");
	thinkerQuotes[19] = new quote ("Life is not about finding yourself. Life is about creating yourself.", "George Bernard Shaw");
	thinkerQuotes[20] = new quote ("The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", "Isaac Asimov");
	thinkerQuotes[21] = new quote ("To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson");
	thinkerQuotes[22] = new quote ("Only put off until tomorrow what you are willing to die having left undone.", "Pablo Picasso");
	thinkerQuotes[23] = new quote ("People often say that motivation doesn’t last. Well, neither does bathing - that’s why we recommend it daily.", "Zig Ziglar");
	thinkerQuotes[24] = new quote ("Whenever you find yourself on the side of the majority, it is time to pause and reflect.", "Mark Twain");
	thinkerQuotes[25] = new quote (" The reason most people never reach their goals is that they don’t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.", "Denis Watiley");
	thinkerQuotes[26] = new quote ("The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.", "Martin Luther King Jr.");
	thinkerQuotes[27] = new quote ("Don’t cry because it’s over, smile because it happened.", "Dr. Seuss");
	thinkerQuotes[28] = new quote ("You only live once, but if you do it right, once is enough.", "Mae West");
	thinkerQuotes[29] = new quote ("In three words I can sum up everything I’ve learned about life: it goes on.", "Robert Frost");
	funnyQuotes[0] = new quote("My computer beat me at checkers, but i sure beat it at kickboxing." , "Emo Philips");
	funnyQuotes[1] = new quote("I couldn't repair your brakes, so i made your horn louder." , "Steven Wright");
	funnyQuotes[2] = new quote("People who think they know everything are a great annoyance to those of us who do." , "Isaac Asimov");
	funnyQuotes[3] = new quote("I'm sorry, if you were right, I'd agree with you." , "Robin Williams");
	funnyQuotes[4] = new quote("The first time I sang in the church choir; two hundred people changed their religion." , "Fred Allen");
	funnyQuotes[5] = new quote("My uncle Sammy was an angry man. He had printed on his tombstone: What are you looking at?" , "Margaret Smith");
	funnyQuotes[6] = new quote("People always ask me, 'Were you funny as a child?' Well, no, i was an accountant" , "Ellen DeGeneres");
	funnyQuotes[7] = new quote("Always borrow money from a pessimist. He won’t expect it back." , "Oscar Wilde");
	funnyQuotes[8] = new quote("First the doctor told me the good news: I was going to have a disease named after me." , "Steve Martin");
	funnyQuotes[9] = new quote("The only mystery in life is why the kamikaze pilots wore helmets." , "Al McGuire");
	funnyQuotes[10] = new quote ("When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.", "Bob Monkhouse");
	funnyQuotes[11] = new quote ("How do you get a sweet little 80-year-old lady to say the F word? Get another sweet little 80-year-old lady to yell 'BINGO!'", "Anonymous");
	funnyQuotes[12] = new quote ("Why do people say 'no offense' right before they’re about to offend you?", "Anonymous");
	funnyQuotes[13] = new quote ("Nothing sucks more than that moment during an argument when you realize you're wrong.", "Darynda Jones");
	funnyQuotes[14] = new quote ("I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness.", "Emo Philips");
	funnyQuotes[15] = new quote ("Patience is something you admire in the driver behind you, but not in one ahead.", "Bill McGlashen");
	funnyQuotes[16] = new quote ("I dream of a better tomorrow, where chickens can cross the road and not be questioned about their motives.", "Ralph Waldo Emerson");
	funnyQuotes[17] = new quote ("I read recipes the same way I read science fiction. I get to the end and I think, 'Well, that’s not going to happen.'", "Rita Rudner");
	funnyQuotes[18] = new quote ("I'm not afraid of death; I just don't want to be there when it happens.", "Woody Allen");
	funnyQuotes[19] = new quote ("The reason I talk to myself is because I’m the only one whose answers I accept.", "George Carlin");
	funnyQuotes[20] = new quote ("I am free of all prejudice. I hate everyone equally. ", "W.C. Fields");
	funnyQuotes[21] = new quote ("I refuse to answer that question on the grounds that I don't know the answer.", "Douglas Adams");
	funnyQuotes[22] = new quote ("When you're in jail, a good friend will be trying to bail you out. A best friend will be in the cell next to you saying, 'Damn, that was fun'.", "Groucho Marx");
	funnyQuotes[23] = new quote ("Some humans would do anything to see if it was possible to do it. If you put a large switch in some cave somewhere, with a sign on it saying 'End-of-the-World Switch. PLEASE DO NOT TOUCH', the paint wouldn't even have time to dry.", "Terry Pratchett");
	funnyQuotes[24] = new quote ("When his life was ruined, his family killed, his farm destroyed, Job knelt down on the ground and yelled up to the heavens, 'Why god? Why me?' and the thundering voice of God answered: 'There's just something about you that pisses me off'.", "Stephen King");
	funnyQuotes[25] = new quote ("If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it.", "W.C. Fields");
	funnyQuotes[26] = new quote ("According to most studies, people’s number one fear is public speaking. Number two is death. Death is number two! Does that sound right? That means to the average person, if you go to a funeral, you’re better off in the casket than doing the eulogy.", "Jerry Seinfield");
	funnyQuotes[27] = new quote ("Every now and then I like to do as I'm told, just to confuse people.", "Tamora Pierce");
	funnyQuotes[28] = new quote ("The human brain is a wonderful thing. It starts working the moment you are born, and never stops until you stand up to speak in public.", "George Jessel");
	funnyQuotes[29] = new quote ("To keep your marriage brimming, with love in the loving cup, whenever you’re wrong admit it; whenever you’re right shut up.", "Ogden Nash");
	//Initial values.
	$quote.html(funnyQuotes[i].quote);
	$author.html(funnyQuotes[i].author);
	$colored.css("background-color", colors[Math.floor(Math.random()*colors.length)]);

	$nfq.on("click", function() {
		//when the new funny quote is clicked it generates a new funny quote.
	    quoteGenerator(funnyQuotes);
	});
	$ntq.on("click",function() {
		//when the new philosophical quote is clicked it generates a new philosophical quote.
		quoteGenerator(thinkerQuotes);
    });

});