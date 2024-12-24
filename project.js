// projects

function constructCards(json_obj){
  // Function to dynamically construct cards
  console.log(json_obj);
  var div = '<div class=".col-sm- card" style="width: 18rem; margin:2%">';
  if(json_obj.hasOwnProperty('image') && json_obj['image'] != "") {
      div += '<img class="card-img-top" src="'+json_obj['image']+'" alt="Card image cap">';
  }
  div += '<div class="card-body">';
  if(json_obj.hasOwnProperty('title') && json_obj['title'] != "") {
      div += '<h5 class="card-title">'+json_obj['title']+'</h5>';
  }
  if(json_obj.hasOwnProperty('desc') && json_obj['desc'] != "") {
    div += '<p class="card-text">'+json_obj['desc']+'</p>';
  }
  if(json_obj.hasOwnProperty('link') && json_obj['link'] != "" & json_obj.hasOwnProperty('link_title') && json_obj['link_title'] != "") {
    div += '<a href="'+json_obj['link']+'" class="btn btn-primary">'+json_obj['link_title']+'</a>';
  }
  div += '</div>'
  div += "</div>";
  return div;
}

function undergraduate_project_load(){
    // funciton to load undergraduate projects
    console.log("starting to print projects");
    var div = "";
    objects = [
        {'title': 'Word Level Sign Language Detection in Real Time', 'link': 'https://drive.google.com/drive/folders/1VCUBiMu3N54jU9R6HH82CsBI9GhJlQ6N?usp=sharing', 'link_title': 'Project Report'},
        {'title': 'Visual Narrator', 'link': 'https://drive.google.com/drive/folders/1cLtFQMXZwPMK4uzwXTZjyTIhGmFidrgP?usp=sharing', 'link_title': 'Project Report'},
        {'title': 'Smart Home Control Appliances', 'link': 'https://drive.google.com/drive/folders/1DB31fZhL9re4-xgKTeJtqW5gyXcZbVc7?usp=sharing', 'link_title': 'Project Report'},
        {'title': 'Automated Script Checking System', 'link': 'https://drive.google.com/drive/folders/1KXzaHNoMz1ADTYATPQ6Btlm82AKJ2Hvq?usp=sharing', 'link_title': 'Project Link'},
        {'title': 'Bangla Cyberbullying Detection', 'link': 'https://drive.google.com/drive/folders/1kfNArXLZf-mXXW1-UOIC4UsJCUSuSXty?usp=sharing', 'link_title': 'Project Report'},
        {'title': 'Custom Simplified Copy Checker', 'link': 'https://github.com/rizveeredwan/copy-checker', 'link_title': 'Github Repository'}
    ]
    for(var i=0; i<objects.length; i++){
      console.log(objects[i]);
      let str = constructCards(objects[i]);
      div += str;
    }
    //console.log("oh no " + div);
    $('#student_project_div').append(div);
    return;
}
//alert("came here");
undergraduate_project_load();

function prep_single_div_projects(json_obj){
  let div = '<div class="card" style="margin-top:10px">'; 
  if(json_obj.hasOwnProperty('title') && json_obj['title'] != ""){
      if(json_obj.hasOwnProperty('img_src') && json_obj['img_src'] != "") {
          div += '<img src="'+ json_obj['img_src'] + '"alt="Card Image" width="200px" height="100px">';
      }
      div += '<div class="card-content" style="margin-left:5px;">';
      div += '<h2 class="card-title" style="font-family:roboto;">'+json_obj['title']+'</h2>'; 
      div += '<p class="card-description" style="font-family:roboto">';
      div += json_obj['short_description']+'<br>'; 
      div += 'Project Links: ' + json_obj['project_links'];
      div += '</p>'; 
      div += '</div>';
  }
  div += '</div>'; 
  return div; 
}

function prep_div_projects() {
  let data = [
      {'title': "COLAS", 
      'img_src' : "resources/Images/COLAS.jpg", 
      "short_description" : 'COLAS is built from scratch containing two modules. A customized, robust and flexible source code plagiarism detection module. Supporting languages are C, C++, Java and Python. Alongside, an automated real-time source code evaluation module in contest setup built from scratch harnessing distributed and parallel computation, multi-process scheduling and load balancing.',
      "project_links" : '[<a href="https://cognistorm.ai/colas">Plagiarism Detector</a>], [<a href="https://contest.cognistorm.ai/dashboard">COLAS-CONTEST</a>]'
      },
      {
        'title' : 'Bangladesh Quality of Life Indicators (BDQOL)',
        'short_description': 'This project was done under the supervision of <a href="https://www.dndlab.org/">Data and Design Lab, Dhaka, Bangladesh</a> to understand the socio-economic condition of Bangladesh.'
        ,'project_links' : '<a href="https://bdqol.dndlab.org/">BDQOL</a>'
      },
      {
        'title' : 'MSCLM-A', 
        'short_description': 'Memory flexible language independent Sentence Completion using Language Model based on Arpa file.', 
        'project_links': '<a href="https://github.com/rizveeredwan/MSCLM-A">MSCLM-A</a>'
      },
      {
        'title': 'A context based spell checker for Bangla.',
        'short_description': 'A python implementation of spell checker for Bengali language considering the context of the sentence.',
        'project_links': '<a href="https://github.com/rizveeredwan/CSEDU/tree/main/CSE-4271%5BNLP%5D/context_based_spell_checker/SpellCheckerContext">Repository</a>'
      },
      {
        'title': 'Bangla Parts of Speech (POS) Tagger',
        'short_description': 'A python based implementation for Bengali POS tagging of words in a sentence.',
        'project_links': '<a href="https://github.com/rizveeredwan/Bangla-Parts-of-Speech-Tagger">Source Code</a>'
      },
      {
        'title': 'Sequential Pattern Mining Algorithms',
        'short_description': 'Implementations of various popular sequential pattern mining algorithms.',
        'project_links': '<a href="https://github.com/rizveeredwan/Sequential-Pattern-Mining-Algorithms">Source Code</a>'
      },
      {
        'title': 'Bangla Sentence Corpus',
        'short_description': 'A small corpus of collected raw Bangla sentences from Prothom Alo, Sachalayatan and Somewhere in Bangla Blog.',
        'project_links': '<a href="https://github.com/rizveeredwan/Bangla-Sentences">Bangla Sentences Corpus</a>'
      },
      {
        'title': 'Wordle-Nerdle Solver',
        'short_description': 'An automation of the popular guessing online games, Wordle and Nerdle.',
        'project_links': '<a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a> and <a href="https://nerdlegame.com/">Nerdle</a>'
      },
      {
        'title': 'Competitive Programming Template',
        'short_description': 'All of my cp programming templates can be found here.',
        'project_links': '<a href="https://github.com/rizveeredwan/Competitive-Programming">Templates</a>'
      },
      {
        'title': 'CSEDU',
        'short_description': 'All of my codes, assignments and projects of my BSc and MS life can be found here.',
        'project_links': '<a href="https://github.com/rizveeredwan/CSEDU">CSEDU Codes</a>'
      },
      {
        'title': 'My Kaggle Projects',
        'short_description': 'My Kaggle projects and competitions can be found here.',
        'project_links': '<a href="https://github.com/rizveeredwan/kaggle">Repository</a>'
      },
      {
        'title': 'DownloadTube',
        'short_description': 'An interactive python module to download videos from YouTube.',
        'project_links': '<a href="https://github.com/rizveeredwan/DownloadTube">Repository</a>'
      }
    ]; 
 
  let fs = ""; 
  let val = ""; 
  for(let i=0; i<data.length; i++){
    val = prep_single_div_projects(data[i]);
    fs += val; 
  }
  $('#personal_projects').html(fs); 
  return; 
}

prep_div_projects();
