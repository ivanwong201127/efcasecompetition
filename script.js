$(document).ready(function(){
    var words = {
        "2-1": ["The professor of this lecture is famous. Do you want to join my lesson?", 
                "Ve al aula!<br>(Go to the classroom!)",
                "¡Ir a la playa!<br>(Go to the beach!)"],
        "2-2": ["The environment around Barcelona is very nice. There's no class today, want to go for a trip?",
                "¡Ir a la playa!<br>(Go to the beach!)",
                "¡Vamos a la Fuente Mágica de Montjuïc!<br>(Let's go to The Magic Fountain of Montjuïc!)"],
        "3-1": ["At the beach...",
                "Let’s walk along the beach to the far side of the sea and chat!”<br> Caminemos! (Let's walk!)",
                "The sun is shining so nicely on the soft sand. Let’s sit down and talk!”<br> Sentémonos (Let’s sit!)"],
        "3-2": ["You seem confused about what the professor is saying. Do you need some help after the class?",
                "Por supuesto. ¿Vamos a Starbucks?<br>(Sure. Shall we go to Starbucks?)",
                "Está bien. Solo necesito el PowerPoint.<br>(It’s ok. I just need the PowerPoint.)"],
        "3-3": ["This is a famous tourist spot in Barcelona. Make a wish here and it will come true!",
                "Make a wish.<br>(I hope I can stay with the one next to me forever...)",
                "Take a photo and Ignore him."],
        "4-1": ["Actually, I really want to know your expectations. Wouldn't it be nice if you talk about...",
                "mis sueños<br>(My dreams.)",
                "Mi novio<br>(My boyfriend.)"],
        "4-2": ["I really want to know more about you. Shall we dine out tonight?",
                "Claro, mi placer!<br>(Sure, my pleasure!)",
                "Lo siento, no soy libre.<br>(Sorry, I am not free.)"],
        "4-3": ["I have a lot to teach you about Spanish. Actually, it's quite amazing you travelled alone to here!",
                "Me encanta la cultura en españa.<br>(I love the culture in Spain.)",
                "Amo a la gente en españa.<br>(I love the people in Spain.)"],
        "4-4": ["I’ll send you after the class! Let’s listen to what the lecturer says first.",
                "¿Puedo sentarme más cerca de ti?<br>(May I sit closer to you?)",
                "La conferencia es tan aburrida ...<br>(The lecture is so boring… )"],
        "5-1": ["If you can dream it, I trust you can accomplish it!",
                "Eres un gran apoyo!<br>(You are so supportive!)",
                "Mis amigos me ayudarán.<br>(My friends will help me.)"],
        "5-2": ["Can you give me your...",
                "Daré mi número de teléfono.<br>(I'll give my phone number.)",
                "Voy a dar miiv Instagram.<br>(I'll give my Instagram.)"],
        "5-3": ["Really? I want to learn Spanish! How about we exchange contacts?",
                "Daré mi número de teléfono.<br>(I'll give my phone number.)",
                "Voy a dar miiv Instagram.<br>(I'll give my Instagram.)"],
        "5-4": ["I love your passion. Interested in a lunch after class?",
                "Sí un placer.<br>(Yes, my pleasure.)",
                "Lo siento, salí con mi amigo.<br>(Sorry, I dated my friend.)"],
        "5-5": ["It’s kind of an issue with this professor. Let me recommend some interesting lessons for you!",
                "¿Qué tal un curso de español?<br>(How about a Spanish course?)",
                "¿Qué tal un curso de estadística?<br>(How about a Statistics course?)"],
        "6-1": ["We are really a perfect match. How about we register the same Spanish course this semester?",
                "Te seguiré.<br>(I will follow you.)",
                "Déjame pensar en ello.<br>(Let me think about it.)"],
        "6-2": ["We are really a perfect match. How about we register the same Statistics course this semester? We can support each other!",
                "Te seguiré.<br>(I will follow you.)",
                "Déjame pensar en ello.<br>(Let me think about it.)"],
            };
    var left_links = {
        "1-1": "2-1", "2-1": "3-2", "2-2": "3-1", "3-1": "4-1", "3-2": "4-3", "3-3": "4-1", "4-1": "5-1", "4-2": "5-2", "4-3": "5-3",
        "4-4": "5-4", "5-1": "6-1", "5-2": "7-2", "5-3": "7-2", "5-4": "6-1", "5-5": "6-1", "6-1": "7-1", "6-2": "7-1"};
    var right_links = {
        "1-1": "2-2", "2-1": "3-2", "2-2": "3-3", "3-1": "4-1", "3-2": "4-4", "3-3": "4-2", "4-1": "5-2", "4-2": "7-1", "4-3": "4-1",
        "4-4": "5-5", "5-1": "7-3", "5-2": "7-2", "5-3": "7-2", "5-4": "7-3", "5-5": "6-2", "6-1": "4-2", "6-2": "7-3"};
    
        //setting default
        $("header").height($(window).height()*0.15);
        $(".welcome-btn").click(function(e){
                e.preventDefault();
                $("body").fadeOut(800);
                setTimeout(function () {
                        window.location.href = "subpages/1-1.html"; //will redirect to your blog page (an ex: blog.html)
                }, 500);

        });
        //setting properties
    $("footer").height($(window).height()*0.05);
    $(".top-panel").height($(window).height()*0.1);
    $(".left-panel").css("min-height",$(window).height()*0.7);
    $(".right-panel").css("min-height",$(window).height()*0.7);
    $(".left-image").hide(0).slideDown(500);
    $(".right-image").hide(0).slideDown(500);
    $(".left-button").hide(0).delay(200).fadeIn(500);
    $(".right-button").hide(0).delay(200).fadeIn(500);
    $(".seven-one").hide(0).delay(200).fadeIn(800);
    $(".eight-one").hide(0).delay(200).fadeIn(800);
    $(".eight-two").hide(0).delay(200).fadeIn(800);
    //registering filename
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1).replace(".html","");
    //setting the words
    try{
        $(".top-panel p").html(">>> " + (words[filename][0]).replace(" "," ").replace("’","'"));   
        $(".left-button-word").html("<strong>" + (words[filename][1]).replace(" "," ").replace(" "," ").replace("’","'") + "</strong>");
        $(".right-button-word").html("<strong>" + (words[filename][2]).replace(" "," ").replace(" "," ").replace("’","'") + "</strong>"); 
    }catch(e){

    }
   
    //setting the images
        $(".left-image").attr("src","../asset/" + filename + "-1.jpg").on("error",function(){
            $(".left-image").attr("src","../asset/" + filename + "-1.png");
        });
        $(".right-image").attr("src","../asset/" + filename + "-2.jpg").on("error",function(){
            $(".right-image").attr("src","../asset/" + filename + "-2.png");
        });
    //links
    try{
        $(".left-panel a").attr("href","../subpages/"+ left_links[filename] +".html");
        $(".right-panel a").attr("href","../subpages/"+ right_links[filename] +".html");
    }catch(e){
    }
})