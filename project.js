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
