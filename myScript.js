 function showFileIcon() {
          var x = document.getElementById("File");
          if ('files' in x) {
              if (x.files.length == 0) {
                  txt = "Bir dosya seçiniz.";
                  alert(txt);
              }
              else {
                  var excelExtensions = ["xlsx", "csv", "xls","xlsx", "XLS", "XLSX"]; //excel
                  var wordExtentions = ["docx", "doc", "txt"]; //word
                  var jpgExtentions = ["jpg", "png", "JPG", "PNG"]; //jpg
                  var pdfExtentions = ["pdf"]; //pdf
                  var file = x.files[0];
                  var temp = file.name.split('.');
                  var extension = temp[1];
                  var src;
                  if (excelExtensions.includes(extension)) {
                      src = "/image/excel.png";
                  }
                  else if (pdfExtentions.includes(extension)) {
                      src = "/image/pdf.jpg";
                  }
                  else if (wordExtentions.includes(extension)) {
                      src = "/image/word.ico";
                  }
                  else if (jpgExtentions.includes(extension)) {
                      src = "/image/jpg.jpg";
                  }
                  var img = document.createElement("IMG");
                  img.style = "width:30px;height:30px;margin-right:10px";
                  img.src = src;
                  var text = document.createTextNode(file.name);
                  var li = document.createElement("LI");
                  li.setAttribute('href', "http://www.msn.com");
                  li.appendChild(img);
                  li.appendChild(text);
                  document.getElementById("myList").appendChild(li);

              }
          }
      }
