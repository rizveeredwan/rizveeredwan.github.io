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

  function readFromCSV_publications(){
    column_names = ['Paper name',	'Authors',	'Link',	'Year',	'Venue'],
    publications = [
      ["Tree-miner: mining sequential patterns from sp-tree",	"Redwan Ahmed Rizvee, MF Arefin, CF Ahmed",	"<a href='https://drive.google.com/file/d/1frNezmqqcPZeYa3YQPzL_eWIXR4_gYZm/view?usp=sharing'>Link</a>",	2020,	"PAKDD 2020"],
      ["Sliding window based weighted periodic pattern mining over time series data",	"Redwan Ahmed Rizvee, SH Shahin, CF Ahmed, CK Leung",	"<a href='https://drive.google.com/file/d/1xLMC-gsBUjCz2mXjMZNxnabs1DWHvDM_/view?usp=sharing'>Link</a>",	2019,	"ICDM 2019"],
      ["An efficient approach for mining weighted frequent patterns with dynamic weights",	"U Dewan, CF Ahmed, CK Leung, Redwan Ahmed Rizvee, D Deng",	"<a href='https://drive.google.com/file/d/1GogVYGnFzHizZcvt_Z7aXrhPoikl4eNR/view?usp=sharing'>Link</a>",	2019,	"ICDM 2019"],
      ["How Newspapers Portrayed COVID-19: A Study Based on United Kingdom and Bangladesh",	"Redwan Ahmed Rizvee, M Zaber",	"<a href='https://drive.google.com/file/d/1cbjVD3wVh-0jn--dN5SkJh4N7SMv97KZ/view?usp=sharing'>Link</a>",	2021,	"ANTICOVID 2021"],
      ["What Can Nighttime Lights Tell Us about Bangladesh?",	"M Wahed, Redwan Ahmed Rizvee, RR Haque, AM Ali, M Zaber",	"<a href='https://drive.google.com/file/d/1Bbb93zngPhSX2Wa0jIg8WtAu07zGtcSe/view?usp=sharing'>Link</a>",	2021,	"TENSYMP 2020"],
      ["Mining Contextual Item Similarity without Concept Hierarchy",	"MF Arefin, CF Ahmed, Redwan Ahmed Rizvee",	"<a href='https://drive.google.com/file/d/1yNsSu1GxAdnvaNeb76ImQmx-A46wL9jw/view?usp=sharing'>Link</a>",	2022,	"IMCOM 2022"],
      ["A Robust Three-Stage Hybrid Framework For English To Bangla Ttransliteration",	"Redwan Ahmed Rizvee, A Mahmood, SS Mullick, S Hakim",	"<a href='https://drive.google.com/file/d/1L33iKHugbWOGi0q3nK07VHXkMMhfyAqi/view?usp=sharing'>Link</a>",	2021,	"IJNLC"]
    ]
    return [column_names, publications]
  }

  // publications
  let data = readFromCSV_publications()
  let table_string = constructTable(data[0], data[1]);
  $('#dtBasicExample').html(table_string)
  $('#dtBasicExample').DataTable({
      "ordering": true // false to disable sorting (or any other option)
  });


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




});
