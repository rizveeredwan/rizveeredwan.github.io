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
  }
  renderNavigation();

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

});
