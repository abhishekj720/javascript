
(function(){
    'use strict';

     var elements = [{ author: "Harry", bookName: "Akamai and his mind", date: "2018-05-02"}
                    ]
//var elements =[{author:" ",bookName:"",date:""}]
        var numberOfColumns = [];
        function createElement(elementType){
            return document.createElement(elementType)
        }
        
        function createHeaderRow(){
            var headerRow = createElement('tr')
            for(var i in elements[0]){
                var column = createElement('th')
                column.innerHTML = i.toUpperCase();
                headerRow.appendChild(column);
                numberOfColumns.push(i);
            }
            console.log(headerRow)
            return headerRow
        }
        function createDataRow(i){
            // for(var i=0; i<elements.length;i++){
                var dataRow = createElement('tr') 
                switch(i%3) {
                    case 0: dataRow.className = "bg-secondary" ; break
                    case 1: dataRow.className = "bg-success" ; break
                    case 2: dataRow.className = "bg-danger" ; break
                    default: dataRow.className = "bg-primary" 
                }
                for(var columns=0; columns<numberOfColumns.length; columns++){
                    var dataColumn = createElement('td')
                    // dataColumn.className = "text-danger"
                    dataColumn.innerHTML = elements[i][numberOfColumns[columns]]
                    // dataColumn.className = "bg-primary";
                    dataColumn.contentEditable = "true";
                    dataRow.appendChild(dataColumn);
                    // console.log(dataRow)
                }
                var btnColumn = createElement('td')
                var btn = createElement('button');
                btn.className = "btn btn-danger"
                btn.innerHTML = "Delete"
                btn.id = 'btn'+i;
                // btn.onclick = function(){window.alert('clicked '+this.id)}
                btn.addEventListener('click',function(){ 
                                                var id = this.id;
                                                id = id.slice(3);
                                                elements.splice(Number(id),1)
                                                // console.log(elements)
                                                // this.parentNode.parentNode.parentNode.previousSibling.remove()
                                                this.parentNode.parentNode.remove()
                                                // reload()
                                                console.log(elements)
                                            })
                btnColumn.appendChild(btn)
                dataRow.appendChild(btnColumn)
                console.log(dataRow)
                return dataRow
            // }
        }
        function createTable(){
            var tbl = document.getElementById('tblElements')
            tbl.className = "table table-striped table-bordered table-dark"
            var thead = createElement('thead')
            thead.appendChild(createHeaderRow())
            tbl.appendChild(thead)
            var tbody = createElement('tbody')
            tbody.id = 'tBody';
            for(var i=0; i<elements.length;i++){
                tbody.appendChild(createDataRow(i))
            }
            tbl.appendChild(tbody)
            // var buttons = document.getElementsByClassName('btn')
            // for(var r=0; r<buttons.length;r++){
            //     buttons[r].addEventListener('click',function(){
            //         this.parentNode.parentNode.remove()
            //     })
            // }
            console.log(tbl)
        }
        createTable()


        let add = document.getElementById('add');
        add.addEventListener('click',function(){
            let author = document.getElementById('author')
            let book = document.getElementById('book')
            let date = document.getElementById('date')
            elements.push({author:author.value, bookName: book.value, date: date.value})
            author.value=''
            book.value=''
            date.value=''
            console.log(elements)
            let tbody = document.getElementById('tBody')
            tbody.appendChild(createDataRow(elements.length-1))
        })
})();
