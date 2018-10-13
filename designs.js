// Select color input
// Select size input
var cellColor, nRow, selectedCell;


function makeGrid() {
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();
    var grid = $('#pixelCanvas');

    grid.children().remove();

    //This for loop creates the tables rows
    for (var trowCount = 0; trowCount < height; trowCount++) {
        grid.append('<tr></tr>');
    }

    nRow = $('tr');

    //This for loop creates the table cells
    for (var cellCount = 0; cellCount < width; cellCount++) {
        nRow.append('<td></td>');
    }

  selectedCell = grid.find('td');

	// This fuction selects the color when the
  // cell is clicked on by the user
	selectedCell.click(function() {
		cellColor = $('#colorPicker').val();
        if ($(this).attr('bgcolor')) {
            $(this).removeAttr('bgcolor')
        } else {
            $(this).attr('bgcolor', cellColor);
        }
	});
}

// This calles the makegrid function
// when the user submits the grid size
$(document).ready(function() {
    var createGrid = $('input[type="submit"]');
    createGrid.click(function(event) {
        event.preventDefault();
        makeGrid();
    });
});
