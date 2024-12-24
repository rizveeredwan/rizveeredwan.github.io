$(document).ready(function(){

  let options = {
    pages: ['index.html', 'experience.html', 'projects.html', 'publications.html', 'hobby.html'],
    keys: ['home', 'experience', 'projects', 'publications', 'hobby'],
    names:  ['Home', 'Experience', 'Projects', 'Publications', 'Hobby'],
  }

  let current_key = "";

  // jQuery methods go here...
  function getCurrentUrl(){
    let url = window.location.href.split('/');
    url = url[url.length-1].split('#')[0];
    for(let i=0; i<options.keys.length; i++){
      if (options.pages[i] == url) {
        current_key = options.keys[i];
        break;
      }
    }
    console.log(current_key)
    if (current_key === "") {
      current_key = options.keys[0];
    }
  }
  getCurrentUrl();

  function detectDevice() {
    let isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isMobile = true;
    }
    return isMobile
  }

  function renderNavigation(){
    let string = '<ul class="navbar-nav ml-auto>';
    let active_status = "";
    for(let i=0; i<options.keys.length; i++){
      active_status = "";
      if (current_key == options.keys[i]) {
        active_status = "active";
      }
      string += '<li class="nav-item ' + active_status +'" >';
      if (active_status === "active") {
        string += '<li class="nav-item active" >';
        string += '<a class="nav-link" style="color:#2e86c1;" href="'+options.pages[i]+'">'+options.names[i]+'</a>';
      }
      else{
        string += '<li class="nav-item" >';
        string += '<a class="nav-link" href="'+options.pages[i]+'">'+options.names[i]+'</a>';
      }
      string += '</li>';
    }
    string += '</ul>';
    $('#navbarNav').html(string);

    // mobile navigation
    string = "";
    for(let i=0; i<options.keys.length; i++){
      active_status = "";
      if (current_key == options.keys[i]) {
        active_status = "active";
      }
      if (active_status == "active") {
        string += '<a style="color:#2e86c1;" href="'+options.pages[i]+'">'+options.names[i]+'</a>';
      }
      else{
        string += '<a style="color:black;" href="'+options.pages[i]+'">'+options.names[i]+'</a>';
      }
    }
    $('#myLinks').html(string);
    /*let isMobile = detectDevice();
    if (isMobile === true) {
        $('#normal_navigation').hide();
    }
    else{
        //$('#mobile_navigation').hide();
    }*/
  }
  renderNavigation();

  function screenSizeControl(x) {
      if (x.matches) { // If media query matches
        $('#normal_navigation').hide();
        $('#mobile_navigation').show();
      } else {
        $('#normal_navigation').show();
        $('#mobile_navigation').hide();
      }
  }

  var x = window.matchMedia("(max-width: 900px)")
  screenSizeControl(x) // Call listener function at run time
  x.addListener(screenSizeControl) // Attach listener function on state changes

  function constructTable(column_names, column_values){
    let string = "";
    string += '<thead>';
    string += '<tr>';
    for (let i = 0; i<column_names.length; i++){
      string += '<th class="th-sm">'+column_names[i]+'</th>';
    }
    string += '</tr>';
    string += '</thead>';

    string += '<tbody>';
    for (let i = 0; i<column_values.length; i++){
      console.log("column values ", column_values[i]);
      string += '<tr>';
      for(let j=0; j<column_names.length; j++){
        string += '<td>'+column_values[i][j]+ '</td>';
      }
      string += '</tr>';
    }
    string += '</tbody>';
    string += '<tfoot>';
    string += '<tr>';
    for (let i=0; i<column_names.length; i++){
      string += '<th class="th-sm">'+column_names[i]+'</th>';
    }
    string += '</tr>';
    string += '</tfoot>';
    return string;
  }

  function constructInfoDiv(json_obj, index=0){
      var div = "<div>";
      console.log(json_obj, json_obj.hasOwnProperty('title'), 'title' in json_obj, typeof(json_object));
      if(json_obj.hasOwnProperty('title') && json_obj['title'] != "") {
          div += json_obj['title']+'<br>';
      }
      var name;
      let short_des = ""; 
      for (key in json_obj){
        if (key.toLowerCase() == 'short_description') {
            index++;
            div += '<strong style="color:red; cursor: pointer;" class="show_short_des_div" id="button_short_des_'+index.toString()+'">[Short Description]</strong>'; 
            short_des += '<div style="color:black; display:none; font-family:roboto;" id="detail_short_des_'+index.toString()+'">' + json_obj[key] + '</div>'; 
        }
        else if (key.toLowerCase() != 'title') {
          console.log("key ", key);
          name = key[0].toUpperCase()+key.slice(1);
          div += '<a href="'+json_obj[key]+'" >'+'['+name+']</a>' ;
        }
      }
      div += '</br>';
      div += short_des;

      div += '</div>';
      console.log(div)
      return div;
  }

  function readFromCSV_publications(name){
    var conference_names = [];
    var publications = [];

    if (name == 'conference') {
      column_names = ['Conference'];
      publications = [
        {'title': 'Bappy, Faisal Haque, Saklain Zaman, Tariqul Islam, <strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Joon S. Park, and Kamrul Hasan. "Towards Immutability: A Secure and Efficient Auditing Framework for Cloud Supporting Data Integrity and File Version Control." arXiv preprint arXiv:2308.04453 (2023).'
          ,'paper' : './resources/Published Papers/2308.04453v1.pdf', 'code': 'https://github.com/rizveeredwan/persistent-markel-hash-tree' 
        },
        {'title':'<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Arefin, M.F., Ahmed, C.F. (2020). Tree-Miner: Mining Sequential Patterns from SP-Tree. In: Lauw, H., Wong, RW., Ntoulas, A., Lim, EP., Ng, SK., Pan, S. (eds) Advances in Knowledge Discovery and Data Mining. PAKDD 2020. Lecture Notes in Computer Science, vol 12085. Springer, Cham. https://doi.org/10.1007/978-3-030-47436-2_4', 
        'paper':"https://drive.google.com/file/d/1frNezmqqcPZeYa3YQPzL_eWIXR4_gYZm/view?usp=sharing'>Paper</a>"
        },
        {'title':'<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Shahin, M.S.H., Ahmed, C.F., Leung, C.K., Deng, D., Mai, J.J.: Sliding window based weighted periodic pattern mining over time series data. In: ICDM 2019, pp. 118-132 (2019) ICDM 2019 Proceedings, \"Advances in Data Mining: Applications and Theoretical Aspects\", is an open access proceedings book. (954.8Kb)', 
          'paper': 'https://drive.google.com/file/d/1xLMC-gsBUjCz2mXjMZNxnabs1DWHvDM_/view?usp=sharing'},
        {'title': '<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Zaber, M. (2021). How Newspapers Portrayed COVID-19. In: Byrski, A., Czachórski, T., Gelenbe, E., Grochla, K., Murayama, Y. (eds) Computer Science Protecting Human Society Against Epidemics. ANTICOVID 2021. IFIP Advances in Information and Communication Technology, vol 616. Springer, Cham. https://doi.org/10.1007/978-3-030-86582-5_5' , 
        'paper': 'https://drive.google.com/file/d/1cbjVD3wVh-0jn--dN5SkJh4N7SMv97KZ/view?usp=sharing',
        'code' : 'https://github.com/rizveeredwan/covidnews'},
        {'title': 'Dewan, U., Ahmed, C.F., Leung, C.K., <strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Deng, D., Souza, J.: An efficient approach for mining weighted frequent patterns with dynamic weights. In: ICDM 2019, pp. 13-27 (2019) ICDM 2019 Proceedings, \"Advances in Data Mining: Applications and Theoretical Aspects\", is an open access proceedings book. (979.1Kb)' , 
          'paper': 'https://drive.google.com/file/d/1GogVYGnFzHizZcvt_Z7aXrhPoikl4eNR/view?usp=sharing'},
        {'title': 'Wahed, M., <strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong> , Haque, R. R., Ali, A. M., Zaber, M., & Ali, A. A. (2020, June). What Can Nighttime Lights Tell Us about Bangladesh?. In 2020 IEEE Region 10 Symposium (TENSYMP) (pp. 1612-1615). IEEE.', 
          'paper': 'https://drive.google.com/file/d/1Bbb93zngPhSX2Wa0jIg8WtAu07zGtcSe/view?usp=sharing'},
        {'title': 'Arefin, M. F., Ahmed, C. F., <strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Leung, C. K., & Cao, L. (2022, January). Mining Contextual Item Similarity without Concept Hierarchy. In 2022 16th International Conference on Ubiquitous Information Management and Communication (IMCOM) (pp. 1-8). IEEE.', 
          'paper': 'https://drive.google.com/file/d/1yNsSu1GxAdnvaNeb76ImQmx-A46wL9jw/view?usp=sharing'},
        {'title':'<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, M. Fahim Arefin and M. B. Abid, \"A Robust Objective Focused Algorithm to Detect Source Code Plagiarism,\" 2022 IEEE 13th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON), New York, NY, NY, USA, 2022, pp. 0109-0115, doi: 10.1109/UEMCON54665.2022.9965688.',
           "code": 'https://github.com/rizveeredwan/copy-checker', 'paper': 'https://drive.google.com/file/d/1TMPKvRksDXb7x0V4ZxzZX77ERHh8ldNF/view?usp=sharing'},
        {'title': '<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, M. F. Arefin, M. R. Khan, M. N. Islam and K. F. Rabbi, \"An Automated System to Calculate Marks from Answer Scripts,\" 2022 IEEE 13th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON), Vancouver, BC, Canada, 2022, pp. 0048-0054, doi: 10.1109/IEMCON56893.2022.9946626.', 
          'paper': 'https://drive.google.com/file/d/1cVf5NrSDCQARIlUGUsRliSYxLTvg4Z0q/view?usp=sharing'}
      ]
    }
    else if(name == "journal") {
      column_names = ['Journal'];
      publications = [
        {'title': '<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Chowdhury Farhan Ahmed, Carson K. Leung, "A tree-based framework to mine top-K closed sequential patterns", Applied Intelligence (2024) [In Press]' 
          , 'code' : 'https://github.com/rizveeredwan/top-k-closed-tree-miner', 'paper' : './resources/Published Papers/KCloTreeMiner.pdf'
        },
        {'title': '<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Raheeb Hassan, Md. Mosaddek Khan, "Reinforcement Learning-Based Formulations With Hamiltonian-Inspired Loss Functions for Combinatorial Optimization Over Graphs", in IEEE Access, vol. 12, pp. 171055-171065, 2024, doi: 10.1109/ACCESS.2024.3497955' 
          , 'code' : 'https://github.com/rizveeredwan/RL-QUBO/tree/main', 'paper' : './resources/Published Papers/RL_QUBO.pdf'
        },
        {'title': '<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Chowdhury Farhan Ahmed, Md. Fahim Arefin, Carson K. Leung, "A new tree-based approach to mine sequential patterns", Expert Systems with Applications,Volume 242,2024,122754,ISSN 0957-4174,<a href="https://doi.org/10.1016/j.eswa.2023.122754"> (https://doi.org/10.1016/j.eswa.2023.122754)</a>' 
          , 'code' : 'https://github.com/rizveeredwan/Incremental-Sequential-Pattern-Mining-with-SP-Tree.', 'paper' : './resources/Published Papers/ESWA IncTreeMiner.pdf'
        },
        {'title': '<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, et al. "LeafNet: A proficient convolutional neural network for detecting seven prominent mango leaf diseases." Journal of Agriculture and Food Research (2023): 100787.',
          'paper' : './resources/Published Papers/LeafNet.pdf'
        },
        {'title': '<strong style="font-weight:bold;">Redwan Ahmed Rizvee</strong>, Mahmood, A., Mullick, S. S., & Hakim, S. ARobust THREE-STAGE HYBRID FRAMEWORK FOR ENGLISH TO BANGLA TRANSLITERATION., International Journal on Natural Language Computing (IJNLC) Vol.11, No.1, February 2022', 
          'paper': 'https://www.researchgate.net/profile/Seth-Darren/publication/359815284_A_Robust_Three-Stage_Hybrid_Framework_for_English_to_Bangla_Transliteration/links/624fe3dd4f88c3119ce876d5/A-Robust-Three-Stage-Hybrid-Framework-for-English-to-Bangla-Transliteration.pdf' }
      ]

      
    }
    else if(name == "ongoing_tasks"){
      column_names = ['Ongoing Project'];
      publications = [
        //{'title': 'Name', 'link': 'Link'}
      ]
    }
    for(var i=0; i<publications.length; i++){
      publications[i] = [constructInfoDiv(publications[i], i)];
    }

    return [column_names, publications]
  }

  // publications
  let data = readFromCSV_publications("conference");
  let table_string = constructTable(data[0], data[1]);
  console.log("data ", data[0], data[1])
  console.log("table_string conference ", table_string)
  $('#conference_info').html(table_string)
  $('#conference_info').DataTable({
      "ordering": false // false to disable sorting (or any other option)
  });

  data = readFromCSV_publications("journal");
  table_string = constructTable(data[0], data[1]);
  $('#journal_info').html(table_string)
  $('#journal_info').DataTable({
      "ordering": false // false to disable sorting (or any other option)
  });

  // ongoing projects
  data = readFromCSV_publications("ongoing_tasks");
  table_string = constructTable(data[0], data[1]);
  if(data[1].length == 0) {
    //$('#ongoing_tasks').css('display', none);
    document.getElementById('ongoing_div').style.display="none"
    document.getElementById('ongoing_tasks').style.display="none";
  }
  else {
    $('#ongoing_tasks').html(table_string)
    $('#ongoing_tasks').DataTable({
        "ordering": false // false to disable sorting (or any other option)
    });
  }



  $('#projects_table').DataTable({
      "ordering": true // false to disable sorting (or any other option)
  });

  $('.dataTables_length').addClass('bs-select');

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $('#logo_button').on('click', function(){
    console.log("clicked");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  });

  $('.show_short_des_div').on('click', function(){
    var id = $(this).attr('id'); 
    var num = id.split('_')[3]; 
    id = 'detail_short_des_' + num; 
    console.log(id);
    $('#'+id).toggle(); 
  });


 
  

});
