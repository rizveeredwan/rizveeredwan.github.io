$(document).ready(function(){

  let options = {
    pages: ['index.html', 'experience.html', 'projects.html', 'publications.html', 'hobby.html'],
    keys: ['home', 'experience', 'projects', 'publications', 'hobby'],
    names:  ['Home', 'Experience', 'Projects', 'Publications', 'Hobby'],
  }

  let current_key = "";

  try{
    console.log($.csv);
  }
  catch(e){
    console.log(e);
  }

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

  function readFromCSV(){
    $.ajax({
      url: "./resources/paper information - Sheet1.csv", //http://docs.google.com/spreadsheets/d/1wwAOu-Ntl4Ui5-AbsNYxiXj0nsgCTZjUVVxHqh21wJQ/edit?usp=sharing
      type: "GET",
      contentType: 'application/x-www-form-urlencoded',
      headers: {
              //"Access-Control-Request-Headers": "x-requested-with",
              //"Access-Control-Allow-Headers" : 'x-requested-with',
              'Access-Control-Allow-Origin': '*'

      },
      success: function (response) {
          //var resp = JSON.parse(response)
          alert(response);
      },
      error: function (xhr, status) {
          alert("error");
      }
    });
  }
  readFromCSV()

  let table_string = constructTable(
    ['Paper Name', 'Year', 'Venue'],
    [
      ['<a href="https://drive.google.com/file/d/1frNezmqqcPZeYa3YQPzL_eWIXR4_gYZm/view?usp=sharing">RA Rizvee, MF Arefin, CF Ahmed, Advances in Knowledge Discovery and Data Mining 12085, 44</a>', 2020, "PAKDD 2020"]
    ]
  );
  $('#dtBasicExample').html(table_string)
  $('#dtBasicExample').DataTable({
      "ordering": true // false to disable sorting (or any other option)
  });
  $('.dataTables_length').addClass('bs-select');

});
